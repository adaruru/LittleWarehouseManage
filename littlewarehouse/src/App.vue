<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
       <router-link to="/about">About </router-link>|
      <router-link to="/login">Login </router-link>|

    </div>
    <router-view/>
     <div>{{title}}</div>
      <el-form :model="model" :rules="rules" ref="loginForm">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="model.username" autocomplete="off" placeholder="請輸入帳號"></el-input>
      </el-form-item>
      <el-form-item label="確認密碼" prop="password">
          <el-input type="password" v-model="model.password" autocomplete="off" placeholder="請輸入密碼"></el-input>
          <!-- type="password" 字型是密碼的星星樣式-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">Submit</el-button>
        </el-form-item>
    </el-form>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    props:{
   // title:String
  },
  //一次性的頁面資料初始化 constructor
  data() {
    return {
      title: "請先登錄",
      value: "", //接收子Input事件onInput傳來的value
      model: { username: "", password: "" }, //說白了就是數據
      rules: {
        username: [
          { required: true, message: "請輸入姓名" },
          { min: 6, max: 10, message: "請輸入6至10位姓名" }
        ],
        password: [{ required: true, message: "請輸入密碼" }]
      }
    }; //return要帶上;
  }

}
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
