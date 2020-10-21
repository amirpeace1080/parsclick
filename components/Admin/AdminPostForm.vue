<template>
  <form @submit.prevent="onSave">
    <label>Author</label>
    <input type="text" class="input" v-model="editedPost.author" />

    <label>Title</label>
    <input type="text" class="input" v-model="editedPost.title" />

    <label>Thumbnail</label>
    <input type="text" class="input" v-model="editedPost.thumbnail" />

    <label>body</label>
    <textarea type="text" class="textarea" v-model="editedPost.body"></textarea>

    <button type="submit" class="button is-primary mt-10">Save</button>
    <button type="button" @click="onCancel" class="button is-danger mt-10">
      Cancel
    </button>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            body: '',
            title: '',
            thumbnail: '',
          },
    }
  },
  methods: {
    onSave() {},
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>

<style></style>
