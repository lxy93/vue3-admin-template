import axios from "axios";
import { ElMessage } from 'element-plus'
let serve = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
//请求拦截器
serve.interceptors.request.use((config)=> {
    console.log(config)
    config.headers.token = 'token'
    return config
})
// 响应拦截器
serve.interceptors.response.use((response)=> {
    return response.data
},(error)=> {
    let msg = ''
    let status = error.response.status
    switch(status) {
        case 401:
            msg = 'TOKEN过期'
            break;
        case 403:
            msg = '无权访问'
            break;
        case 404:
            msg = '请求地址错误'
            break;
        case 500:
            msg = '服务器报错'
            break;
        default:
            msg = '网络错误'
            break;
    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error)
})
export default serve