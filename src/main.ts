import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import App from "./App.vue";
import 'virtual:svg-icons-register' //svg注册
import globalComponent from '@/components'
import '@/styles/index.scss'
import axios from "axios";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
// import SvgIcon from '@/components/SvgIcon.vue'
// app.component('SvgIcon',SvgIcon)
app.use(globalComponent)
axios({
  url:'/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  }
})
app.mount("#app");

console.log(import.meta.env)
