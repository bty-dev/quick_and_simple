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
            mainTitle: "Main title",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor dolorem, ex libero magni nam veniam voluptate? Quo repellat sunt tempore vitae voluptas. Dolores eos pariatur perferendis quia rerum vitae? ",
            footerLink1: "https://www.google.com/search?q=adas",
            footerLink2: "https://www.google.com/search?q=adas",
            footerLink3: "https://www.google.com/search?q=adas",
            benefitsImageFirst: "",
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
        getMainTitle(state) {
            return state.mainTitle;
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
        },
        getFooterLink1(state) {
            return state.footerLink1;
        },
        getFooterLink2(state) {
            return state.footerLink2;
        },
        getFooterLink3(state) {
            return state.footerLink3;
        },
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
        setMainTitle(state, payload) {
          state.mainTitle = payload;
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
        },
        setFooterLink1(state, payload) {
            state.footerLink1 = payload;
        },
        setFooterLink2(state, payload) {
            state.footerLink2 = payload;
        },
        setFooterLink3(state, payload) {
            state.footerLink3 = payload;
        },
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
        setMainTitle(context, payload) {
            context.commit("setMainTitle", payload);
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
        },
        setFooterLink1(context, payload) {
            context.commit("setFooterLink1", payload);
        },
        setFooterLink2(context, payload) {
            context.commit("setFooterLink2", payload);
        },
        setFooterLink3(context, payload) {
            context.commit("setFooterLink3", payload);
        },

    }
})

export default store;