import axios from "axios";

const HOST = "http://localhost:4000";


//for creating of a feedback
export const createFeedBack = async (feedback) => {
    console.log(feedback, "<<<<<<<<<<<<<<<<<<<<<<<<");
    try {
        await axios.post(`${HOST}/feedback/AddAReview`, feedback);
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