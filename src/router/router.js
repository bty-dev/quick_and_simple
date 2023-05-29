import StartPage from "@/pages/StartPage";
import LoginPage from "@/pages/LoginPage";
import {createRouter, createWebHistory} from "vue-router";
import DashboardPage from "@/pages/DashboardPage";
import DemoPage from "@/pages/DemoPage";
import store from "@/store";
import ProfilePage from "@/pages/ProfilePage";
import ExamplesPage from "@/pages/ExamplesPage";
import RegisterPage from "@/pages/RegisterPage";

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
    },
    {
        path: "/profile",
        component: ProfilePage,
        name: "ProfilePage",
    },
    {
        path: "/examples",
        component: ExamplesPage,
        name: "ExamplesPage",
    },
    {
        path: "/register",
        component: RegisterPage,
        name: "RegisterPage",
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: "active",
})

router.beforeEach(async (to, from) => {
    if (
        !store.getters.getIsAuth &&
        to.name !== 'Login' &&
        to.name !== 'RegisterPage'
    ) {
        return { name: 'Login' }
    }
})

export default router;