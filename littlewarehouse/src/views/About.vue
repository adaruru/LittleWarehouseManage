<template>
  <div>
    <h1>管理頁面</h1>
    陽春版nested nav<router-link to="/about/ShipManage">出貨</router-link> |
    <router-link to="/about/ProductManage">商品管理</router-link> |
    <router-link to="/about/AccountManage">帳號管理</router-link> 
    <!--顯示的內容包在nested裡面-->
    <router-view class="nested-routes"> </router-view>
    <div>也可以透過navtab route 指定名稱啟用，但要記得註冊router-view 並加註nested-routes</div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style></style>
