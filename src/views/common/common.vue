<template>
  <div>
    <top-nav></top-nav>
    <blog-loginnav></blog-loginnav>
    <blog-vessel></blog-vessel>
    <blog-roof></blog-roof>
  </div>
</template>

<script>
import TopNav from '@/components/navigation/'
import BlogRoof from '@/components/roof/'
import BlogLoginnav from '@/components/loginnav/'
import BlogVessel from './components/detailcontent.vue'

export default {
  components: {
    TopNav,
    BlogRoof,
    BlogLoginnav,
    BlogVessel
  }
}
</script>
