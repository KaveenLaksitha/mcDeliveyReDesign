import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const createAddress = async (address) => {
    console.log("data for address", address);
    try {
        const response = await axios.post(`${HOST}/api/addAddress`, address)
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
export const getDeliveryAddresses = async () => {
    try {
        const response = await axios.get(`${HOST}/api/getAddress`);
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