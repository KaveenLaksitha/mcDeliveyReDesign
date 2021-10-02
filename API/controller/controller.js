const router = require("express").Router();
const Cart = require("../model/cart")

//to add items to cart{

router.post("/addToCart", async (req, res) => {

    console.log("data for cart", req.body)

    const name = req.body.name;
    const quantity = req.body.num;
    const price = req.body.price;

    const newCart = new Cart({
        name, quantity, price
    })

    try {

        let response = await newCart.save();
        if (response) {
            return res.status(201).send({ status: true, message: "item added for cart" })
        } else {
            return res.status(500).send({ status: "failed to add item record" })
        }

    } catch (err) {
        console.log("error", err)
    }
})

//to retrieve data from db
router.get("/cart", async (req, res) => {

    try {
        const response = await Cart.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

module.exports = router;