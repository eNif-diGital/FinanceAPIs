require("dotenv").config();

const env = process.env.NODE_ENV || "development";

const config = () => {
  switch (env) {
    case "development":
      return {
        dbpath: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
        jwt_key: process.env.JWT_KEY,
        jwt_expires: "5d",
        bcrypt_salt: 10,
      };

    case "production":
      return {
        dbpath: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
        jwt_secret: process.env.JWT_KEY,
        jwt_expires: "5d",
        bcrypt_salt: 10,
      };
  }
};

module.exports = config();
