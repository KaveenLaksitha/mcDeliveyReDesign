const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    cardType: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true,
        unique: true
    },
    nameOnCard: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String,
        required: true,
    },
    uri: {
        type: String,
        required: true
    }
})

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;