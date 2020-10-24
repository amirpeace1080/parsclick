import vuex from 'vuex'
import data from '@/api/data.json'

export default () => {
  return new vuex.Store({
    state: {
      loadedPosts: [],
      posts: [],
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      getPosts(state, posts) {
        state.posts = posts
      },
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', data)
            resolve()
          }, 2000)
        })
      },
      async getPosts({commit}) {
        const posts = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        commit('getPosts', posts)
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      posts(state){
        return state.posts
      }
    },
  })
}
