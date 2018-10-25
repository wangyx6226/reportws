<template>
  <div class="login_page">
    <!-- lang controler -->
    <div class="lang_controler">
      <el-select v-model="langrage" size="small">
        <el-option label="English" value="EN"></el-option>
        <el-option label="中文" value="CN"></el-option>
      </el-select>
    </div>
    
    <!-- form -->
    <div class="form_container">
      <div class="logo_wrapper">
        <img src="../assets/logo-b-t.png">
      </div>
      <el-form 
        :model='form' 
        :rules="rules" 
        :show-message="false"
        :status-icon="true"
        ref="form"
      >
        <el-form-item prop="username">
          <el-input   
            v-model="form.username" 
            :placeholder="$t('langLogin.unPlaceholder')"
            :autofocus="true"
            auto-complete="off" 
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input 
            v-model="form.password" 
            :placeholder="$t('langLogin.pwPlaceholder')"
            auto-complete="off" 
          >
          </el-input>
        </el-form-item >
        <el-form-item prop="validateCode" class="vcode">
          <el-input 
            v-model="form.validateCode" 
            :placeholder="$t('langLogin.vcPlaceholder')"
            auto-complete="off"
          >
          </el-input>
          <div class="code_wrapper" @click="changeCodeImgMethod">
            <img :src="codeImgUrl" class="code">
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="logining" @click="submitMethod" class="submit_btn">{{$t('langLogin.loginBtnText')}}</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- copyright -->
    <p class="copyright">Copyright © 2016-2018 ULTIMATE All Rights Reserved</p>
  </div>
</template>

<script>
  import { $UConfUrl } from '../api/config'
  import { $UPost } from '../api/request'
  import REQUEST_LOGIN from '../api/map'

  export default {

    data() {
      return {
        codeImgUrl: $UConfUrl('/system/veri/drawcode.do'),
        logining: false,
        form: {
          username: 'admin',
          password: '12',
          validateCode: '',
        },
        rules: {
          username: [
            { required: true, trigger: 'blur' },
          ],
          password: [
            { required: true, trigger: 'blur' },
          ],
          validateCode: [
            { required: true,  trigger: 'blur' },
          ]
        },
      }
    },

    computed: {
      langrage: {
        get() {
          return this.$store.state.langrage
        },
        set(newLang) {
          this.$i18n.locale = newLang
          this.$store.dispatch('setLangrage', newLang)
        }
      }
    },

    beforeUpdate() {
      console.log('更新了')
    },

    methods: {
      //更改验证码图片
      changeCodeImgMethod() {
        this.codeImgUrl = `${this.codeImgUrl.replace(/\?\S*/, '')}?${Math.random()}`
      },
      //提交登录
      submitMethod() {
        /*
        *【思路】
         
        * 验证用户输入
        * 成功
        *   调取登录接口
        *     成功
        *       将用户信息存在session中（控制过期时间）
        *       将用户信息存入state中
        *       提示错误信息（控制台不报错）
        *     失败
        *        提示错误（控制台不报错）
        *        返回登录页,input获取焦点
        * 失败
        *   错误提示
        *   input获取焦点
        */

      //  this.$refs.form.validate((valid, object) => {
      //   if(valid) {
      //     this.logining = true //显示加载状态
      //     let params = this.rulesForm
      //     return $UPost(REQUEST_LOGIN, params).then( res => {
      //       //错误判断..
      //       // if(res && res.header.state !== '0') {
      //       //   //等等
      //       //   return 
      //       // }
      //       let userinfo = res.response.docs 
            // this.$store.dispatch('setUserInfo', userinfo).then(() => {
              this.$router.push({name: 'Home', params:{usertype: 'admin'}})
              // this.logining = false
        //     })
        //   })
        // } else {
        //   console.log(object)
        //   return false
        // }
      //  })
      },
    }
  }
</script>

<style lang="stylus">
  @import '../assets/stylus/vairiable'

  .login_page
    position relative
    height 100%
    width 100%
    background linear-gradient(top, #0572D7, #23E2F4) no-repeat
    display flex
    justify-content center
    .lang_controler
      position absolute
      top 20px
      right 10px
      width 90px
      margin-right 10px
    .form_container
      margin 0 auto
      margin-top 5%
      width 400px
      z-index 100
      .logo_wrapper
        padding 0 20px
        margin-bottom 30px
        img
          width 100%
          height 100%
      .vcode
        position relative
        .el-input__inner
          width 60%
        .code_wrapper
          position absolute
          height 40px
          width 38%
          right 0
          top 0
          background-color #fff
          box-sizing border-box
          border 1px solid #dcdfe6
          border-radius 4px
          overflow hidden
          cursor pointer
          .code
            width 100%
            height 100%
      .el-button
        width 100%
        background $color-background
    .copyright
      position absolute
      bottom 30px
      color #fff
      font-size 12px
</style>
