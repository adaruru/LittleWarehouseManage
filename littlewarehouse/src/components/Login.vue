<template>
  <div class="about">
    <h1>This is an Login page</h1>
    <div>{{ title }}</div>
    <el-form :model="model" :rules="rules" ref="loginForm">
      <el-form-item label="帳號" prop="username">
        <el-input
          v-model="model.username"
          autocomplete="off"
          placeholder="請輸入帳號"
        ></el-input>
      </el-form-item>
      <el-form-item label="確認密碼" prop="password">
        <el-input
          type="password"
          v-model="model.password"
          autocomplete="off"
          placeholder="請輸入密碼"
        ></el-input>
        <!-- type="password" 字型是密碼的星星樣式-->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "登錄",
      value: "", //接收子Input事件onInput傳來的value
      model: { username: "", password: "" }, //說白了就是數據
      rules: {
        username: [
          { required: true, message: "請輸入姓名" },
          { min: 6, max: 10, message: "請輸入6至10位姓名" },
        ],
        password: [{ required: true, message: "請輸入密碼" }],
      },
    }; //return要帶上;
  },
});
</script>
