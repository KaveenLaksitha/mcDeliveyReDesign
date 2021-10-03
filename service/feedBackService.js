import axios from "axios";
const HOST = "http://10.0.2.2:4000"


//for creating of a feedback
export const createFeedBack = async (feedback) => {
    console.log(feedback, "<<<<<<<<<<<<<<<<<<<<<<<<");
    try {
        await axios.post(`${HOST}/api/AddAReview`, feedback);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false,
            err: error.response.data.status
        };
    }
};