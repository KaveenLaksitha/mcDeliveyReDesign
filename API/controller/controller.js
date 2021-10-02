const router = require("express").Router();
const Cart = require("../model/cart")

//to add items to cart{

router.post("addToCart", async (req, res) => {
    const name = req.body.name;
    const quantity = req.body.num;
    const price = req.body.price;

    const newCart = new Cart({
        name, quantity, price
    })

    try {

    }
})