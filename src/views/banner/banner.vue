<template>
  <div class="blog-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="https://tse1-mm.cn.bing.net/th?id=OET.74c4c0765d134d91ad955a258edf42ed&w=272&h=135&c=7&rs=1&o=5&pid=1.9" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://tse2-mm.cn.bing.net/th?id=OIP.IqE-f-iwFt4FQlVM8OSZtAHaEo&w=297&h=182&c=7&o=5&pid=1.7" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://tse1-mm.cn.bing.net/th?id=OIP.U6sHYSnDhjY6KAnvyILHEQHaEo&w=300&h=187&c=7&o=5&pid=1.7" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://tse3-mm.cn.bing.net/th?id=OIP.-VWqGCGWxjyj-VPzLxQCeQHaEK&w=272&h=160&c=7&o=5&pid=1.7" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'BlogBanner',
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.swiper-container

.blog-wrapper
  overflow hidden
  width 100%
  height 300px
  margin-bottom 25px
  .swiper-img
    width: 100%
    height: 300px
</style>
