<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <div class="login-form-box">
                    <h1>Hello</h1>
                    <h2>欢迎来到51家庭管家甄选</h2>
                    <el-form ref="loginRef" :model="loginForm" :rules="loginRules">
                        <el-form-item prop="username">
                            <el-input type="text" v-model="loginForm.username" :prefix-icon="User" ></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="loginForm.password" :prefix-icon="Lock" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button :loading="loading" @click="login" type="primary" class="login-btn">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time'
const useStore = useUserStore()
const $router = useRouter()
let loading = ref(false)
let loginForm = reactive({
    username: '',
    password: ''
})
const validateUserName = (rule: any, value: any, callback: any)=> {
    console.log(rule,value)
}
const validatePassword = (rule: any, value: any, callback: any)=> {
    console.log(rule,value)
}
const loginRules = {
    username: [
        {required: true, message: '用户名不能为空', trigger: 'blur'},
        {min: 4, message: '用户名不能少于4个字符',trigger: 'blur'},
        // {validator: validateUserName, trigger: 'blur'}
    ],
    password: [
        {required: true, message: '密码不能为空', trigger: 'blur'},
        {min: 6, message: '密码不能少于6个字符',trigger: 'blur'},
        // {validator: validatePassword, trigger: 'blur'}
    ]
}

const loginRef = ref()

// 登录点击
const login = ()=> {
    loading.value = true
    loginRef.value.validate(valid=> {
        if(valid){
            useStore.userLogin(loginForm).then(()=> {
                ElNotification({
                    type: 'success',
                    message: '欢迎回来',
                    title: `Hi,${getTime()}好`
                })
                loading.value = false
                $router.push({
                    path: '/'
                })
            }).catch((error: Error)=> {
                loading.value = false
                ElNotification({
                    type: 'error',
                    message: error.message
                })
            })
        }else{
            loading.value = false
        }
    })
}

</script>

<style lang='scss' scoped>
.login-container{
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .login-form-box{
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 20px;
        h1{
            font-size: 40px;
            color: #fff;
        }
        h2{
            font-size: 20px;
            color: #fff;
            margin: 20px 0;
        }
        .login-btn{
            width: 100%;
        }
    }
}
</style>