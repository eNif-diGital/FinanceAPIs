const mongoose = require("../database/connection");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 10, (err, hashpass) => {
    if (err) console.error(err);
    user.password = hashpass;
    return next();
  });
});

module.exports = mongoose.model("User", userSchema);
