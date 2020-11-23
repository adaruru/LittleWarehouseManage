<template>
    <div> <h1>商品管理</h1>
        <el-select v-model="selectedValue" placeholder="Select" @change="myclick">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    <hr>

      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="date"
        label="商品"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="地區"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="數量">
        </el-table-column>
         <el-table-column
            fixed="right"
            label="Operations"
            width="120">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small"
          class="el-icon-shopping-cart-full">          
        </el-button>
     </el-table-column>

    </el-table>
    
    </div>
</template>

<script>
export default {
    name:'product',
    data() {
        return {
        options: [{
          value: '商品1',
          label: '我是商品1'
        }, {
          value: '商品2',
          label: '我是商品2'
        }, {
          value: '商品3',
          label: '我是商品3'
        }, {
          value: '商品4',
          label: '我是商品4'
        }, {
          value: '商品5',
          label: '我是商品5'
        }],
        selectedValue: '',
        tableData: [{
          date: '產品-03',
          name: '台北',
          address: '21'
        }, {
          date: '產品-02',
          name: '高雄',
          address: '23'
        }, {
          date: '產品-04',
          name: '台北',
          address: '11'
        }, {
          date: '產品-01',
          name: '台中',
          address: '16'
        }]
        }
    }, 
    methods : {
        myclick() {
            alert(this.selectedValue)
        }
    }
}
</script>