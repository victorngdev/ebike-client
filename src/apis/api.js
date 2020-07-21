import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8000/api/v1.0"
    baseURL: "https://cryptic-stream-80614.herokuapp.com/api/v1.0"
})

export const getAddress = axios.create({ baseURL: "https://thongtindoanhnghiep.co/api" })