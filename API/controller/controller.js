const router = require("express").Router();
const Cart = require("../model/cart")
const FoodFav = require("../model/foodFav")

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

//add food item to favourite list
router.post("/addToFav", async (req, res) => {

    console.log("data for Favourite", req.body)

    const name = req.body.name;
    const quantity = req.body.num;
    const price = req.body.price;
    const image = req.body.image;

    const newFav = new FoodFav({
        name, quantity, price, image
    })

    try {

        let response = await newFav.save();
        if (response) {
            return res.status(201).send({ status: "item added for fAVOURITE" })
        } else {
            return res.status(500).send({ status: "failed to add item record" })
        }

    } catch (err) {
        console.log("error", err)
    }
})

//to retrieve data from db
router.get("/FavList", async (req, res) => {

    try {
        const response = await FoodFav.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


module.exports = router;