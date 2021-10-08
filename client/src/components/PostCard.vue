<template>
  <div class="post">
    <h6>Name: {{ post.name }} - Posted on: {{ post.created_at }}</h6>
    <p>{{ post.content }}</p>
    <h5>{{ post.like - post.dislike }} | Likes: {{ post.like }} | Dislikes: {{ post.dislike }}</h5>
    <div v-if="post.comments && post.comments.length > 0">
      <div v-if="displayComments">
        <CommentCard
          v-for="comment in post.comments"
          :key="comment.id"
          :comment="comment"
        />
        <CommentForm :post_id="post.id" :commentList="post.comments" />
        <button @click="() => {displayComments = false}">
          Hide Comments
        </button>
      </div>
      <div v-else>
        <button @click="() => {displayComments = true}">
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
    post: Object
  },
  mounted() {
    this.displayComments = !this.post.comments
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