import {createStore} from "vuex";


const store = createStore({
    state() {
        return {
            isAuth: true,
            isHeader: true,
            headerColor: "#46474a",
            isMain: true,
            footerLinks: [
                "https://www.google.com/search?q=adas",
                "https://www.google.com/search?q=adas",
                "https://www.google.com/search?q=adas",
            ]
        }
    },
    getters: {
        getIsAuth(state) {
            return state.isAuth;
        },
        getIsHeader(state) {
            return state.isHeader;
        },
        getHeaderColor(state) {
            return state.headerColor;
        },
        getIsMain(state) {
            return state.isMain;
        },
        getFooterLinks(state) {
            return state.footerLinks;
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isAuth = payload;
        },
        setHeader(state, payload) {
            state.isHeader = payload;
        },
        setHeaderColor(state, payload) {
            state.headerColor = payload;
        },
        setMain(state, payload) {
            state.isMain = payload;
        },
        setFooterLinks(state, payload) {
            state.footerLinks = payload;
        }
    },
    actions: {
        setAuth(context, payload) {
            context.commit("setAuth", payload);
        },
        setHeader(context, payload) {
            context.commit("setHeader", payload);
        },
        setHeaderColor(context, payload) {
            context.commit("setHeaderColor", payload);
        },
        setMain(context, payload) {
            context.commit("setMain", payload);
        },
        setFooterLinks(context, payload) {
            context.commit("setFooterLinks", payload);
        }
    }
})

export default store;