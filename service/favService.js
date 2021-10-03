import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const addToFav = async (payload) => {
    try {
        const response = await axios.post(`${HOST}/api/addToFav`, payload)
        if (response) {
            return { ok: true }
        }
    } catch (err) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

export const getAllFav = async () => {
    try {
        const response = await axios.get(`${HOST}/api/FavList`);
        return {
            ok: true,
            data: response.data.data,
        };
    } catch (error) {
        return {
            ok: false,
        }
    }
};