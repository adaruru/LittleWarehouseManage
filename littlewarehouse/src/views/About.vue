<template>
  <div class="about">
    <h1>進入管理頁面</h1>
    <router-view class="nested-routes"> </router-view>
    <AccountManage msg="Welcome to Your Vue.js App"></AccountManage>
    <ShipManage msg="Welcome to Your Vue.js App"></ShipManage>
    <ProductManage msg="Welcome to Your Vue.js App"></ProductManage>
  </div>
</template>

<script>
// import AccountManage from '../components/AccountManage.vue'
// import ShipManage from '../components/ShipManage.vue'
// import ProductManage from '../components/ProductManage.vue'

import { AccountManage, ShipManage, ProductManage } from "../components";

export default {
  components: {
    AccountManage,
    ShipManage,
    ProductManage,
  },
};
</script>

<style></style>
