<template>
  <div class="main">
    <div class="header" v-if="this.$store.state.isHeader" :style="{'background-color': headerColor.value}">
      <img class="logo" :src="this.$store.state.logo" alt="Logo">
      <div class="menu__item">
        Menu item
      </div>
    </div>
    <div class="content" v-if="this.$store.state.isMain">
      <div class="main__col">
        <div class="content__title">
          Main title
        </div>
        <div class="content__subtitle">{{mainText}}</div>
        <button class="btn__call">
          <a href="tel:+9190123456" style="color: #fff; text-decoration: none">Call us!</a>
        </button>
      </div>
      <div class="main__col">
        <div v-if="mainImage === ''" class="main__image__holder">

        </div>
        <img class="main__image" :src="mainImage.value" alt="Main image" v-else>
      </div>
    </div>
    <div v-if="this.$store.state.benefitsVisible" class="benefits benefits__title">Our partners</div>
    <div v-if="this.$store.state.benefitsVisible" class="benefits">
      <img class="benefit__item" alt="Partner" :src="benefitFirst.value"/>
      <img class="benefit__item" alt="Partner" :src="benefitSecond.value"/>
      <img class="benefit__item" alt="Partner" :src="benefitThird.value"/>
    </div>
    <div class="footer">
      <div class="footer__desc">
        Footer example
      </div>
      <div class="footer__links">
        <a class="footer__link" target="_blank" v-for="link in footerLinks" :href="link">
          <a target="_blank" class="inner">

          </a>
        </a>
      </div>
    </div>
    <div @click="toggleOpen" class="edit" v-if="isEditVisible" id="edit__mark">✎</div>
    <div @click="goBack" class="back" v-if="isBackVisible" id="back__mark"><img class="arrow" src="../assets/arrow.png"/></div>
    <div v-if="isOpen" class="modal" id="modal">
      <div class="modal__content">
       <Accordion title="Header" :items="benefitsItems"/>
       <Accordion title="Main" :items="mainItems"/>
       <Accordion title="Benefits" :items="benefitsItems"/>
       <Accordion title="Footer" :items="footerItems"/>
        <button class="download" @click="download">Download file</button>
      </div>
      <div @click="toggleOpen" class="close">╳</div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, onUpdated, ref} from "vue";
import Accordion from "@/components/Accordion";
import {useStore} from "vuex";
import store from "@/store";
import {useRouter} from "vue-router";

export default {
  components: {Accordion},
  setup() {
  const store = useStore();
  const router = useRouter();

  const footerLinks = ref(store.state.footerLinks);

  const mainText = ref(store.getters.getMainText);
  const isOpen = ref(false);
  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  }

  const isBenefits = ref(store.state.benefitsVisible);

  const benefitsItems = ref([
    "Enable block", "Color pick", "Image link 1", "Image link 2", "Image link 3", "Logo pick"
  ])
  const footerItems = ref([
    "Enable block", "Color pick", "Link"
  ])
  const mainItems = ref([
    "Enable block", "Color pick", "Edit text", "Image link"
  ])

  const headerColor = ref(store.state.headerColor);
  const mainImage = ref(store.state.mainImage);
  const benefitFirst = ref(store.state.benefitsImageFirst);
  const benefitSecond = ref(store.state.benefitsImageSecond);
  const benefitThird = ref(store.state.benefitsImageThird);
  const logo = ref(store.state.logo);
  onUpdated(() => {
    headerColor.value = ref(store.state.headerColor);
    mainText.value = ref(store.state.mainText);
    mainImage.value = ref(store.state.mainImage);
    benefitFirst.value = ref(store.state.benefitsImageFirst);
    benefitSecond.value = ref(store.state.benefitsImageSecond)
    benefitThird.value = ref(store.state.benefitsImageThird);
    logo.value = ref(store.state.logo);
  })
  onMounted(() => {
    headerColor.value = ref(store.state.headerColor);
    mainText.value = ref(store.state.mainText);
    mainImage.value = ref(store.state.mainImage);
    benefitFirst.value = ref(store.state.benefitsImageFirst);
    benefitSecond.value = ref(store.state.benefitsImageSecond)
    benefitThird.value = ref(store.state.benefitsImageThird);
    logo.value = ref(store.state.logo);
  })

  const goBack = () => {
    router.push("/dashboard");
  }

  const isEditVisible = ref(true);
  const isBackVisible = ref(true);

  const download = () => {
    isEditVisible.value = false;
    isBackVisible.value = false;
    isOpen.value = false;
    let edit = document.getElementById("edit__mark");
    let back = document.getElementById("back__mark");
    let modal = document.getElementById("modal");

    const editPrev = edit.style.display;
    const backPrev = back.style.display;
    const modalPrev = modal.style.display;

    edit.style.display = "none";
    back.style.display = "none";
    modal.style.display = "none";

    // let a  = document.createElement('a');
    // a.style.display = "none";
    // a.download = "download";
    // a.href = document.documentElement.innerHTML;
    // console.log(document.documentElement.innerHTML)
    // a.click();
    let base64doc = btoa(unescape(encodeURIComponent(document.documentElement.innerHTML))),
        a = document.createElement('a'),
        e = new MouseEvent('click');

    a.download = 'page.html';
    a.href = 'data:text/html;base64,' + base64doc;
    a.dispatchEvent(e);

    edit.style.display = editPrev;
    back.style.display = backPrev;
    modal.style.display = modalPrev;
    isEditVisible.value = true;
    isBackVisible.value = true;
    isOpen.value = true;
  }

  return {
    isOpen,
    toggleOpen,
    isBenefits,
    benefitsItems,
    footerItems,
    headerColor,
    footerLinks,
    goBack,
    download,
    isEditVisible,
    isBackVisible,
    mainItems,
    mainText,
    mainImage,
    benefitFirst,
    benefitSecond,
    benefitThird
  }
}
}
</script>

<style scoped>
.main {
  width: 100%;
  background-color: #000;
  color: #fff;
}
.header {
  /*border: 1px solid #f0eee2;*/
  height: 7vh;
  font-size: 20px;
  padding: 30px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1a1b;
  color: #f0eee2;
}
.menu__item {
  cursor: pointer;
}
.content {
  background-color: #1e1a1b;
  height: 93vh;
  padding: 0px 200px;
  font-size: 80px;
  color: #f0eee2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.content__subtitle {
  font-size: 30px;
  margin-right: auto;
}
.content__title {
  margin-bottom: 40px;
  margin-right: auto;
}
.edit {
  cursor: pointer;
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: #0f0f0f;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #fff;
  font-size: 40px;
}
.edit:hover {
  box-shadow: 0 5px 15px rgba(255, 255, 255, .5);
}
.back {
  cursor: pointer;
  position: fixed;
  left: 50px;
  top: 30px;
  background-color: #0f0f0f;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #fff;
  font-size: 40px;
  transition: .2s;
}
.back:hover {
  box-shadow: 0 5px 15px rgba(255, 255, 255, .5);
}
.benefits {
  display: flex;
  padding: 30px 200px;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1a1b;
  height: 400px;
  color: #f0eee2;
}
.benefit__item {
  object-fit: contain;
  width: 220px;
  height: 180px;
  border: 1px solid #fff;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__content {
  background-color: rgba(0, 0, 0, .8);
  border: 2px solid #fff;
  border-radius: 20px;
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 50px;
  overflow-y: scroll;
}
.close {
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  right: 450px;
  top: 300px;
}
.footer {
  padding: 50px 0;
  width: 100%;
  background-color: #1e1a1b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.footer__desc {
  color: #f0eee2;
  font-size: 50px;
}
.footer__links {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.footer__link {
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: transparent;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__link:hover .inner {
  display: flex;
}
.inner {
  background-color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin: auto;
  display: none;
}
.arrow {
  width: 20px;
  height: 20px;
  -webkit-filter: invert(1) contrast(500%);
}
.download {
  margin-top: 50px;
  width: 100%;
  font-weight: 700;
  outline: none;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;;
}
.download:hover {
  background-color: #fff;
  border-color: transparent;
  color: #000;
  box-shadow: 0 5px 15px rgba(255, 255, 255, .4);
}
.main__col {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main__image__holder {
  cursor: pointer;
  background-color: gray;
  width: 600px;
  height: 700px;
  margin-left: auto;
}
.main__image__holder:hover {
  opacity: .6;
}
.main__image {
  width: 500px;
  height: 700px;
  object-fit: contain;
}
.btn__call{
  margin-top: 50px;
  width: 100%;
  font-weight: 700;
  outline: none;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 15px 15px;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;;
}
.btn__call:hover {
  background-color: #fff;
  border-color: transparent;
  color: #000;
  box-shadow: 0 5px 15px rgba(255, 255, 255, .4);
}
.benefits__title {
  height: unset;
  padding: 10px 200px;
  font-size: 40px;
}
.logo {
  width: 100px;
  height: 60px;
  margin: 10px;
  object-fit: contain;
}
</style>