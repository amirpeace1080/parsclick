<template>
  <div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    posts(){
      return this$store.getters.posts
    }
  },
}
</script>
