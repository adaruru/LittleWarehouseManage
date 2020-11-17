<template>
  <div>
   

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-submenu index="1">
        <template slot="title">出貨</template>
        <el-menu-item index="1-1" route="/about/ShipManage"
          >出貨作業</el-menu-item
        >
        <el-menu-item index="1-2">出貨紀錄</el-menu-item>
        <el-submenu index="1-3">
          <template slot="title">出貨的sublist</template>
          <el-menu-item index="1-3-1">item one</el-menu-item>
          <el-menu-item index="1-3-2">item two</el-menu-item>
          <el-menu-item index="1-3-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2" route="/about/ProductManage">
        <template slot="title">商品管理</template>
        <el-menu-item index="2-1" route="/about/ProductManage"
          >商品管理</el-menu-item
        >
        <el-menu-item index="2-2">商品管理紀錄</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" route="/about/AccountManage"
        >帳號管理</el-menu-item
      >
      <el-menu-item index="5" route="/login">管理員登錄</el-menu-item>
      <el-menu-item index="6" disabled>無法使用的Tab</el-menu-item>
      <el-menu-item index="7"
        ><a href="https://www.google.com.tw/" target="_blank"
          >Google 對外連結</a
        ></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      router: true,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped></style>
