<template>
  <div class="admin-page">
    <section class="new-post" v-if="isAdmin">
      <h1 class="title">Create new Post</h1>
      <button class="button is-primary">Create Post</button>
    </section>
    <hr />
    <section class="existing-posts">
      <h1 class="title">Existing Posts</h1>
      <PostList :is-admin="true" />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  components: {
    PostList,
  },
  data() {
    return {
      isAdmin: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
