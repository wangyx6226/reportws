<template>
  <div class="my_sider">
    <el-menu
      v-if="accessRouters"
      default-active="1-4-1"
      unique-opened>
      <template v-for="(item,index) in accessRouters" v-if="!item.hidden || item.children.length">
        <el-submenu :key="item.id" :index="`${index}`">
          <template slot="title" >
            <i :class="item.iconCls"></i>
            <span slot="title" style="font-weight: 700">{{$t('langMenuMap.'+ item.name)}}</span>
          </template>
          <el-menu-item 
            v-for="(child,index) in item.children" 
            v-if="!child.hidden" 
            :key="child.id"  
            :index='`${index}`'
            @click="addTab(item,child)">
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
    name: 'MySider',

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
      addTab(item,child) {
        this.$router.push(item.path + '/' + child.path)
        // this.$taber.close(child.name)
        // this.$taber.open(child.name)
      }
    }
  }
</script>

<style lang="stylus">

  .my_sider
    width 240px
    height 100%
    // background-color rgb(48, 65, 86)
    background-color #2774fa
    overflow hidden
    .logo_wrapper
      background #5DADE2 
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
      color #fff
      border-right-width: 0px;
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
        &:hover
          background #f0f2f5
</style>

