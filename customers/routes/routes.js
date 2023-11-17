const express = require("express");
const router = express.Router();
const Customers = require("../models/customers");
const auth = require("../middleware/jwt-verify");

router.get("/", auth, (req, res) => {
  Customers.find()
    .then((result) => {
      res.status(200).send({ output: "ok", payload: result });
    })
    .catch((error) =>
      res.status(500).send({ output: "internal error", error: error })
    );
});

router.get("/find", auth, (req, res) => {
  Customers.find()
    .then((result) => {
      res.status(200).send({ output: "ok", payload: result });
    })
    .catch((error) =>
      res.status(500).send({ output: "internal error", erro: error })
    );
});

router.post("/insert", auth, (req, res) => {
  const data = Customers(req.body);
  data
    .save()
    .then((result) => {
      res.status(201).send({ output: "inserted", payload: result });
    })
    .catch((error) => {
      res.status(400).send({ output: "Error", error: error });
    });
});

router.put("/update/:id", auth, (req, res) => {
  Customers.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        res.status(400).send({ output: "not found" });
      }
      res
        .status(202)
        .send({ output: "updated", id: req.params.id, payload: result });
    })
    .catch((error) => {
      res.status(500).send({ output: "internal error", error: error });
    });
});

router.delete("/delete/:id", auth, (req, res) => {
  Customers.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204);
    })
    .catch((error) => {
      res.status(500).send({ output: "error" });
    });
  res.status(204).send({ output: "deleted" });
});

router.use((req, res) => {
  res.type("application/json");
  res.status(404).send("404 - not found");
});

module.exports = router;
