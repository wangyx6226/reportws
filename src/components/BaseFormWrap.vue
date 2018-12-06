<template>
  <!-- <ul> -->
    <!-- <li v-for="todo in todos" :key="todo.id"> -->
      <!-- 将内部所用数据传递给上下文 -->
      <!-- <slot :todo="todo">
        {{ todo.text }}
      </slot>
    </li>
  </ul> -->
  <div class="form_wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: {
  //   todos: Array
  // }
}
</script>

<style lang="stylus" scoped>
.form_wrap
  width 100%
  padding 10px
  background-color #fff
  margin-bottom 10px
</style>

