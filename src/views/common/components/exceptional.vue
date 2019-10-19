<template>
  <div class="exceptional">
    <div class="exceptional-box">
      <div class="qrcode">
        <img width="160px" height="160px" src="../../../assets/images/wechat.jpg" alt="">
        <p class="welcomeblog">欢迎关注博主公众号</p>
      </div>
      <div class="wechat-pay">
        <span class="playtour" @click="handlePayOpen">打赏</span>
      </div>
      <transition name="bounce">
        <div v-show="payShow" class="pay">
          <div class="pay-close">
            <span class="close" @click="handlePayClose">X</span>
          </div>
          <div class="qrcode-box">
              <div class="qr">
                <img width="200px" height="200px" :src="qrcode" alt="">
              </div>
              <p class="reward">扫码打赏，建议金额1-10元</p>
              <p class="qr-con">感谢您的支持！我会继续努力</p>
              <div class="pay-choose">
                <form>
                  <span>
                    <input id="alipay" name="pay" type="radio" @click="handleAlipay" :checked="radioAlipay" />
                    <label for="alipay">
                      <span class="aliWeChat alipay"></span>
                    </label>
                  </span>
                  <span>
                    <input id="wechatpay" name="pay" type="radio" @click="handleWechatpay" />
                    <label for="wechatpay">
                      <span class="aliWeChat wechatpay"></span>
                    </label>
                  </span>
                </form>
              </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogExceptional',
  data () {
    return {
      payShow: false,
      radioAlipay: true,
      radioWechatpay: false,
      qrcode: require('../../../assets/images/alipay.png')
    }
  },
  methods: {
    handlePayClose () {
      this.payShow = false
    },
    handlePayOpen () {
      this.payShow = true
    },
    handleAlipay () {
      this.radioAlipay = true
      this.radioWechatpay = false
      const qrcodeAlipay = require('../../../assets/images/alipay.png')
      this.qrcode = qrcodeAlipay
    },
    handleWechatpay () {
      this.radioAlipay = false
      this.radioWechatpay = true
      const qrcodeWechat = require('../../../assets/images/wechatpay.jpg')
      this.qrcode = qrcodeWechat
    }
  }
}
</script>

<style lang="stylus" scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.exceptional
  padding 20px
  position relative
  margin-bottom 20px
  .exceptional-box
    width 510px
    height 165px
    position relative
    .qrcode
      position absolute
      top 0
      left 0
      width 250px
      height 160px
      text-align center
      .welcomeblog
        margin-top 8px
        color #27c196
    .wechat-pay
      position absolute
      top 0
      right 0
      width 250px
      height 150px
      margin-top 8px
      border-left 1px solid #999
      .playtour
        display block
        width 95px
        height 45px
        line-height 45px
        text-align center
        background rgba(233,94,132,1)
        border-radius 23px
        margin 0 auto
        margin-top 50px
        font-size 20px
        color #fff
        cursor pointer
        &:hover
          background rgba(228,83,125,0.74)
    .pay
      width 480px
      height 440px
      position fixed
      z-index 999
      top 18%
      left 47.5%
      border-radius 12px
      box-shadow 0 0 6px #00000087
      background #fff
      padding 20px 0
      .pay-close
        width 100%
        height 20px
        .close
          float right
          margin-right 20px
          cursor pointer
          font-size 16px
          color #666
      .qrcode-box
        width 100%
        height 485px
        .reward
          text-align center
          font-size 12px
          color #000
          margin-top 15px
        .qr-con
          text-align center
          font-size 18px
          color #777
          margin-top 20px
        .qr
          width 200px
          height 200px
          padding 20px
          border 3px solid red
          border-radius 16px
          margin 0 auto
          margin-top 60px
        .pay-choose
          text-align center
          margin-top 16px
          .aliWeChat
            width 112px
            height 30px
            display inline-block
            background-size 112px 30px
            background-repeat no-repeat
            vertical-align middle
          .alipay
            background-image url('../../../assets/images/alipaylogo.png')
            margin-right 16px
          .wechatpay
            background-image url('../../../assets/images/wechatpaylogo1.png')
</style>
