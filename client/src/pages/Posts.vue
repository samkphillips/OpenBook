<template>
  <div>
    <h2>Posts</h2>
    <div>
      <PostForm :postList="postList" />
    </div>
    <div v-if="postList.length > 0">
      <h5>Display Posts</h5>
      <PostCard
        v-for="post in postList"
        :key="post.id"
        :post="post"
        :postList="postList"
      />
    </div>
    <div v-else><h6>Loading...</h6></div>
  </div>
</template>

<script>
// import posts from '../testing/dummyPosts'
import { GetPosts } from '../services/posts'

import PostCard from '../components/PostCard.vue'
import PostForm from '../components/PostForm.vue'

export default {
  name: 'Posts',
  components: {
    PostCard,
    PostForm
  },
  data: () => ({
    postList: []
  }),
  mounted() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      const messages = await GetPosts()
      this.postList = messages
      this.sortPosts()
    },
    sortPosts() {
      this.postList.sort((a, b) => {
        let aDate = new Date(a.created_at)
        let bDate = new Date(b.created_at)

        if (aDate < bDate) {
          return 1
        }
        if (aDate > bDate) {
          return -1
        }
        return 0
      })
    }
  }
}
</script>