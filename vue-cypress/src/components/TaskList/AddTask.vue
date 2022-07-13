<script setup>
// New task object
</script>

<template>
  <div class="add-task">
    <input
      data-cy="new-task-input"
      type="text"
      placeholder="Add task here"
      class="new-task-input"
    />
    <div class="add-task-buttons">
      <button class="clear">clear</button>
      <button data-cy="add-new-task" class="add-task-button">submit</button>
    </div>
  </div>
</template>
