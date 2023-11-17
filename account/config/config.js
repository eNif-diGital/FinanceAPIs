require("dotenv").config();
const config = () => {
  return {
    jwt_key: process.env.JWT_KEY,
    jwt_expires: process.env.JWT_EXPIRES,
    dbpath: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
  };
};
module.exports = config();
