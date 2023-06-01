<template>
  <div class="main">
    <div class="header" v-if="this.$store.state.isHeader" :style="{'background-color': headerColor.value}">
      Header example
      <div class="menu__item">
        Menu item
      </div>
    </div>
    <div class="content" v-if="this.$store.state.isMain">
      Main content example
      <div class="content__title">{{mainText}}</div>
    </div>
    <div v-if="isBenefits" class="benefits">
      <div class="benefit__item">Benefit</div>
      <div class="benefit__item">Benefit</div>
      <div class="benefit__item">Benefit</div>
      <div class="benefit__item">Benefit</div>
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
    <div @click="toggleOpen" class="edit" v-if="isEditVisible">✎</div>
    <div @click="goBack" class="back" v-if="isBackVisible"><img class="arrow" src="../assets/arrow.png"/></div>
    <div v-if="isOpen" class="modal">
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

  const isBenefits = ref(true);
  
  const toggleBenefits = () => {
    isBenefits.value = !isBenefits.value;
  }

  const benefitsItems = ref([
    "Enable block", "Color pick"
  ])
  const footerItems = ref([
    "Enable block", "Color pick", "Link"
  ])
    const mainItems = ref([
      "Enable block", "Color pick", "Edit text"
    ])

  const headerColor = ref(store.state.headerColor);

  onUpdated(() => {
    headerColor.value = ref(store.state.headerColor);
    mainText.value = ref(store.state.mainText);
  })
  onMounted(() => {
    headerColor.value = ref(store.state.headerColor);
    mainText.value = ref(store.state.mainText);
  })

  const goBack = () => {
    router.push("/dashboard");
  }

  const isEditVisible = ref(true);
  const isBackVisible = ref(true);

  const download = () => {
    isEditVisible.value = false;
    isBackVisible.value = false;

    let a  = document.createElement('a');
    a.style.display = "none";
    a.download = "download";
    a.href = "http://localhost:8080/demo";
    a.click();

    isEditVisible.value = true;
    isBackVisible.value = true;
  }

  return {
    isOpen,
    toggleOpen,
    isBenefits,
    toggleBenefits,
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
  }
}
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 93vh;
  background-color: #000;
  color: #fff;
}
.header {
  border: 1px solid #fff;
  font-size: 20px;
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #46474a;
}
.menu__item {
  cursor: pointer;
}
.content {
  background-color: #363c45;
  height: 49%;
  padding: 40px 200px;
  font-size: 80px;
}
.content__title {
  font-size: 30px;
  padding-top: 100px;
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
  background-color: #1a1e24;
  height: 400px;
}
.benefit__item {
  padding: 80px;
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
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.footer__desc {
  color: #fff;
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
</style>