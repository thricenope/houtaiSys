import axios from "axios";
import {ElMessage} from "element-plus";

const baseURL = import.meta.env.VITE_APP_BASE_API
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

service.interceptors.request.use(
    response => {
        const {success,message,data} = response.data
        if(success) {
            return data
        }else{
            ElMessage.error(message)
            return Promise.reject(new Error(message))
        }
    },
    error =>{
        ElMessage.error(error.message)
        return Promise.reject(error.message)
    }
)


export default service
