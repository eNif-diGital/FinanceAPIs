const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../model/user");
const ManagerUser = require("../model/manage-user");
const createToken = require("../utils/token");

router.get("/", (req, res) => {
  res.send({ output: req.headers });
});

router.post("/add", (req, res) => {
  const data = new User(req.body);
  data
    .save()
    .then((data) => {
      res.status(201).send({ output: "New user inserted", payload: data });
    })
    .catch((error) => {
      res.status(400).send({ output: `insertion failed -> ${error}` });
    });
});

router.post("/login", (req, res) => {
  const us = req.body.username;
  const ps = req.body.password;

  User.findOne({ username: us })
    .then((data) => {
      if (!data) return res.status(404).send({ output: "user not found" });

      bcrypt.compare(ps, data.password, (error, same) => {
        if (error) return res.status(500).send({ output: `internal error` });
        if (!same)
          return res.status(400).send({ output: "Authentication Fail" });
        const token = createToken(data._id, data.user);
        const info = new ManagerUser({
          useId: data._id,
          username: data.username,
          information: req.headers,
        });
        info.save();
        res
          .status(200)
          .send({ output: "Authorized", payload: data, token: token });
      });
    })
    .catch((error) => {
      res.status(400).send({ output: "Find user error" });
    });
});

router.use((req, res) => {
  res.type("application/json");
  res.status(404).send("404 - not found");
});

module.exports = router;
