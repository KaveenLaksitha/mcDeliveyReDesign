"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var registerSchema = new Schema({
  salutation: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  contactno: {
    type: Number,
    required: true,
    unique: true
  },
  dateofbirth: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 10,
    minlength: 6
  },
  confirmpassword: {
    type: String,
    required: true,
    maxlength: 10,
    minlength: 6
  }
});
var Register = mongoose.model("Register", registerSchema);
module.exports = Register;
//# sourceMappingURL=register.dev.js.map
