<template>
  <div id="app">
    <div id="nav">
      陽春版nav
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About </router-link>|
      <router-link to="/login">Login </router-link>|
    </div>
    <navtab></navtab>
    <!-- <router-view /> 這樣也可以代表插入區域 -->
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navtab from "./components/navtab";
export default {
  name: "Home",
  components: {
    Navtab,
  },
  props: {
    // title:String
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
