<template>
  <el-container class="home_page">
    <el-aside width="auto">
      <my-sider></my-sider>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <div class="wrapper">
          <div class="user_info" v-if="userName">
            <span class="user_img">
              <img src="../assets/e.jpg" alt="">
            </span>
            <span class="user_name">{{userName}}</span>
            <span>|</span>
          </div>
          <div class="logout" @click="logOutMethod">Logout</div>
          <lang-select></lang-select>
        </div>
      </el-header>
      <el-main>
        <vue-tabs></vue-tabs>  
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import MySider from '@/components/MySider'
  import LangSelect from '@/components/ComLangSelect'
  import { userValidateMixin } from '@/common/uitls-mixin'
  import { $UGet } from '@/api/request'

  export default {
    name: 'Home',

    props: ['usertype','age','name'],

    mixins: [userValidateMixin],

    components: {
      MySider,
      LangSelect
    },

    mounted() {
      console.log(this.$route.params) 
      console.log(this.$route.matched) 
    },

    computed: {
      userName() {
        return this.$store.getters.userName
      }
    },

    methods: {
      changeLangMethod(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLangrage', lang)
      },

      logOutMethod() {
        $UGet('logout').then(res => {
          // this.$store.dispatch('logOut') 
          this.$router.push('/')
        }) 
      }
    }

  }
</script>

<style lang="stylus">

  .home_page
    width 100%
    height 100%
    .el-header 
      // background #5CACEE
      background #fff
      display flex
      align-items center
      justify-content flex-end
      overflow hidden
      // color #fff
      color #606266
      font-size 15px
      .wrapper
        display flex
        align-items center
        margin-right 10px
        .user_info
          display flex
          align-items center
          margin-right 15px
          .user_img
            display inline-block
            border-radius 100px
            height 24px
            width 24px
            margin-right 5px
            overflow hidden
            img 
              height 25px
              width 25px
          .user_name
            margin-right 15px
        .logout
          margin-right 20px
          cursor pointer
        .el-dropdown-link 
          color #606266
    .el-main
      position relative
      padding 0
      .tabs-list-wrapper
        position fixed
        top 50px
        .tabs-list
          overflow hidden
      .tabs-content-wrapper
        position absolute
        top 35px
        width 100%
      .container
        position relative
        top 35px
        background-color #f0f2f5
        width 100%
        padding 15px
        overflow hidden
</style>

