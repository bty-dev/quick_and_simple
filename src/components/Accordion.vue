<template>
  <div class="main">
    <div class="title" @click="isOpen=!isOpen">
      {{ props.title}} <div :class="{arrowup: isOpen}" class="arrow"></div>
    </div>
    <div class="list" v-if="isOpen">
      <div v-for="item in props.items" class="list__item">
        {{ item }}
        <input v-if="item === 'Enable block'" v-model="checked"  type="checkbox" @input="isTouched"/>
        <input class="item__input" v-if="item === 'Color pick'" v-model="color"  type="color"/>
        <button class="btn__save" v-if="item === 'Color pick'" @click="toggleColor">✔</button>
        <input class="item__input" v-if="item === 'Links'"  type="checkbox"/>
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

    const isTouched = () => {
      if (props.title === "Header") store.dispatch("setHeader", !store.state.isHeader)
      else if (props.title === "Main") store.dispatch("setMain", !store.state.isMain)

    }
    const toggleColor = () => {
      store.dispatch("setHeaderColor", color.value);
      if (props.title === "Header") store.dispatch("setHeader", !store.state.isHeader)
      if (props.title === "Header") store.dispatch("setHeader", !store.state.isHeader)
    }

    return {
      props,
      isOpen,
      isTouched,
      checked,
      color,
      toggleColor,
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