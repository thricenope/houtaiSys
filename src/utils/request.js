import axios from "axios";
import {ElMessage} from "element-plus";
import store from '@/store/index.js'

import {isCheckTimeOut} from "./auth";

const baseURL = import.meta.env.VITE_APP_BASE_API
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

service.interceptors.request.use(
    response => {
        const {success, message, data} = response.data
        if (success) {
            return data
        } else {
            ElMessage.error(message)
            return Promise.reject(new Error(message))
        }
    },
    error => {
        if(
            error.response &&
            error.response.data &&
            error.response.data.code === 401
        ) {
            store.dispatch('user/logout')
        }
        ElMessage.error(error.message)
        return Promise.reject(error.message)
    }
)

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            if(isCheckTimeOut()) {
                store.dispatch('user/logout')
                return Promise.reject(new Error('token 失效'))
            }
            config.headers.Authorization = `Bearer ${store.getters.token}`
            return config
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
