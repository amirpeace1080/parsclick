<template>
  <div class="column">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ loadedPost.title }}</strong>
            <br />
            {{ loadedPost.body }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import data from '@/api/data.json'

export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: 1,
          title: 'first',
          body: `the first post body(ID: ${context.params.id})`,
          img: 'pic.jpeg',
        },
      })
    }, 2000)
  },
}
</script>

<style lang="scss" scoped></style>
