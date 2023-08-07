import request from '@/utils/request'
import type { loginForm, loginReaponeseData,userReaponeseData } from './type'

enum API {
    LOGIN_URL = 'user/login',
    USERINFO_URL = 'user/info'
}
//登录
export const getLogin = (data: loginForm)=> request.post<any,loginReaponeseData>(API.LOGIN_URL, data)
 
//获取用户信息
export const getUserInfo = ()=> request.get<any,userReaponeseData>(API.USERINFO_URL)
