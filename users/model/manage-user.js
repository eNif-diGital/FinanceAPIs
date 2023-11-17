const mongoose = require("../database/connection");
const managerSchema = new mongoose.Schema({
  userId: { type: String },
  username: { type: String },
  information: [{}],
  dateLogin: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ManagerUser", managerSchema);
