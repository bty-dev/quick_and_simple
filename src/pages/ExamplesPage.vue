<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="title">Examples of landings made's with our constructor</div>
        <div class="list">
          <div class="card" @click="linkHandler">
            <div class="card_desc">
              Timer test project
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.card:nth-last-child(1) {
  background: url("../assets/preview_timer.png") no-repeat;
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
</style>