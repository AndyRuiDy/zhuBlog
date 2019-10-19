<template>
  <div class="blog-container">
    <top-nav></top-nav>
    <blog-loginnav></blog-loginnav>
    <blog-container></blog-container>
    <blog-roof></blog-roof>
  </div>
</template>

<script>
import {
  mapActions, mapState
} from 'vuex'
import TopNav from '@/components/navigation/'
import BlogRoof from '@/components/roof/'
import BlogLoginnav from '@/components/loginnav/'
import BlogContainer from './container/container.vue'

export default {
  mounted () {
    this.fetchUserInfo()
  },
  components: {
    TopNav,
    BlogContainer,
    BlogRoof,
    BlogLoginnav
  },
  computed: {
    ...mapState(['user']),
    testUser () {
      return this.user
    }
  },
  methods: {
    ...mapActions(['fetchUserInfo']),
    handleUserinfo () {
      console.log(1111111)
      this.fetchUserInfo()
      console.log(this.user)
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog-container
  width 100%
  height 100%
</style>
