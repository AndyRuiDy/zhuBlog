<template>
  <div class="con-about">
    <p class="about-me">关注我</p>
    <div class="about-img">
      <span>
        <img width="50" height="50" src="https://tse1-mm.cn.bing.net/th?id=OIP.B9Roe4rsmD_HBdKN9GF-ygHaHa&w=194&h=188&c=7&o=5&pid=1.7" alt="">
        wechat
      </span>
      <span>
        <img width="50" height="50" src="https://tse2-mm.cn.bing.net/th?id=OIP.z9b7yByRZX_SK3H3blmiFwHaGI&w=244&h=193&c=7&o=5&pid=1.7" alt="">
        新浪微博
      </span>
      <span>
        <img width="50" height="50" src="https://tse1-mm.cn.bing.net/th?id=OIP.B9Roe4rsmD_HBdKN9GF-ygHaHa&w=194&h=188&c=7&o=5&pid=1.7" alt="">
        wechat
      </span>
      <span>
        <img width="50" height="50" src="https://tse1-mm.cn.bing.net/th?id=OIP.B9Roe4rsmD_HBdKN9GF-ygHaHa&w=194&h=188&c=7&o=5&pid=1.7" alt="">
        意见反馈
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogAboutme'
}
</script>

<style lang="stylus" scoped>
.con-about
  width 100%
  .about-me
    width 100%
    height 45px
    line-height 45px
    font-size 18px
    border-bottom 1px solid #ccc
  .about-img
    padding 25px 5px 30px 5px
    span
      width 60px
      display inline-block
      text-align center
      margin-right 10px
      color #777
      img
        border-radius 50%
        margin-bottom 8px

</style>
