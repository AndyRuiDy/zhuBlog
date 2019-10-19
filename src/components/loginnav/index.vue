<template>
  <div class="loginnav-container">
    <div class="loginnav-box">
      <span class="welcome">欢迎光临 !</span> &nbsp;&nbsp;
      <span class="loginnav" @click="handleLoginClick">
        <span class="el-icon-user"></span>
        登录
      </span>
      <span class="homeaboutwe">
        <span class="loginnav home">投稿</span>
        <span class="welcome">关于我们</span>
      </span>
    </div>
    <div @click="handleLogin" class="login-container" v-show="loginShow">
      <div class="login-box" @click.stop="handleClick">
        <div class="login">
          <ul class="login-ul">
            <li class="loginform"
              v-for="(list, index) in loginList"
              :key="index"
              :class="{active:isActive == index}"
              @click="handleLoginForm(index)"
            >{{list.text}}</li>
          </ul>
          <div class="usr-box">
            <form>
              <div class="usr">
                <p>用户名：</p>
                <input type="text" class="inpt" placeholder="请输入用户名/手机号/邮箱" name="username" />
              </div>
              <div class="usr">
                <p>密码：</p>
                <input type="password" class="inpt" placeholder="请输入密码" name="username" />
              </div>
              <button class="btn">登录</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLoginnav',
  data () {
    return {
      loginShow: false,
      isActive: 0,
      loginList: [
        {
          text: '登录'
        },
        {
          text: '修改密码'
        }
      ]
    }
  },
  methods: {
    handleLoginClick () {
      this.loginShow = true
    },
    handleLogin () {
      this.loginShow = false
    },
    handleLoginForm (index) {
      this.isActive = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.loginnav-container
  width 100%
  height 30px
  background #f5f8f8
  .loginnav-box
    width 74%
    height 100%
    line-height 30px
    color #9e9f9f
    margin 0 auto
    .welcome
      margin-right 5px
      cursor pointer
      &:hover
        color #7f8181
    .loginnav
      cursor pointer
      color #9e9f9f
      &:hover
        color #6dc0c0
    .homeaboutwe
      float right
      margin-right 15px
      .home
        margin-right 8px
  .login-container
    width 100%
    height 100%
    background rgba(0, 0, 0, .45)
    position fixed
    top 0
    left 0
    z-index 9999
    .login-box
      width 320px
      height 280px
      margin 0 auto
      background #fff
      margin-top 80px
      .login
        .usr-box
          padding 30px
          .usr
            margin-top 10px
            p
              height 20px
              font-size 14px
              font-weight 600
            .inpt
              border 1px solid #ccc
              width 250px
              height 35px
              padding 0 5px
          .btn
            width 263px
            height 35px
            text-align center
            background #1E73BE
            border-radius 8px
            margin-top 20px
            cursor pointer
            color #fff
            font-size 16px
            font-weight 600
            &:hover
              background #0d589b
        .login-ul
          width 100%
          height 40px
          background #f1f1f1
          border-bottom 1px solid #ccc
          li
            padding 13px 18px
            display inline-block
            font-weight 600
            cursor pointer
            border-right 1px solid #ccc
          .active
            background #fff
            border-bottom 1px solid #fff
</style>
