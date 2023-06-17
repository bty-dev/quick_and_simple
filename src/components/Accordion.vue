<template>
  <div class="main">
    <div class="title" @click="isOpen=!isOpen">
      {{ props.title}} <div :class="{arrowup: isOpen}" class="arrow"></div>
    </div>
    <div class="list" v-if="isOpen">
      <div v-for="item in props.items" class="list__item">
        {{ item }}
        <input v-if="item === 'Logo pick'" class="item__input" v-model="logo"  type="text"/>
        <button v-if="item === 'Logo pick'" class="btn__save" @click="changeLogo">✔</button>
        <input v-if="item === 'Enable block'" v-model="checked"  type="checkbox" @input="isTouched"/>
        <input class="item__input" v-if="item === 'Color pick'" v-model="color"  type="color"/>
        <button class="btn__save" v-if="item === 'Color pick'" @click="toggleColor">✔</button>
        <input class="item__input" v-if="item === 'Edit text'" v-model="mainText"  type="text"/>
        <button class="btn__save" v-if="item === 'Edit text'" @click="changeText">✔</button>
        <input class="item__input" v-if="item === 'Image link'" v-model="mainImage"  type="text"/>
        <button class="btn__save" v-if="item === 'Image link'" @click="changeImage">✔</button>
        <input class="item__input" v-if="item === 'Links'"  type="checkbox"/>
        <input class="item__input" v-if="item === 'Image link 1'" v-model="benefitFirst"  type="text"/>
        <button class="btn__save" v-if="item === 'Image link 1'" @click="changeBenefitFirst">✔</button>
        <input class="item__input" v-if="item === 'Image link 2'" v-model="benefitSecond"  type="text"/>
        <button class="btn__save" v-if="item === 'Image link 2'" @click="changeBenefitSecond">✔</button>
        <input class="item__input" v-if="item === 'Image link 3'" v-model="benefitThird"  type="text"/>
        <button class="btn__save" v-if="item === 'Image link 3'" @click="changeBenefitThird">✔</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  props: {
    title: String,
    items: Array,
  },
  setup(props) {
    const store = useStore();

    const checked = ref(true);
    const color = ref(store.state.headerColor);
    const isOpen = ref(false);
    const mainText = ref(store.state.mainText);
    const mainImage = ref(store.state.mainImage);
    const benefitFirst = ref(store.state.benefitsImageFirst);
    const benefitSecond = ref(store.state.benefitsImageSecond);
    const benefitThird = ref(store.state.benefitsImageThird);

    const isTouched = () => {
      if (props.title === "Header") store.dispatch("setHeader", !store.state.isHeader)
      else if (props.title === "Main") store.dispatch("setMain", !store.state.isMain)
      else if (props.title === "Benefits") store.dispatch("setBenefitsVisible", !store.state.benefitsVisible)

    }
    const toggleColor = () => {
      store.dispatch("setHeaderColor", color.value);
      if (props.title === "Header") store.dispatch("setHeader", !store.state.isHeader)
      if (props.title === "Header") store.dispatch("setHeader", !store.state.isHeader)
    }

    const changeText = () => {
      store.dispatch("setMainText", mainText.value);
      if (props.title === "Main") store.dispatch("setMain", !store.state.isMain)
      if (props.title === "Main") store.dispatch("setMain", !store.state.isMain)
    }

    const changeImage = () => {
      store.dispatch("setMainImage", mainImage.value);
      if (props.title === "Main") store.dispatch("setMain", !store.state.isMain)
      if (props.title === "Main") store.dispatch("setMain", !store.state.isMain)
    }

    const changeBenefitFirst = () => {
      store.dispatch("setBenefitsFirst", benefitFirst.value);
      store.dispatch("setBenefitsVisible", false);
      store.dispatch("setBenefitsVisible", true);
      console.log(benefitFirst.value)
    }
    const changeBenefitSecond = () => {
      store.dispatch("setBenefitsSecond", benefitSecond.value);
      store.dispatch("setBenefitsVisible", false);
      store.dispatch("setBenefitsVisible", true);
    }
    const changeBenefitThird = () => {
      store.dispatch("setBenefitsThird", benefitThird.value);
      store.dispatch("setBenefitsVisible", false);
      store.dispatch("setBenefitsVisible", true);
    }

    const changeLogo = () => {
      store.dispatch("setLogo", logo.value)
    }
    const logo = ref(store.state.logo);

    return {
      props,
      isOpen,
      isTouched,
      logo,
      changeLogo,
      checked,
      color,
      toggleColor,
      changeText,
      mainText,
      mainImage,
      changeImage,
      benefitFirst,
      benefitSecond,
      benefitThird,
      changeBenefitFirst,
      changeBenefitSecond,
      changeBenefitThird
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
}
.title {
  padding: 10px 0 10px 10px;
  width: 100%;
  font-size: 20px;
  margin-right: auto;
  color: #fff;
  cursor: pointer;
  position: relative;
}
.list {
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #fff;
}
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
  padding: 15px 15px;
}
.list__item:nth-last-child(1) {
  border-bottom: none;
  margin-bottom: 0;
}
.arrow {
  position: absolute;
  right: 20px;
  top: 50%;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg) translateY(-50%);
  -webkit-transform: rotate(45deg) translateY(-50%);
}
.arrowup {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.item__input {
  background-color: transparent;
  border: 1px solid #fff;
  padding: 5px;
  outline: none;
  color: #fff;
  margin-left: auto;
  margin-right: 5px;
}
.btn__save {
  background-color: #000;
  border: 2px solid #fff;
  color: #fff;
  padding: 0 5px;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
  transition: .2s;
}
.btn__save:hover {
  color: #000;
  background-color: #fff;
  border-color: #000;
}
</style>