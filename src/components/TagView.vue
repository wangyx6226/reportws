<template>
  <div class="tags-view-container">
    <router-link 
      v-for="tag in visitedViews" 
      :key="tag.path" 
      ref="tag"
      :to="{path: tag.path, fullPath: tag.fullPath}"
      :class="isActive(tag)? 'active': ''"
      class="tags-view-item" 
      tag="span">
      {{ $t('langMenuMap.'+ tag.title) }}
      <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedTag: {}
      }
    },

    computed: {
      visitedViews() {
        return this.$store.state.tagView.visitedViews
      }
    },

    watch: {
      //检测路径对象的变化
      $route(e) {
        this.addViewTags()
        this.moveToCurrentTag()
      }
    },

    mounted() {
      this.addViewTags()
    },

    methods: {
      isActive(tag) {
        return tag.path === this.$route.path
      },
      addViewTags() {
        const { name } = this.$route
        if (name) {
          this.$store.dispatch('addView', this.$route)
        }
        return false
      },
      moveToCurrentTag() {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          // for (const tag of tags) {
          //   if (tag.to.path === this.$route.path) {
          //     // this.$refs.
          //     if (tag.to.fullPath !== this.$route.fullPath) {
          //       this.$store.dispatch('updateVisitedView', this.$route)
          //     }
          //     break
          //   }
          // }
        })
      },
      closeSelectedTag(view) {
        this.$store.dispatch('delView', view).then(({visitedViews}) => {
          //转换路由，找到最后一个页面
          if (this.isActive(view)) {
            const lastView = visitedViews.slice(-1)[0]
            if (lastView) {
              this.$router.push(lastView)
            } else {
              this.$router.push('/')
            }

          }
        })
      }
    }

  }
</script>

<style lang="stylus" scoped>
  .tags-view-container 
    height 34px
    width 100%
    background #fff
    border-bottom 1px solid #d8dce5
    border-top 1px solid #d8dce5
    box-shadow 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    // .tags-view-wrapper 
    .tags-view-item 
      display: inline-block
      position: relative
      cursor: pointer
      height: 26px
      line-height: 26px
      border: 1px solid #d8dce5
      color: #495060
      background: #fff
      padding: 0 8px
      font-size: 12px
      margin-left: 5px
      margin-top: 4px
      &:first-of-type 
        margin-left: 15px
      &:last-of-type 
        margin-right: 15px
      &.active 
        background-color: #42b983
        color: #fff
        border-color: #42b983
        &::before 
          content: ''
          background: #fff
          display: inline-block
          width: 8px
          height: 8px
          border-radius: 50%
          position: relative
          margin-right: 2px
  // .contextmenu {
  //   margin: 0;
  //   background: #fff;
  //   z-index: 100;
  //   position: absolute;
  //   list-style-type: none;
  //   padding: 5px 0;
  //   border-radius: 4px;
  //   font-size: 12px;
  //   font-weight: 400;
  //   color: #333;
  //   box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
  //   li {
  //     margin: 0;
  //     padding: 7px 16px;
  //     cursor: pointer;
  //     &:hover {
  //       background: #eee;
  //     }
  //   }
  // }
// }
</style>

