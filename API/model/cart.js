const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
})