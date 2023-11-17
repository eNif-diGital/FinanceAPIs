const jwt = require("jsonwebtoken");
const config = require("../config/config");

const createToken = (id, user) => {
  return jwt.sign({ id: id, user: user }, config.jwt_key, {
    expiresIn: config.jwt_expires,
  });
};

module.exports = createToken;
