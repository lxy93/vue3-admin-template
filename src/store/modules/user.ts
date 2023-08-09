import { defineStore } from 'pinia'
import { getLogin } from '@/api/user/index'
import type { loginForm } from '@/api/user/type'
import type { IUserState } from './type/type'
let useUserStore = defineStore('User',{
    state: (): IUserState=> {
        return {
            token: localStorage.getItem('Token')
        }
    },
    actions: {
        /**
         * 用户登录
         */
        async userLogin(params: loginForm) {
            const {code, data} = await getLogin(params)
            if(code !== 200){
                return Promise.reject(new Error(data.message))
            }
            this.token = data.token as string
            localStorage.setItem('Token',data.token as string)
            return true
        }
    },
    getters: {},
})

export default useUserStore