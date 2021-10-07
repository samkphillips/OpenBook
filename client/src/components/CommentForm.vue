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
        <button type="submit">Submit</button>
        <button @click="() => {showForm = false}">Cancel</button>
      </form>
    </div>
    <div v-else>
      <button @click="() => {showForm = true}">Add Comment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data: () => ({
    nameField: '',
    contentField: '',
    showForm: false
  }),
  methods: {
    submitComment() {
      console.log({name: this.nameField, content: this.contentField})
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