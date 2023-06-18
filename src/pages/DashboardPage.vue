<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="title">My projects</div>
        <div class="list">
          <div @click="toggleOpen" class="card add__card">
            ＋
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="modal">
      <div class="modal__content">
        <div class="modal__title">
          Choose a starting template
          <div class="template__list">
            <div class="template__item" @click="goToDemo">
              Default template
            </div>
          </div>
        </div>
      </div>
      <div @click="toggleOpen" class="close">╳</div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import Accordion from "@/components/Accordion";
import {useRouter} from "vue-router";

export default {
  components: {Accordion},
  setup() {
    const router = useRouter();

    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    }

    const templateTypes = ref([
        "Default template",
        "Bty's template",
    ])

    const goToDemo = () => {
      router.push("/demo");
    }

    return {
      isOpen,
      toggleOpen,
      templateTypes,
      goToDemo,
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 93vh;
  background-color: #000;
}
.wrapper {
  width: 1140px;
  margin: 0 auto;
}
.content {
  padding-top: 50px;
  width: 100%;
  height: 93vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.title {
  font-size: 30px;
  margin-bottom: 40px;
}
.list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.card {
  position: relative;
  width: 200px;
  height: 250px;
  border: 2px solid #fff;
  overflow: hidden;
  border-radius: 10px;
  background: url("../assets/preview.png") no-repeat;
  background-size: 200px 250px;
  cursor: pointer;
  transition: .2s;
  margin-right: 30px;
}
.card:nth-last-child(2) {
  background: url("../assets/preview_timer.png") no-repeat;
}
.card:nth-last-child(1) {
  background: transparent;
}
.card:hover {
  box-shadow: 0 5px 15px rgba(255, 255, 255, .4);
}
.card:hover .card_desc {
  display: flex;
}
.card_desc {
  text-align: center;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .8);
}
.add__card {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  transition: .3s;
}
.add__card:hover {
  background-color: rgba(255, 255, 255, .5);
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
  color: #fff;
}
.modal__content {
  background-color: rgba(0, 0, 0, .8);
  border: 2px solid #fff;
  border-radius: 20px;
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 50px;
  color: #fff;
}
.modal__title {
  font-size: 30px;
  text-align: center;
  padding-bottom: 50px;
  margin-top: 20px;
}
.close {
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  right: 450px;
  top: 300px;
}
.template__list {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.template__item {
  width: 100%;
  text-align: center;
  padding: 10px 15px;
  border: 2px solid #fff;
  font-size: 20px;
  margin: 10px 0;
  transition: .2s;
  cursor: pointer;
}
.template__item:hover {
  background-color: rgba(255, 255, 255, .5);
  color: #000;
}
</style>