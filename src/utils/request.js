import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_API
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

export default service
