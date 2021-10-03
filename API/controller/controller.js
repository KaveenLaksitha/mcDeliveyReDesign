const router = require("express").Router();
const Cart = require("../model/cart")
const Register = require("../model/register") 
const moment = require('moment');
//to add items to cart{

router.post("/addToCart", async (req, res) => {

    console.log("data for cart", req.body)

    const name = req.body.name;
    const quantity = req.body.num;
    const price = req.body.calculatedPrice;

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

router.post("/addRegister", async (req, res) => {

    console.log("data for register", req.body)

    const salutation = req.body.salutation;
    const name = req.body.name;
    const contactno = Number(req.body.contactno);
    const dateofbirth =  moment(req.body.dateofbirth).format('YYYY-MMMM-DD');
    const email = req.body.email;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    const newRegister = new Register({
        salutation, name, contactno, dateofbirth, email, password, confirmpassword
    })

    try {
        let response = await newRegister.save();
        if (response) {
            return res.status(201).send({ status: true, message: "Register to the system successfully" })
        } else {
            return res.status(500).send({ status: "Try again" })
        }

    } catch (err) {
        console.log("error", err)
    }
})

router.get("/getRegister", async (req, res) => {

    try {
        const response = await Register.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

router.get("/get/:un/:pass", async (req, res) => {
    let UN = req.params.un;//username taken from the frontend login form
    let pass = req.params.pass;//password taken from the frontend login form

    try {
        const response = await Register.findOne({username: UN, password: pass});
        return res.status(200).send({ status: "Success", data: response });
    }catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }
})


module.exports = router;