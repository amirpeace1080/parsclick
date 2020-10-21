<template>
  <div class="container">
    <div class="columns">
      <div class="column" v-for="post in posts" :key="post.id">
        <Post
          :is-admin="isAdmin"
          :id="post.id"
          :title="post.title"
          :body="post.body"
          :img="post.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
