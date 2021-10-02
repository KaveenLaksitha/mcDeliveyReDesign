const router = require("express").Router();
const FeedBack = require("../model/feedback")

//to add a new feedback

router.post("/addAReview", async (req, res) => {

    console.log("data for cart", req.body)

    const orderId = req.body.orderId;
    const reviewOn = req.body.reviewOn;
    const suggestion = req.body.suggestion;
    const complaint = req.body.complaint;
    const rate = Number(req.body.rate);


    const newFeedBack = new FeedBack({
        orderId,reviewOn,suggestion,complaint,rate
    })

    try {

        let response = await newFeedBack.save();
        if (response) {
            return res.status(201).send({ status: "New FeedBack Saved" })
        } else {
            return res.status(500).send({ status: "FeedBack could not be saved" })
        }

    } catch (err) {
        console.log("error", err)
    }
})

//to retrieve data from db
router.get("/getReview", async (req, res) => {

    try {
        const response = await FeedBack.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

module.exports = router;