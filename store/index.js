import vuex from 'vuex'
import data from '@/api/data.json'

export default () => {
  return new vuex.Store({
    state: {
      loadedPosts: [],
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
    },

    actions: {
      nuxtServerInit(vuexContext, context){
        return new Promise((resolve, reject) =>{
          setTimeout(() => {
            vuexContext.commit('setPosts', data)
            resolve()
          }, 2000);
        })
      },
      setPosts(context, posts) {
        context.commit('setPosts', data)
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}
