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
      <button type="submit">Submit</button>
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
      // console.log({name: this.nameField, content: this.contentField})
      const message = await CreatePost({
        name: this.nameField,
        content: this.contentField
      })

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