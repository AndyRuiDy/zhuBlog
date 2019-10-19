<template>
  <div class="context-box">
    <div class="context-top">
      <div class="title-box">
        <h3 class="context-title">我和我的兄弟</h3>
        <router-link class="home-a" to="/">返回首页</router-link>
      </div>
      <p class="context-author">
        <i class="el-icon-user-solid"></i>
        <span class="author">zhuBlog</span>
        <i class="el-icon-time"></i>
        <span class="time">2019-09-30 15:40:48</span>
      </p>
    </div>
    <div class="context">
      {{ this.context }}
      <img style="display: block;margin: 0 auto;margin-top: 20px" src="https://tse4-mm.cn.bing.net/th?id=OIP.xXxS9F__g6gN_gJbJalceAHaFn&w=279&h=199&c=7&o=5&pid=1.7" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContext',
  data () {
    return {
      context: `  《我和我的兄弟~恩》讲述一个单纯小镇的19岁少年李大惠（陈泽耀），面对逆境的成长过程，
              贫穷的家境，加上拥有一个20岁，但智商只有10岁的哥哥李大恩（郭晓东），失去双亲的依靠，
              自小由阿嬷照顾，与青梅竹马卢薇薇（鬼鬼吴映洁）拥有一段纯纯爱情的经历，奈何上天弄人而导
              致两人最后空留遗憾。此剧除了讲述两兄弟的感情故事，也集合友情、爱情的温情元素。该剧将在
              高雄和台北两地取景，耗时3个月的拍摄。另外，剧中李大惠也反映时下年轻人，同样受到社会不良
              价值观的影响，人性的贪婪和考验，以及生离死别的冲击，继而激发了自己。此外，李家两兄弟，
              由于哥哥是智商低能儿，在成长的过程当中，也显现了两兄弟彼此非凡的爱，生活上的关怀以及细致
              的感情和描述，这也成了如今偶像剧风潮当中的最新触点。《我和我的兄弟~恩》除了讲述两兄弟的感情故事，
              也是亲情，友情，爱情的温情偶像剧，同时，透过《我》剧，也传达提升社会弱势族群（喜憨儿）的关怀注意力。`
    }
  }
}
</script>

<style lang="stylus" scoped>
.context-box
  max-width 615px
  padding 25px 0
  .context-top
    .title-box
      border-bottom 3px solid #797C79
      .context-title
        width 100%
        height 45px
        font-size 30px
        color #38485A
      .home-a
        float right
        margin-top -18px
    .context-author
      height 30px
      font-size 12px
      line-height 30px
      color #888
      .author
        margin 0 15px 0 8px
      .time
        margin-left 8px
  .context
    line-height 1.75
    text-indent 2em
    color #5D5D5D
    padding 8px 0 25px 0
    font-size 14px
</style>
