<template>
  <div class="comment">
    <h6>{{ comment.name }} - commented on: {{ new Date(comment.created_at) }} <button @click="deleteComment">Report</button></h6>
    <p>{{ comment.content }}</p>
    <LikeBar
      :likes="comment.like"
      :dislikes="comment.dislike"
      :parentType="'comment'"
      :parentId="comment.id"
    />
  </div>
</template>

<script>
import LikeBar from '../components/LikeBar.vue'
import { DeleteComment } from '../services/comments'

export default {
  name: 'CommentCard',
  components: {
    LikeBar
  },
  props: {
    comment: Object,
    commentList: Array
  },
  methods: {
    async deleteComment() {
      await DeleteComment(this.comment.id)
      const delIndex = this.commentList.indexOf(this.comment)
      this.commentList.splice(delIndex, 1)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.comment {
  background-color: lightgray;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}
</style>
