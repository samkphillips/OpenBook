<template>
  <div>
    <h2>Posts</h2>
    <div>
      <PostForm />
    </div>
    <div>
      <h5>Display Posts</h5>
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
import PostForm from '../components/PostForm.vue'

export default {
  name: 'Posts',
  components: {
    PostCard,
    PostForm
  },
  data: () => ({
    postList: posts
  })
}
</script>