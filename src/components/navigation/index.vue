<template>
  <div class="top-container">
    <div class="top-box">
      <div class="top-title">
        <span>zhuBlog</span>
      </div>
      <div class="nav-container">
        <div class="nav-search">
          <div class="search-box">
            <input type="text" class="serach-inpt" placeholder="请输入你喜欢的" />
            <i class="el-icon-search search-icon"></i>
          </div>
        </div>
        <div class="top-nav">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <router-link :to="{path: '/'}">
                首页
              </router-link>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">Blog</template>
              <el-menu-item index="2-1">Java</el-menu-item>
              <el-menu-item index="2-2">数据库</el-menu-item>
              <el-menu-item index="2-3">前端Web</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">生活</el-menu-item>
            <el-menu-item index="4">美食</el-menu-item>
            <el-menu-item index="5">关于我</el-menu-item>
            <el-menu-item index="6">
              <a href="https://github.com/AndyRuiDy">
                GitHub
              </a>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
.top-container
  width 100%
  height 60px
  background-color #545c64
  .top-box
    width 80%
    height 100%
    margin 0 auto
    position relative
    .top-title
      position absolute
      left 0
      color #fff
      display inline-block
      height 100%
      line-height 60px
      font-size 26px
    .nav-container
      position absolute
      right 0
      height 100%
      width 655px
      .nav-search
        height 100%
        float left
        color #fff
        .search-box
          width 130px
          height 30px
          line-height 26px
          margin-top 15px
          border 1px solid #777
          border-radius 16px
          padding 0 15px
          .serach-inpt
            width 110px
            font-size 12px
            background transparent
            color #fff
            margin-top -6px
            padding-right 5px
          .search-icon
            display inline-block
            cursor pointer
            padding-top: 8px
      .top-nav
        width 470px
        height 100%
        float right
        display inline-block

</style>
