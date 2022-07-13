<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import { usePosts } from "@/stores/postsStore";
import { useAuth } from "@/stores/authStore";
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
const { getAllPosts } = usePosts();
const { authenticateToken, logout } = useAuth();
const { isAuthenticated } = storeToRefs(useAuth());
onBeforeMount(() => {
  getAllPosts();
  authenticateToken();
});
</script>

<template>
  <Header />

  <RouterView />

  <button
    data-cy="logout"
    v-if="isAuthenticated"
    @click="logout()"
    class="button-logout"
  >
    Logout
  </button>
</template>

<style lang="scss">
#app {
  width: 100%;
  padding: 0;
  text-align: center;
  .button-logout {
    position: fixed;
    bottom: 2rem;
  }
}
</style>
