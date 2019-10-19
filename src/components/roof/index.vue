<template>
  <div
    class="roof-container"
    v-show="showTop"
    :style="opacityStyle"
    @click="handleTop"
  >
    <span class="el-icon-caret-top"></span>
  </div>
</template>

<script>
export default {
  name: 'BlogRoof',
  data () {
    return {
      showTop: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showTop = true
      } else {
        this.showTop = false
      }
    },
    handleTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.roof-container
  position fixed
  bottom 15px
  right 40px
  width 60px
  height 60px
  line-height 60px
  font-size 36px
  border-radius 50%
  text-align center
  cursor pointer
  color #888
  border 1px solid #888
  &:hover
    color #ccc
    border 1px solid #ccc
</style>
