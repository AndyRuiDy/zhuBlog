<template>
  <div class="common-container">
    <div class="common-box">
      <div class="common-left">
        <blog-context></blog-context>
        <blog-copyright></blog-copyright>
        <blog-exceptional></blog-exceptional>
        <blog-next></blog-next>
        <blog-comment></blog-comment>
      </div>
      <div class="common-right">
        <blog-aboutme></blog-aboutme>
        <blog-newarticle></blog-newarticle>
        <blog-frindslink></blog-frindslink>
      </div>
    </div>
  </div>
</template>

<script>
import BlogContext from './context.vue'
import BlogCopyright from './copyright.vue'
import BlogExceptional from './exceptional.vue'
import BlogNext from './nextcontext.vue'
import BlogComment from './sendcomment.vue'
import BlogAboutme from '../../container/components/aboutme.vue'
import BlogNewarticle from '../../container/components/newarticle.vue'
import BlogFrindslink from '../../container/components/friendshiplink.vue'

export default {
  name: 'BlogVessel',
  components: {
    BlogContext,
    BlogCopyright,
    BlogExceptional,
    BlogNext,
    BlogComment,
    BlogAboutme,
    BlogNewarticle,
    BlogFrindslink
  }
}
</script>

<style lang="stylus" scoped>
.common-container
  width 100%
  height 100%
  .common-box
    max-width 1015px
    height 100%
    margin 0 auto
    position relative
    .common-left
      max-width 664px
      height 100%
      position absolute
      top 25px
      left 0
    .common-right
      max-width 315px
      height 600px
      position absolute
      top 25px
      right 0
</style>
