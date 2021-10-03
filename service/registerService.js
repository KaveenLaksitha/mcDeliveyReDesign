import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const addRegister = async (payload) => {
    console.log("payload for register", payload);
    try {
        const response = await axios.post(`${HOST}/register/addRegister`, payload)
        if (response) {
            return { ok: true }
        }
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

// //for retrive the all records
// export const getAllItems = async () => {
//     try {
//         const response = await axios.get(`${HOST}/api/cart`);
//         return {
//             ok: true,
//             data: response.data.data,
//         };
//     } catch (error) {
//         return {
//             ok: false,
//         };
//     }
// };