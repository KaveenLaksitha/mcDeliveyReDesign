const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    salutation: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true,
    
    },
    contactno: {
        type: Number,
        required:true,
        unique: true
    },
    dateofbirth: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
        maxlength: 10,
        minlength: 6
    },
    confirmpassword: {
        type: String,
        required:true,
        maxlength: 10,
        minlength: 6
    }
})

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;