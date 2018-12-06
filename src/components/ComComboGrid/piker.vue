<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div class="picker_wrap" v-show="visible">
      <search-grid
        :tableData="tableData"
        :columns="columns"
        @pick="handleConfirm"
        height="220" 
        max-height="220">
      </search-grid>
    </div>
  </transition>
</template>

<script>
import SearchGrid from '@/components/ComSearchGrid';

export default {
  components: {
    SearchGrid,
  },

  data() {
    return {
      visible: true,
      tableData: [
        {
          text: '王小虎',
          value: '111111'
        }, 
        {
          text: '王虎',
          value: '2222'
        }, 
        {
          text: '王小',
          value: '3333'
        }, 
        {
          text: '小虎',
          value: '4444'
        }, 
        {
          text: '小虎',
          value: '555'
        }, 
        {
          text: '小虎',
          value: '66'
        }, 
        {
          text: '小虎',
          value: '77'
        }, 
        {
          text: '小虎',
          value: '88'
        }, 
        {
          text: '小虎',
          value: '99'
        }, 
      ],
      columns: [
        {
          prop: 'value',
          label: 'SP ID'
        }, {
          prop: 'text',
          label: 'SP Name'
        }
      ]
    }
  },

  methods: {
    handleConfirm(val) {
      const visible = false
      this.$emit('input', val, visible)
    }
  }
}
  
</script>

<style lang="stylus" scoped>
.picker_wrap
  position absolute
  top 40px
  width 320px
  background-color #fff
  border 1px solid #ccc
  z-index 1
</style>
