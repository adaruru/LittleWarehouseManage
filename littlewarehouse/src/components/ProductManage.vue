<template>
  <div>
    <h2>商品管理</h2>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
         
          <br />
          <span>商品名稱</span>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
          <br />
          <br /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "Beijing",
        },
        {
          value: "Shanghai",
          label: "Shanghai",
        },
        {
          value: "Nanjing",
          label: "Nanjing",
        },
        {
          value: "Chengdu",
          label: "Chengdu",
        },
        {
          value: "Shenzhen",
          label: "Shenzhen",
        },
        {
          value: "Guangzhou",
          label: "Guangzhou",
        },
      ],
      value: "",
    };
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
