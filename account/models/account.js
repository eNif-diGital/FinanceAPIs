const mongoose = require("../database/connection");

const accountSchema = new mongoose.Schema({
  bankName: { type: String, require: true },
  accountType: { type: String, unique: true, require: true },
  ownerName: { type: String, unique: true, require: true },
  limit: { type: Number },
});

const Account = mongoose.model("account", accountSchema);
module.exports = Account;
