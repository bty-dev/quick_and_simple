<template>
  <Navbar v-if="$route.path !== '/demo'"/>
  <router-view>
  </router-view>
</template>
<script>
import Navbar from "@/components/Navbar";
import StartPage from "@/pages/StartPage";
import LoginPage from "@/pages/LoginPage";

export default {
  components: {LoginPage, StartPage, Navbar},
  setup() {


    return {
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
</style>
