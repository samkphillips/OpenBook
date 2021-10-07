<template>
  <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/posts">Posts</router-link>
    <router-link class="link" to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.link {
  margin: 0 10px;
}
</style>
