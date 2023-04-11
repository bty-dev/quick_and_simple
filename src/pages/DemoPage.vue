<template>
  <div class="main">
    <div class="header">
      Header example
      <div class="menu__item">
        Menu item
      </div>
    </div>
    <div class="content">
      Main content example
      <div class="content__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor dolorem, ex libero magni nam veniam voluptate? Quo repellat sunt tempore vitae voluptas. Dolores eos pariatur perferendis quia rerum vitae? </div>
    </div>
    <div v-if="isBenefits" class="benefits">
      <div class="benefit__item">Benefit</div>
      <div class="benefit__item">Benefit</div>
      <div class="benefit__item">Benefit</div>
      <div class="benefit__item">Benefit</div>
    </div>
    <div @click="toggleOpen" class="edit">✎</div>
    <div v-if="isOpen" class="modal">
      <div class="modal__content">
        Benefits block <input v-model="isBenefits" id="benefitsCheckbox" type="checkbox">
      </div>
      <div @click="toggleOpen" class="close">╳</div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
setup() {
  const isOpen = ref(false);
  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  }

  const isBenefits = ref(true);

  const toggleBenefits = () => {
    isBenefits.value = !isBenefits.value;
  }

  return {
    isOpen,
    toggleOpen,
    isBenefits,
    toggleBenefits,
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 100px;
}
.close {
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  right: 600px;
  top: 300px;
}
</style>