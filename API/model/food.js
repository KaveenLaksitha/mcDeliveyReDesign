const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    cate: {
        type: Number
    },

    state: {
        type: Number
    }
})

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;