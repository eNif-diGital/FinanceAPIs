const jwt = require("jsonwebtoken");
const config = require("../config/config");
const auth = (req, res, next) => {
  const tokenCreated = req.headers.token;
  if (!tokenCreated) return res.status(401).send({ output: "Access denied" });

  jwt.verify(tokenCreated, config.jwt_key, (error, data) => {
    if (error)
      return res.status(401).send({ output: `Token fail -> ${error}` });
    req.content = {
      id: data.id,
      user: data.user,
    };
    return next();
  });
};

module.exports = auth;
