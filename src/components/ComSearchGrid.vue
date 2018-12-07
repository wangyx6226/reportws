<template>
  <div class="search_grid">
     <!-- search input -->
    <div class="input_wrap">
      <div 
        class="icon_wrap"
        @click="handleSearchData"
        :style="{ width:indexWidth + 'px' }">
        <i class="el-icon-search"></i>
      </div>
      <el-input
        v-model="leftVal"
        :placeholder="leftPlaceholder"
        :style="{ width:leftInputWidth + 'px' }"
        id="left"
        size="mini" 
        ref="leftInput">
      </el-input>
      <el-input 
        v-model="rightVal"
        :placeholder="rightPlaceholder"
        class="rightInput"
        id="right"
        ref="rightInput"
        size="mini">
      </el-input>
    </div>
    <!-- table -->
    <div class="grid_wrap">
      <el-table
        :data="tableData"
        :height="height"
        :max-height="maxHeight"
        @row-click="handleRowClick"
        @header-dragend="handleHeaderDragend"
        border
        style="width: 100%"
        size="mini">
        <el-table-column
          type="index"
          align="center"
          :width="indexWidth">
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          v-bind="col">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
//自己控制自己的状态
//输入框输入后自定
export default {
  
  props: {
    type: String,
    tableData: Array,
    columns: Array,
    showHeader: Boolean,
    height: String,
    maxHeight: String,
  },

  data() {
    return {
      leftVal: '',
      rightVal: '',
      value: '',
      text: '',
      indexWidth: '40',
      leftInputWidth: '',
    }
  },

  computed: {
    leftPlaceholder() {
      if (this.columns && this.columns.length) {
        return this.columns[0].label
      }
      return ''
    },
    rightPlaceholder() {
      if (this.columns && this.columns.length) {
        return this.columns[1].label
      }
      return ''
    }
  },

  watch: {
    leftVal(value, type = value) {
      // this.handleInputChange(type, value);
      //有type的情况
      if (this.type) {

      }
      //无type的情况
    }
  },

  created() {
    const colums = this.columns;
    if (colums && colums.length > 0 && colums[0].width) {
      this.leftInputWidth = colums[0].width;
    } else {
      this.leftInputWidth = '110'
    }
    console.log(this)
  },

  methods: {
    clear() {
      this.leftVal = this.rightVal = '';
    },
   
    handleRowClick(row, event, colu) {
      if (row) {
        this.$emit('pick', {
          value: row.value,
          text: row.text
        })
      }
    },
   
    handleHeaderDragend(newWidth, oldWidth, column, event) {
      let vm = this;
      if (column.type === 'index') {
        vm.indexWidth =`${newWidth}px`;
      } else if (column.property === 'value') {
        vm.leftInputWidth = `${newWidth - 2}px`;
      }
    },

    handleInputChange(type, data) {
      this.$emit('search', {type: data})
    },

    handleSearchData() {
    }
  },

}
  
</script>

<style lang="stylus">
.search_grid
  width 100%
  height 100%
  .input_wrap
    padding 5px 18px 5px 0
    display flex
    .icon_wrap
      text-align center
      font-size 14px
    .rightInput
      margin-left 4px
      flex 1
</style>
