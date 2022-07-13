<script setup>
import { useTasks } from "@/stores/taskListStore";
const { deleteTask } = useTasks();
const props = defineProps({
  task: Object,
  complete: Function,
});
</script>

<template>
  <div class="task-item">
    <div class="task-title-container">
      <h6 :data-cy="`task-${task.id}`" class="task-title">
        {{ props.task.title }}
      </h6>
      <input
        type="checkbox"
        name="complete-task"
        :data-cy="`complete-task-${task.id}`"
        class="complete-task"
        @change="props.complete"
        v-model="props.task.complete"
      />
    </div>
    <div class="task-item-buttons">
      <button
        :data-cy="`delete-task-${task.id}`"
        @click="deleteTask(task.id)"
        class="delete-task"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.task-item {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 8rem;
  margin: 1rem 0;
  border: 1px inset black;
  font-size: 2rem;
  .task-title-container {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    .task-title {
      margin: 0;
      margin-bottom: 1rem;
    }
  }
  .task-item-buttons {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
.task-item-complete {
  @extend .task-item;
  color: black;
  text-shadow: 0.2rem 0.2rem 0.3rem rgb(0, 221, 0);
  font-weight: 600;
}
</style>
