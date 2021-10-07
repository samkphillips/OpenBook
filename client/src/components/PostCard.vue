<template>
  <div class="post">
    <h6>Name: {{ post.name }} - Posted on: {{ post.created_at }}</h6>
    <p>{{ post.content }}</p>
    <h5>{{ post.likes - post.dislikes }} | Likes: {{ post.likes }} | Dislikes: {{ post.dislikes }}</h5>
    <div v-if="post.comments">
      <div v-if="displayComments">
        <CommentCard
          v-for="comment in post.comments"
          :key="comment.id"
          :comment="comment"
        />
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
  </div>
</template>

<script>
import CommentCard from '../components/CommentCard.vue'

export default {
  name: 'PostCard',
  components: {
    CommentCard
  },
  data: () => ({
    displayComments: false
  }),
  props: {
    post: Object
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