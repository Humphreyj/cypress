<script setup>
import { usePosts } from "@/stores/postsStore";
const props = defineProps({
  post: Object,
});
const { deletePost } = usePosts();
</script>

<template>
  <div key="{post.id}" data-cy="{`post-${post.id}`}" class="post-container">
    <h3 :data-cy="`post-title-${post.id}`" class="post-title">
      {{ props.post.title }}
    </h3>
    <p class="post-content" :data-cy="`post-content-${post.id}`">
      {{ props.post.content }}
    </p>
    <div class="post-details" :data-cy="`post-details`">
      <p class="post-author" :data-cy="`post-author-${post.id}`">
        By: {{ props.post.author }}
      </p>
      <p class="post-detail" :data-cy="`post-created-date-${post.id}`">
        {{ new Date(props.post.created_at).toLocaleDateString() }}
      </p>
    </div>

    <button
      class="delete-post"
      @click="deletePost(post.id)"
      :data-cy="`delete-post-${post.id}`"
    >
      Delete Post
    </button>
  </div>
</template>

<style lang="scss">
.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgb(0, 0, 0);
  margin: 1rem auto;
  width: 85%;
  max-width: 70rem;
  padding: 1rem;
  position: relative;

  .post-title {
    font-size: 2rem;
    margin: 0;
  }
  .post-content {
    font-size: 1.8rem;
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }

  .post-details {
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    max-width: 30rem;
    .post-detail {
      font-size: 1.6rem;
    }
    .post-author {
      font-size: 1.6rem;
    }
  }
  .delete-post {
    position: absolute;
    bottom: 0.2rem;
  }
}
</style>
