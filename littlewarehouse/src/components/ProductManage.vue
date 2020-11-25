<template>
  <div>
    <h1>product</h1>
    <el-select v-model="selectedValue" placeholder="Select" @change="myclick">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <hr />

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="商品" width="180"> </el-table-column>
      <el-table-column prop="name" label="地區" width="180"> </el-table-column>
      <el-table-column prop="address" label="數量"> </el-table-column>
      <!-- <el-table-column
            fixed="right"
            label="Operations"
            width="120">
            <el-button
              @click="cartClick()"
              type="text"
              size="small"
              class="el-icon-shopping-cart-full">          
            </el-button>
         </el-table-column> -->
      <el-table-column fixed="right" label="Operations" width="120">
        <template slot-scope="scope">
          <el-button
            class="el-icon-shopping-cart-full"
            @click="displayRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            出貨
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="
        selectedItem.date +
          '   ' +
          selectedItem.name +
          '   ' +
          selectedItem.address
      "
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="會員編號" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="會員姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="訂單點數" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出貨數量" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "product",
  created() {
    axios.get("http://localhost:3000/Products").then((response) => {
      console.log(response.data);
      console.log(response);
    });
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      selectedItem: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },

      options: [
        {
          value: "商品1",
          label: "我是商品1",
        },
        {
          value: "商品2",
          label: "我是商品2",
        },
        {
          value: "商品3",
          label: "我是商品3",
        },
        {
          value: "商品4",
          label: "我是商品4",
        },
        {
          value: "商品5",
          label: "我是商品5",
        },
      ],
      selectedValue: "",
      tableData: [
        {
          date: "iPhone 12 MAX",
          name: "台北",
          address: "21",
        },
        {
          date: "Google Pixel 4a",
          name: "高雄",
          address: "23",
        },
        {
          date: "iPhone 12 Pro",
          name: "台北",
          address: "11",
        },
        {
          date: "Google Pixel 5L",
          name: "台中",
          address: "16",
        },
      ],
    };
  },
  methods: {
    myclick() {
      alert(this.selectedValue);
    },
    cartClick() {
      this.dialogFormVisible = true;
    },
    displayRow(index, rows) {
      this.dialogFormVisible = true;
      //rows.splice(index, 1);
      console.log(index);
      console.log(rows[index].date);
      this.selectedItem = rows[index];
    },
  },
};
</script>
