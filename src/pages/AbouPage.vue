<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="title">On this page you can learn basic abilities of our constructor</div>
        <div class="subtitle" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
          First of all, you need to press Edit button in right bottom corner of page: <div style="margin-left: 20px" class="edit">✎</div>
        </div>
        <div class="subtitle" style="margin-bottom: 30px">
          After that you will see edit modal, where you can customize properties that shown below:
        </div>
        <div class="subtitle">
          1) Changing color palettes
        </div>
        <div class="list">
          <Accordion style="height: 50px; z-index: 100" title="Color" :items="['Color pick']"/>
        </div>
        <div class="subtitle">
          2) Changing block's visible
        </div>
        <div class="list">
          <Accordion style="height: 50px" title="Visible" :items="['Enable block']"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  components: {Accordion},
  setup() {

    const linkHandler = () => {
      window.open("https://vue-test-project-pi.vercel.app/");
    }

    return {
      linkHandler,
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
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
}
.subtitle {
  font-size: 20px;
  margin-bottom: 20px;
}
.list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}
.edit {
  cursor: pointer;
  background-color: #0f0f0f;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #fff;
  font-size: 30px;
}
.edit:hover {
  box-shadow: 0 5px 15px rgba(255, 255, 255, .5);
}
</style>