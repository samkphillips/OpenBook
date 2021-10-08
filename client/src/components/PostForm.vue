<template>
  <div>
    <h3>Post Form</h3>
    <form @submit.prevent="submitPost">
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
    </form>
  </div>
</template>

<script>
import { CreatePost } from '../services/posts'

export default {
  name: 'PostForm',
  data: () => ({
    nameField: '',
    contentField: ''
  }),
  props: {
    postList: Array
  },
  methods: {
    async submitPost() {
      const message = await CreatePost({
        name: this.nameField,
        content: this.contentField
      })

      message.comments = []

      this.postList.unshift(message)

      this.nameField = ''
      this.contentField = ''
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