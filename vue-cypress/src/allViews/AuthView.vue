<script setup>
import { useAuth } from "../stores/authStore";
const credentials = {
  username: "",
  password: "",
};
const { login } = useAuth();
const handleLogin = (e, credentials) => {
  e.preventDefault();
  login(credentials);
};
</script>
<template>
  <div class="login-container">
    <h3 class="login-title">Log in to see things.</h3>
    <form class="login-form">
      <input
        type="text"
        name="username"
        data-cy="username-input"
        v-model="credentials.username"
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        data-cy="password-input"
        v-model="credentials.password"
        placeholder="password"
      />
      <button
        @click="handleLogin($event, credentials)"
        data-cy="login-submit"
        class="button-login"
      >
        Login
      </button>
    </form>
  </div>
</template>

<style lang="scss">
.login-container {
  // @include flexbox(column,center, flex-start);
  border: 1px solid black;
  width: 60%;
  max-width: 25rem;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0.5rem 0;

  .login-title {
    font-weight: 600;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    align-items: center;
  }
}
</style>
