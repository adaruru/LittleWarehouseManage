<template>
  <div class="about">
    <h1>進入管理頁面</h1>

    <router-link to="/about/出貨">出貨</router-link> |
    <router-link to="/about/商品管理">商品管理</router-link> |
    <router-link to="/about/帳號管理">帳號管理</router-link>
    <!--顯示的內容包在nested裡面-->
    <router-view class="nested-routes"> </router-view>
   
  </div>
</template>

<script>
export default {
 
};
</script>

<style></style>
