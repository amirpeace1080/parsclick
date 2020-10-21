<template>
  <div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>
