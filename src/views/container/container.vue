<template>
  <div class="blog-con">
    <div class="con-context">
      <div class="con-left">
        <blog-banner></blog-banner>
        <blog-article></blog-article>
      </div>
      <div class="con-right">
        <blog-aboutme></blog-aboutme>
        <blog-newarticle></blog-newarticle>
        <blog-frindslink></blog-frindslink>
      </div>
    </div>
  </div>
</template>

<script>
import BlogBanner from '@/views/banner/banner.vue'
import BlogArticle from './components/article.vue'
import BlogAboutme from './components/aboutme.vue'
import BlogNewarticle from './components/newarticle.vue'
import BlogFrindslink from './components/friendshiplink.vue'

export default {
  name: 'BlogContainer',
  components: {
    BlogBanner,
    BlogArticle,
    BlogAboutme,
    BlogNewarticle,
    BlogFrindslink
  }
}
</script>

<style lang="stylus" scoped>
.blog-con
  width 100%
  height 100%
  .con-context
    max-width 1082px
    height 100%
    margin 0 auto
    padding-top 60px
    position relative
    .con-left
      max-width 745px
      height 100%
      position absolute
      top 60px
      left 0
    .con-right
      max-width 315px
      height 70%
      position absolute
      top 60px
      right 0
</style>
