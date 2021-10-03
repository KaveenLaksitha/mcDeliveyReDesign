const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    orderId: {
        type: String,
        required:true
    },
    reviewOn: {
        type: String,
        required:true
    },
    suggestion: {
        type: String
    },
    complaint:{
         type: String
    },
    rate:{
        type:Number
    }
})

const FeedBack = mongoose.model("FeedBack", feedbackSchema);
module.exports = FeedBack;