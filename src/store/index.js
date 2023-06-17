import {createStore} from "vuex";


const store = createStore({
    state() {
        return {
            logo: "",
            isAuth: false,
            isHeader: true,
            headerColor: "#1e1a1b",
            isMain: true,
            mainImage: "",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor dolorem, ex libero magni nam veniam voluptate? Quo repellat sunt tempore vitae voluptas. Dolores eos pariatur perferendis quia rerum vitae? ",
            footerLinks: [
                "https://www.google.com/search?q=adas",
                "https://www.google.com/search?q=adas",
                "https://www.google.com/search?q=adas",
            ],
            benefitsImageFirst: "https://img.freepik.com/premium-photo/british-shorthair-front-white-wall_191971-17751.jpg",
            benefitsImageSecond: "",
            benefitsImageThird: "",
            benefitsVisible: true,
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
        },
        getMainText(state) {
            return state.mainText;
        },
        getMainImage(state) {
            return state.mainImage;
        },
        getBenefitImage(state) {
            return [state.benefitsImageFirst, state.benefitsImageSecond, state.benefitsImageThird];
        },
        getBenefitsVisible(state) {
            return state.benefitsVisible;
        },
        getLogo(state) {
            return state.logo;
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
        },
        setMainText(state, payload) {
            state.mainText = payload;
        },
        setMainImage(state, payload) {
            state.mainImage = payload;
        },
        setBenefitFirstImage(state, payload) {
            state.benefitsImageFirst = payload;
        },
        setBenefitSecondImage(state, payload) {
            state.benefitsImageSecond = payload;
        },
        setBenefitThirdImage(state, payload) {
            state.benefitsImageThird = payload;
        },
        setBenefitsVisible(state, payload) {
            state.benefitsVisible = payload;
        },
        setLogo(state, payload) {
            state.logo = payload;
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
        },
        setMainText(context, payload) {
            context.commit("setMainText", payload);
        },
        setMainImage(context, payload) {
            context.commit("setMainImage", payload);
        },
        setBenefitsFirst(context, payload) {
            context.commit("setBenefitFirstImage", payload);
        },
        setBenefitsSecond(context, payload) {
            context.commit("setBenefitSecondImage", payload);
        },
        setBenefitsThird(context, payload) {
            context.commit("setBenefitThirdImage", payload);
        },
        setBenefitsVisible(context, payload) {
            context.commit("setBenefitsVisible", payload);
        },
        setLogo(context, payload) {
            context.commit("setLogo", payload);
        }
    }
})

export default store;