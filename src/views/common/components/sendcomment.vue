<template>
  <div class="comment-container">
    <div class="send-commet">
      发表我的评论
    </div>
    <div>
      <div>
        <form>
          <textarea class="com-textarea"></textarea>
        </form>
      </div>
      <div class="com-submit">
        <!-- <span style="font-size: 18px; margin: 3px 0 0 5px; cursor: pointer" class="el-icon-eleme"></span> -->
        <span class="iconfont">&#xe635;</span>
        <button class="com-btn">发表评论</button>
        <div style="clear:both"></div>
      </div>
      <div class="com-context">
        <div class="count">
          <span class="iconfont" style="font-size: 1.6em">&#xe635;</span>  (
            {{ this.count }}
          )个小伙伴在吐槽
        </div>
        <div class="con-user">
          <div class="con-box">
            <div class="con-user-img">
              <img width="85px" height="85px" src="http://file.qqtouxiang.com/gexing/2019-09-05/small905c979760c9bb0f7af51c537b08f7b11567672824.jpg" alt="">
            </div>
            <div class="con-user-title">
              <div class="con-user-name">
                <span class="user-name">
                  {{ this.username }}
                </span>
                <span class="create-time">
                  {{ this.createtime }}
                </span>
              </div>
              <p class="context">
                {{ this.comment }}
              </p>
              <div class="reply-box">
                <span class="reply">回复</span>({{ this.count }})
                <span class="iconfont">&#xe60c;</span>
                <span class="el-icon-apple"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="con-user">
          <div class="con-box">
            <div class="con-user-img">
              <img width="85px" height="85px" src="http://file.qqtouxiang.com/gexing/2019-09-05/small905c979760c9bb0f7af51c537b08f7b11567672824.jpg" alt="">
            </div>
            <div class="con-user-title">
              <div class="con-user-name">
                <span class="user-name">
                  {{ this.username }}
                </span>
                <span class="create-time">
                  {{ this.createtime }}
                </span>
              </div>
              <p class="context">
                {{ this.comment }}
              </p>
              <div class="reply-box">
                <span class="reply">回复</span>
                <span class="el-icon-apple"></span>
                <span class="el-icon-apple"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="con-user">
          <div class="con-box">
            <div class="con-user-img">
              <img width="85px" height="85px" src="http://file.qqtouxiang.com/gexing/2019-09-05/small905c979760c9bb0f7af51c537b08f7b11567672824.jpg" alt="">
            </div>
            <div class="con-user-title">
              <div class="con-user-name">
                <span class="user-name">
                  {{ this.username }}
                </span>
                <span class="create-time">
                  {{ this.createtime }}
                </span>
              </div>
              <p class="context">
                {{ this.comment }}
              </p>
              <div class="reply-box">
                <span class="reply">回复</span>
                <span class="el-icon-apple"></span>
                <span class="el-icon-apple"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="con-user">
          <div class="con-box">
            <div class="con-user-img">
              <img width="85px" height="85px" src="http://file.qqtouxiang.com/gexing/2019-09-05/small905c979760c9bb0f7af51c537b08f7b11567672824.jpg" alt="">
            </div>
            <div class="con-user-title">
              <div class="con-user-name">
                <span class="user-name">
                  {{ this.username }}
                </span>
                <span class="create-time">
                  {{ this.createtime }}
                </span>
              </div>
              <p class="context">
                {{ this.comment }}
              </p>
              <div class="reply-box">
                <span class="reply">回复</span>
                <span class="el-icon-apple"></span>
                <span class="el-icon-apple"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="con-user">
          <div class="con-box">
            <div class="con-user-img">
              <img width="85px" height="85px" src="http://file.qqtouxiang.com/gexing/2019-09-05/small905c979760c9bb0f7af51c537b08f7b11567672824.jpg" alt="">
            </div>
            <div class="con-user-title">
              <div class="con-user-name">
                <span class="user-name">
                  {{ this.username }}
                </span>
                <span class="create-time">
                  {{ this.createtime }}
                </span>
              </div>
              <p class="context">
                {{ this.comment }}
              </p>
              <div class="reply-box">
                <span class="reply">回复</span>
                <span class="el-icon-apple"></span>
                <span class="el-icon-apple"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogComment',
  data () {
    return {
      count: 16,
      username: 'andyCabbage',
      createtime: '2019-10-09 13:53:26',
      comment: `哇 国庆之前我也刚搭了一个hexo博客主题不一样，当时真的也是捯饬了好久毕竟第一次搞 看了您的文章瞬间思路更清晰 顶一个`
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment-container
  width 100%
  padding 35px 0 25px 0
  .send-commet
    width 130px
    height 35px
    line-height 35px
    margin-bottom 15px
    background #ccc
    font-size 14px
    color #777
    text-align center
  .com-textarea
    border 1px solid #ccc
    padding 5px
    width 98.5%
    height 65px
  .com-submit
    padding-top 8px
    margin-bottom 15px
    .com-btn
      color #666
      float right
      width 110px
      height 35px
      cursor pointer
      font-size 14px
      &:hover
        background #ccc
  .com-context
    padding 30px 0
    .count
      font-size 14px
      padding 10px
      border-bottom 1px solid #ccc
    .con-user
      width 100%
      padding-top 16px
      .con-box
        width 100%
        height 96px
        padding 5px 0
        border-bottom 1px solid #ccc
        .con-user-img
          float left
          width 85px
          height 85px
          img
            border-radius 50%
        .con-user-title
          float right
          width 81%
          height 96px
          .con-user-name
            min-height 25px
            .user-name
              display inline-block
              color #35c9da
              font-size 14px
              float left
            .create-time
              display inline-block
              color #C0C0C0
              float right
          .context
            line-height 1.56
            color #555
            font-size 16px
            margin-bottom 5px
          .reply-box
            color #777
            text-align right
            span
              color #C0C0C0
              margin-right 16px
              cursor pointer
              &:hover
                color #11b8cb
</style>
