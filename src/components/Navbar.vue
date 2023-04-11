<template>
  <div class="main">
    <div class="wrapper">
      <nav class="nav">
        <div class="logo" @click="$router.push('/')">
          Q&S
        </div>
        <div class="menu">
          <div class="menu__item" @click="$router.push('/dashboard')">Dashboard</div>
          <div class="menu__item">Examples</div>
          <div class="menu__item">About</div>
          <div class="menu__item" @click="$router.push('/login')">Login</div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  width: 100%;
  background-color: #0f0f0f;
  height: 7vh;
}
.wrapper {
  width: 1140px;
  margin: 0 auto;
  padding: 10px 0;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  opacity: .7;
  transition: .2s;
}
.logo:hover {
  opacity: 1;
}
.menu {
  width: 40%;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 700;
}
.menu__item {
  cursor: pointer;
  transition: .2s;
  opacity: .7;
  position: relative;
}
.menu__item:hover {
  opacity: 1;
}
.menu__item::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.menu__item:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>