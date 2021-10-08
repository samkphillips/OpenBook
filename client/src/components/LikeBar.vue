<template>
  <div class="options-list">
    <div :class="myLikes - myDislikes >= 0 ? 'tile high' : 'tile low'">
      <h5>{{ myLikes - myDislikes }}</h5>
    </div>
    <div class="tile likes" @click="handleLike">
      <h3>👍</h3>
    </div>
    <div class="tile dislikes" @click="handleDislike">
      <h3>👎</h3>
    </div>
  </div>
</template>

<script>
import { UpdatePost } from '../services/posts'
import { UpdateComment } from '../services/comments'

export default {
  name: 'LikeBar',
  data: () => ({
    myLikes: 0,
    myDislikes: 0
  }),
  props: {
    likes: Number,
    dislikes: Number,
    parentType: String,
    parentId: Number
  },
  mounted() {
    this.myLikes = this.likes
    this.myDislikes = this.dislikes
  },
  methods: {
    async handleLike() {
      if (this.parentType === "post") {
        await UpdatePost(this.parentId, {"like": this.myLikes + 1})
        this.myLikes++
      } else if (this.parentType === "comment") {
        await UpdateComment(this.parentId, {"like": this.myLikes + 1})
        this.myLikes++
      }
    },
    async handleDislike() {
      if (this.parentType === "post") {
        await UpdatePost(this.parentId, {"dislike": this.myDislikes + 1})
        this.myDislikes++
      } else if (this.parentType === "comment") {
        await UpdateComment(this.parentId, {"dislike": this.myDislikes + 1})
        this.myDislikes++
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.options-list {
  display: flex;
  flex-direction: row;
}

.tile {
  width: 30px;
  height: 30px;
  margin: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.high {
  background-color: green;
  color: white;
}

.low {
  background-color: red;
  color: white;
}

.likes {
  background-color: green;
}

.dislikes {
  background-color: red;
}
</style>