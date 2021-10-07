<template>
  <div>
    <h2>Posts</h2>
    <div>
      <h5>Post Form</h5>
    </div>
    <div>
      <h5>Display Posts</h5>
      <!-- <h6 v-for="post in postList" :key="post.id">{{ post.content }}</h6> -->
      <PostCard
        v-for="post in postList"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import posts from '../testing/dummyPosts'

import PostCard from '../components/PostCard.vue'

export default {
  name: 'Posts',
  components: {
    PostCard
  },
  data: () => ({
    postList: posts
  })
}
</script>