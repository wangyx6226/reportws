<template>
  <div>
    <label for="" v-if="label">{{$t(`langQueryCondition.${label}`)}}</label>
    <input type="text">
    {{$t('langQueryCondition.spLabel')}}
    <el-select 
      v-model="spcode" 
      :placeholder="placeholder? $t(`langQueryCondition.${placeholder}`) : ''"
      size="mini"
      ref="opt">
      <el-option :value="selectedSP" :label="sptext" ref="aaa">
        <div class="table_wrapper" @click.stop>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :lineNumbers="true"
            @on-row-click="onRowClick"/>
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { VueGoodTable }  from 'vue-good-table';

export default {
  props: {
    label: String,
    placeholder: String,
    columns: {
      type: Array,
      required: true,
      default: []
    },
    rows: {
      type: Array,
      required: true,
      default: []
    },
    urlMap: String
  },
  
  components: {
    VueGoodTable
  },

  data() {
    return {
      spcode: '',
      selectedSP: '',
      sptext: '',
      columns: [
        {
          label: 'SP ID',
          field: 'spid',
          filterOptions: {
            enabled: true, // enable filter for this column
          },
        }, {
          label: 'SP Name',
          field: 'spname',
          filterOptions: {
            enabled: true, // enable filter for this column
          },
        }
      ],
      rows: [
        {id:1, spid: '222', spname: '海蝶'},
        {id:2, spid: '333', spname: '杰威尔'},
      ]
    }
  },

  methods: {
    onRowClick(o) {
      this.selectedSP = o.row.spid
      this.sptext = o.row.spname
      this.$refs.aaa.label = o.row.spname
      this.$refs.aaa.value = o.row.spid
      // this.$refs.aaa.label = o.row.spname
      // console.log(this.$refs.aaa)
      // console.log(this.$refs.opt)
      // this.$refs.opt.setSelected({
      //   label: '哈哈哈',
      //   value: 12
      // })
      this.$refs.aaa.selectOptionClick()
    }
  }
}
</script>

<style lang="stylus">

  .el-select-dropdown__item
    height 200px
    .table_wrapper
      width 300px
      height 200px
      overflow hidden
  
</style>


