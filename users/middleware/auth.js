const jwt = require("jsonwebtoken");
const config = require("../config/config");
const auth = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).send({ output: "Access denied." });
  }
  jwt.verify(token, config.jwt_key, (err, data) => {
    if (error) return res.status(401).send({ output: `Token Fail -> ${err}` });

    req.content = {
      id: data.id,
      user: data.user,
    };
    return next();
  });
};

module.exports = auth;
