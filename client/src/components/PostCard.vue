<template>
  <div class="post">
    <h4>{{ post.name }} - Posted on: {{ new Date(post.created_at) }}</h4>
    <p>{{ post.content }}</p>
    <h4 class="likes">
      {{ post.like - post.dislike }} | Likes: {{ post.like }} | Dislikes:
      {{ post.dislike }} <button @click="deletePost">Report</button>
    </h4>
    <div v-if="post.comments.length > 0">
      <div v-if="displayComments">
        <CommentCard
          v-for="comment in post.comments"
          :key="comment.id"
          :comment="comment"
          :commentList="post.comments"
        />
        <CommentForm :post_id="post.id" :commentList="post.comments" />
        <button
          @click="
            () => {
              displayComments = false
            }
          "
        >
          Hide Comments
        </button>
      </div>
      <div v-else>
        <button
          @click="
            () => {
              displayComments = true
            }
          "
        >
          Display {{ post.comments.length }} Comments
        </button>
      </div>
    </div>
    <div v-else>
      <h5>This post has no comments! Be the first to add yours.</h5>
      <CommentForm :post_id="post.id" :commentList="post.comments" />
    </div>
  </div>
</template>

<script>
import CommentCard from '../components/CommentCard.vue'
import CommentForm from '../components/CommentForm.vue'
import { DeletePost } from '../services/posts'

export default {
  name: 'PostCard',
  components: {
    CommentCard,
    CommentForm
  },
  data: () => ({
    displayComments: false
  }),
  props: {
    post: Object,
    postList: Array
  },
  mounted() {
    this.displayComments = this.post.comments.length === 0
    this.sortComments()
  },
  methods: {
    sortComments() {
      this.post.comments.sort((a, b) => {
        let aDate = new Date(a.created_at)
        let bDate = new Date(b.created_at)

        if (aDate < bDate) {
          return -1
        }
        if (aDate > bDate) {
          return 1
        }
        return 0
      })
    },
    async deletePost() {
      await DeletePost(this.post.id)
      const delIndex = this.postList.indexOf(this.post)
      this.postList.splice(delIndex, 1)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.post {
  background-color: antiquewhite;
  margin: 10px;
  padding: 10px;
}
</style>
