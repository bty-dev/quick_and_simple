<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="title">
          A powerful builder<br>in your hands.
        </div>
        <div class="subtitle">
          Quick. Simple. <span class="easy">Easy.</span>
        </div>
        <button @click="$router.push('/login')" class="btn">Get started</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const x = ref(0)

    function onMousemove(e) {
      x.value = e.clientX
    }

    return {
      x, onMousemove
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
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
}
.title {
  text-align: center;
  font-size: 90px;
  opacity: .7;
  user-select: none;
  margin-bottom: 20px;

  /*transition: 0.3s background-color ease;*/
}
.subtitle {
  opacity: .6;
  font-size: 40px;
  margin-bottom: 200px;
  user-select: none;
}
.easy {
  opacity: 1;
  font-weight: 700;
}
.btn {
  font-weight: 700;
  outline: none;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;;
}
.btn:hover {
  background-color: #fff;
  border-color: transparent;
  color: #000;
  box-shadow: 0 5px 15px rgba(255, 255, 255, .4);
}
</style>