<template>
  <div class="new-container">
    <p class="new-title">最新文章</p>
    <div class="new-con-title">
      <ul>
        <li>
          <a href="#">奔跑中的你</a>
        </li>
        <li>
          <a href="#">走在技术前沿</a>
        </li>
        <li>
          <a href="#">沿海地带</a>
        </li>
        <li>
          <a href="#">说好不哭</a>
        </li>
        <li>
          <a href="#">未来的梦想</a>
        </li>
        <li>
          <a href="#">展望技术的成长</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogNewarticle'
}
</script>

<style lang="stylus">
.new-container
  width 100%
  .new-title
    width 100%
    height 45px
    line-height 45px
    font-size 18px
    border-bottom 1px solid #ccc
  .new-con-title
    padding 18px 8px 25px 8px
    ul
      margin-left 25px
      list-style-type disc
      li
        line-height 1.65
        font-size 16px
        a
          color #666
          &:hover
            color #898a89
            text-decoration underline

</style>
