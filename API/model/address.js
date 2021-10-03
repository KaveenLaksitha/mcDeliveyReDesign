const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({

    userId: {

        type: String,
        unique: true,
        required: true,

    },
    deliveryAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    locationType: {
        type: String,
        required: true
    },
    floor: {
        type: String
    },
    apartmentNo: {
        type: String
    },
    landMark: {
        type: String,
        required: true
    },
    companyName: {
        type: String
    },
    department: {
        type: String
    },
    instruct: {
        type: String,
        required: true
    }
})

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;