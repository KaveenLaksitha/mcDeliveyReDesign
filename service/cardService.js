import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const createCard = async (card) => {
    console.log("data for address", card);
    try {
        const response = await axios.post(`${HOST}/api/addACard`, card)
        if (response) {
            return { ok: true }
        }
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//for retrive the all records
export const getAllCards = async () => {
    try {
        const response = await axios.get(`${HOST}/api/getCards`);
        return {
            ok: true,
            data: response.data.data,
        };
    } catch (error) {
        return {
            ok: false,
        };
    }
};

export const deleteCardPermenantly = async (userId) => {
    console.log("dataa", userId);
    await axios.delete(`${HOST}/api/removeCard/${userId}`);
    try {
        return {
            ok: true,
        }
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        }
    }

};