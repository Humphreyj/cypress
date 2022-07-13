<script setup></script>

<template>
  <header class="top-bar" data-cy="top-bar">
    <section class="logo-section">
      <div class="placeholder-hamburger"></div>
      <div class="logo-placeholder-container">
        <div class="logo-placeholder"></div>
        <h4 class="company-name">Logo Placeholder</h4>
      </div>
    </section>

    <section class="center-section">
      <h2 class="page-title" data-cy="page-title">Page Title</h2>
    </section>

    <section class="user-section">
      <div class="user-img">
        <img src="" alt="" />
      </div>
      <div class="user-menu-dropdown">
        <p class="greeting">Welcome</p>
        <p class="user-name">Admin</p>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
.top-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0rem;
  left: 0rem;
  margin-top: 0;
  padding: 0 2rem;
  background-color: $top-bar-background;
  color: $top-bar-text-primary;
  width: 100%;
  max-width: 140rem;
  .logo-section {
    display: flex;
    justify-content: space-between;
    .placeholder-hamburger {
      height: 2.5rem;
      width: 2.5rem;
      background-color: $button-primary;
    }
    .logo-placeholder-container {
      display: flex;
      justify-content: space-between;
      .logo-placeholder {
        height: 2.5rem;
        width: 2.5rem;
        background-color: $button-primary;
        border-radius: 50%;
      }
      .company-name {
      }
    }
  }
}
</style>
