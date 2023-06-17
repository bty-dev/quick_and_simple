import axios from "axios";

const instance = axios.create({
    baseURL: "http://45.84.225.231:5000"
})

export default instance;