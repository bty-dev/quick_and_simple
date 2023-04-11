import StartPage from "@/pages/StartPage";
import LoginPage from "@/pages/LoginPage";
import {createRouter, createWebHistory} from "vue-router";
import DashboardPage from "@/pages/DashboardPage";
import DemoPage from "@/pages/DemoPage";

const routes = [
    {
        path: "/",
        component: StartPage,
        name: "Start",
    },
    {
        path: "/login",
        component: LoginPage,
        name: "Login",
    },
    {
        path: "/dashboard",
        component: DashboardPage,
        name: "Dashboard",
    },
    {
        path: "/demo",
        component: DemoPage,
        name: "Demo",
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

const isAuth = true;

router.beforeEach(async (to, from) => {
    if (
        !isAuth &&
        to.name !== "Login" &&
        to.name !== "Start"
    ) {
        return {
            name: "Login"
        }
    }
})

export default router;