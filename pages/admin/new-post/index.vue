<template>
  <div class="admin-new-post-page ml-10">
    <AdminPostForm :post="post" />
  </div>
</template>

<script>
import data from '@/api/data.json'

export default {
  data() {
    return {
      post: data[0],
    }
  },
}
</script>

<style></style>
