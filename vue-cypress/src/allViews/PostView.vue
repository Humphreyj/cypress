<script setup>
import Post from "@/components/Posts/Post.vue";
import { usePosts } from "@/stores/postsStore";
import { onBeforeMount, onMounted } from "vue";
const { getAllPosts, posts } = usePosts();
</script>

<template>
  <div class="all-posts-container" data-cy="all-posts-container">
    <h3 class="no-posts" data-cy="no-posts" v-if="posts.length === 0">
      There are no posts right now, dude.
    </h3>
    <div class="posts" v-else>
      <Post v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<style lang="scss"></style>
