<template>
  <div class="my_sider">
    <!-- logo -->
    <div class="logo_wrapper">
      <span class="logo">Ultimate ReportWS</span>
      <!-- <img src="../assets/logo-b-t.png" class="logo"> -->
    </div>
    <!-- menu -->
      <!-- 
        unique-opened：保持展开一个菜单 
      -->
    <el-menu
      v-if="accessRouters"
      default-active="1-4-1"
      unique-opened>
      <template v-for="(item,index) in accessRouters" v-if="!item.hidden || item.childrens.length">
        <el-submenu :key="item.id" :index="`${index}`">
          <template slot="title" >
            <i :class="item.iconCls"></i>
            <span slot="title" style="font-weight: 700">{{$t('langMenuMap.'+ item.name)}}</span>
          </template>
          <el-menu-item 
            v-for="(child,index) in item.childrens" 
            v-if="!child.hidden" 
            :key="child.id"  
            :index='`${index}`'
            @click="addTab(child)">
            {{$t('langMenuMap.'+ child.name)}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'accessRouters'
      ])
    },

    methods: {
      addTab(child) {
        this.$taber.open(child.name)
      }
    }
  }
</script>

<style lang="stylus">

  .my_sider
    width 240px
    height 100%
    background-color #FAFAFA
    .logo_wrapper
      background #0572D7
      height 50px
      width 100%
      box-sizing border-box
      display flex
      align-items center
      padding-left 20px
      color #fff
      .logo
        font-size 16px
    .el-menu
      background rgba(255,255,255,0)
      color #555
      .el-submenu__title
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700 !important
        &:hover
          background #fff
      .el-menu-item
        height 40px !important
        line-height 40px
        font-size 12px
</style>

