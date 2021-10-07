<template>
  <div class="comment">
    <h6>Name: {{ comment.name }} - posted on: {{ comment.created_at }}</h6>
    <p>{{ comment.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentCard',
  props: {
    comment: Object
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.comment {
  background-color: lightblue;
  margin: 10px;
  padding: 10px;
}
</style>