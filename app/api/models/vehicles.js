const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const VehicleUserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  accountNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  emailAddress: {
    type: String,
    trim: true,
    required: true,
  },
  identityNumber: {
    type: Number,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", VehicleUserSchema);
