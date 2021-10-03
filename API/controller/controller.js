const router = require("express").Router();
const Cart = require("../model/cart");
const FeedBack = require("../model/feedback");
const Address = require("../model/address");
const Card = require("../model/card");

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


//to add a new feedback

router.post("/addAReview", async (req, res) => {

    console.log("data for feedback", req.body)

    const orderId = req.body.orderId;
    const reviewOn = req.body.reviewOn;
    const suggestion = req.body.suggestion;
    const complaint = req.body.complaint;
    const rate = Number(req.body.rate);


    const newFeedBack = new FeedBack({
        orderId, reviewOn, suggestion, complaint, rate
    })

    try {

        let response = await newFeedBack.save();
        if (response) {
            return res.status(201).send({ status: "New FeedBack Saved" })
        } else {
            return res.status(500).send({ status: "FeedBack could not be saved" })
        }

    } catch (err) {
        console.log("error", err);
        return res.status(500).send({ status: "FeedBack could not be saved" })
    }
})

//to retrieve all feedbacks from db
router.get("/getReview", async (req, res) => {

    try {
        const response = await FeedBack.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

//to add a new delivery Address

router.post("/addAddress", async (req, res) => {

    console.log("data for address", req.body)

    const userId = req.body.userId;
    const deliveryAddress = req.body.deliveryAddress;
    const city = req.body.city;
    const locationType = req.body.locationType;
    const floor = req.body.floor;
    const apartmentNo = req.body.apartmentNo;
    const landMark = req.body.landMark;
    const companyName = req.body.companyName;
    const department = req.body.department;
    const instruct = req.body.instruct;


    const newAddress = new Address({
        userId, deliveryAddress, city, locationType, floor, apartmentNo, landMark, companyName, department, instruct
    })

    try {

        let response = await newAddress.save();
        if (response) {
            return res.status(201).send({ status: "New Delivery Address Successfully Saved" })
        } else {
            return res.status(500).send({ status: "Delivery Address could not be saved" })
        }

    } catch (err) {
        console.log("error", err)
        return res.status(500).send({ status: "Delivery Address could not be saved" });
    }
})

//to retrieve list of delivery Addresses from db
router.get("/getAddress", async (req, res) => {

    try {
        const response = await Address.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

//to add a new card

router.post("/addACard", async (req, res) => {

    console.log("data for card", req.body)
    const userId = req.body.userId;
    const cardType = req.body.cardType;
    const cardNumber = req.body.cardNumber;
    const nameOnCard = req.body.nameOnCard;
    const expiryDate = req.body.ExpiryDate;
    const uri = req.body.uri;

    const newCard = new Card({
        userId, cardType, cardNumber, nameOnCard, expiryDate, uri
    })

    try {

        let response = await newCard.save();
        if (response) {
            return res.status(201).send({ status: "New Card Saved" })
        } else {
            return res.status(500).send({ status: "Card could not be saved" })
        }

    } catch (err) {
        console.log("error", err);
        return res.status(500).send({ status: "Card could not be saved" })

    }
})

//to retrieve all cards from db
router.get("/getCards", async (req, res) => {

    try {
        const response = await Card.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

//To delete a card
router.route("/removeCard/:uID").delete(async (req, res) => {

    let userId = req.params.uID;//userId passed from card

    await Card.findOneAndDelete({ userId: userId })
        .then(() => {
            res.status(200).send({ status: "Card deleted" });
        }).catch(() => {
            console.log(err);
            res.status(500).send({ status: "Error with deleting a card", error: err.message });
        })

})


module.exports = router;