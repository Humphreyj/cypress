<script setup>
import { RouterLink } from "vue-router";
import { useAuth } from "@/stores/authStore";
import { storeToRefs } from "pinia";
const { isAuthenticated } = storeToRefs(useAuth());
</script>

<template>
  <header class="header" data-cy="header">
    <h2 class="header-title" data-cy="header-title">Worthwhile Cypress</h2>
    <p class="header-subtext" data-cy="header-subtext">
      Exploring best practices for Cypress testing.
    </p>
    <nav class="navigation" data-cy="navigation">
      <RouterLink class="nav-link" data-cy="navigate-home" to="/">
        Home
      </RouterLink>

      <RouterLink
        v-if="!isAuthenticated"
        class="nav-link"
        data-cy="navigate-login"
        to="/login"
      >
        Login
      </RouterLink>

      <RouterLink
        v-if="isAuthenticated"
        class="nav-link"
        data-cy="navigate-todo"
        to="/tasks"
      >
        Todo
      </RouterLink>

      <RouterLink
        v-if="isAuthenticated"
        class="nav-link"
        data-cy="navigate-posts"
        to="/posts"
      >
        Posts
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  .header-title {
    font-size: 3rem;
    color: black;
    width: 50%;
    margin: 2rem auto;
  }
  .header-subtext {
    font-size: 2rem;
  }
  .action-button {
    background-color: dodgerblue;
    color: white;
    padding: 1.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .toggle-todo {
    background-color: rgb(15, 11, 232);
    color: white;
    padding: 1.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    max-width: 50rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    border: 1px solid black;
    padding: 0.5rem 0;
    position: relative;
    .nav-link {
      color: rgb(0, 0, 0);
      font-size: 1.8rem;
      text-decoration: none;
      position: relative;
      &:hover {
        color: rgb(15, 11, 232);
        top: 0.2rem;
      }
    }
    .protected-routes {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
  }
}
</style>
