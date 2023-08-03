import request from '@/utils/request'
import type { loginForm } from './type'

enum API {
    LOGIN_URL = 'user/login',
    USERINFO_URL = 'user/info'
}
//登录
export const getLogin = (data: loginForm)=> {
    return request({
        url: API.LOGIN_URL,
        method: 'post',
        data
    })
}
 
//获取用户信息
export const getUserInfo = ()=> {
    return request({
        url: API.USERINFO_URL
    })
}
