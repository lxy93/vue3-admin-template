import { defineStore } from 'pinia'
import { getLogin } from '@/api/user/index'
import type { loginForm } from '@/api/user/type'
import { ElMessage } from 'element-plus'
let useUserStore = defineStore('User',{
    state:()=> {
        return {
            token: '111'
        }
    },
    actions: {
        /**
         * 用户登录
         */
        async userLogin(params: loginForm) {
            const {code, data} = await getLogin(params)
            if(code !== 200){
                ElMessage({
                    message: data.message
                })
                return false
            }
            this.token = data.token

            
        }
    },
    getters: {},
})

export default useUserStore