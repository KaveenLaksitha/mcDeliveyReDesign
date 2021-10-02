const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodFavSchema = new Schema({
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
    }

})

const FoodFav = mongoose.model("FoodFav", foodFavSchema);
module.exports = FoodFav;