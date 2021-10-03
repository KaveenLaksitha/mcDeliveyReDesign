import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const getAllFood = async (category) => {
    try {
        const response = await axios.get(`${HOST}/api/FoodList/${category}`);
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