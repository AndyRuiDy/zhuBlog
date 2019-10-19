<template>
  <div class="next-container">
    <div class="share">
      <span>分享：</span>
      <router-link to="" @click.native="handleAClick">
        <span class="iconfont" style="font-size: 1.5em;margin: 4px; color: #FFCD00">&#xe603;</span>
      </router-link>
      <router-link to="" @click.native="handleAClick">
        <span class="iconfont" style="font-size: 1.5em;margin: 4px; color: #24DB5A">&#xf262;</span>
      </router-link>
      <router-link to="" @click.native="handleAClick">
        <span class="iconfont" style="font-size: 1.5em;margin: 4px; color: #E52425">&#xe63e;</span>
      </router-link>
      <span v-show="deveShow" style="color: red">{{ this.development }}</span>
    </div>
    <div class="preAndNext">
      <span class="pre">上一篇:
        <router-link to="">
          {{ this.preData }}
        </router-link>
      </span>
      <span class="next">下一篇:
        <router-link to="">
          {{ this.nextData }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogNext',
  data () {
    return {
      preData: '我和我的兄弟',
      nextData: '我们的偶遇',
      development: '正在努力开发中...',
      deveShow: false
    }
  },
  methods: {
    handleAClick () {
      this.deveShow = true
      const _this = this
      setTimeout(() => {
        _this.deveShow = false
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.next-container
  width 100%
  height 95px
  .share
    padding-top 10px
    i
      font-size 28px
      margin-right 8px
  .preAndNext
    width 100%
    height 30px
    line-height 30px
    padding-top 5px
    .pre
      float left
    .next
      float right
</style>
