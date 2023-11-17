const mongoose = require("../database/connection");

const customersSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  cpf: { type: String, unique: true, require: true },
  phone: { type: String },
  age: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
});

const Customers = mongoose.model("customers", customersSchema);
module.exports = Customers;
