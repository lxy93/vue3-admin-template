import { createRouter, createWebHistory } from "vue-router"
import { constantRoute } from "./routes"
const routes = constantRoute
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})
export default router