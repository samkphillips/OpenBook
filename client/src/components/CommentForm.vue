<template>
  <div>
    <div v-if="showForm">
      <h3>Comment Form</h3>
      <form @submit.prevent="submitComment">
        <input
          placeholder="Your Name"
          @input="handleName"
          :value="nameField"
        />
        <input
          placeholder="Your Message"
          @input="handleContent"
          :value="contentField"
        />
        <button type="submit" :disabled="nameField.length <= 0 || contentField.length <= 0">Submit</button>
        <button @click="() => {showForm = false}">Cancel</button>
      </form>
    </div>
    <div v-else>
      <button @click="() => {showForm = true}">Add Comment</button>
    </div>
  </div>
</template>

<script>
import { CreateComment } from '../services/comments'

export default {
  name: 'CommentForm',
  data: () => ({
    nameField: '',
    contentField: '',
    showForm: false
  }),
  props: {
    post_id: Number,
    commentList: Array
  },
  methods: {
    async submitComment() {
      const message = await CreateComment({
        name: this.nameField,
        content: this.contentField,
        post_id: this.post_id
      })

      this.commentList.push(message)

      this.nameField = ''
      this.contentField = ''
      this.showForm = false
    },
    handleName(e) {
      this.nameField = e.target.value
    },
    handleContent(e) {
      this.contentField = e.target.value
    }
  }
}
</script>