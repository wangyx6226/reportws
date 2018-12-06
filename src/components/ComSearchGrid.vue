<template>
  <div class="search_grid">
     <!-- search input -->
    <div class="input_wrap">
      <div><i class="el-icon-search"></i></div>
      <el-input 
        v-model="leftVal"
        :placeholder="leftPlaceholder"
        class="leftInput"
        size="mini">
      </el-input>
      <el-input 
        v-model="rightVal"
        :placeholder="rightPlaceholder"
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
        border
        style="width: 100%"
        size="mini">
        <el-table-column
          type="index"
          align="center"
          width="40">
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :prop="col.prop"
          :label="col.label">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  props: {
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

  methods: {
    handleRowClick(row, event, colu) {
      if (row) {
        // console.log(row);
        this.$emit('pick', {
          value: row.value,
          text: row.text
        })
      }
    },
   
  }
}
  
</script>

<style lang="stylus">
.search_grid
  width 100%
  height 100%
  .input_wrap
    padding 5px 14px 5px 0
    display flex
    .leftInput
      margin-right 5px
</style>
