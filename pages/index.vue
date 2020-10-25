<template>
  <div>
    <h1 class="title">{{ 'posts' | capitalize }}</h1>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    posts() {
      return this$store.getters.posts
    },
  },
}
</script>
