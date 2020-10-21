<template>
  <div>
     <h1 class="title">Public Post</h1>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList'

export default {
  components:{
    PostList
  },
  data() {
    return {
      loadedPosts:[
        {
          id: 1,
          title: 'first',
          body: 'the first post body',
          img: 'pic.jpeg'
        },
        {
          id: 2,
          title: 'second',
          body: 'the second post body',
          img: 'pic.jpeg'
        },
        {
          id: 3,
          title: 'third',
          body: 'the third post body',
          img: 'pic.jpeg'
        },
      ]
    }
  },
}
</script>

<style>

</style>
