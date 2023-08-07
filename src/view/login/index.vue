<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <div class="login-form-box">
                    <h1>Hello</h1>
                    <h2>欢迎来到51家庭管家甄选</h2>
                    <el-form :model="loginForm">
                        <el-form-item>
                            <el-input type="text" v-model="loginForm.username" :prefix-icon="User" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input type="password" v-model="loginForm.password" :prefix-icon="Lock" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="login" type="primary" class="login-btn">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
console.log(useStore.aa,'ooo')
let loginForm = reactive({
    username: '',
    password: ''
})
const login = ()=> {

    useStore.userLogin(loginForm)
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