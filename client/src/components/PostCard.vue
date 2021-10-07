<template>
  <div class="post">
    <h6>Name: {{ post.name }} - Posted on: {{ post.created_at }}</h6>
    <p>{{ post.content }}</p>
    <div v-if="post.comments">
      <CommentCard
        v-for="comment in post.comments"
        :key="comment.id"
        :comment="comment"
      />
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