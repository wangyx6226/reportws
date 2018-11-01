<template>
  <el-dropdown @command="setLangMethod">
    <span v-bind="$attrs" class="el-dropdown-link">
      {{ $t('langCommon.lang') }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="EN">English</el-dropdown-item>
      <el-dropdown-item command="CN">中文</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    inheritAttrs: false,
    methods: {
      setLangMethod(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLangrage', lang)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .white
    color #fff
</style>

