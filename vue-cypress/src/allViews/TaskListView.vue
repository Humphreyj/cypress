<script setup>
import Task from "@/components/TaskList/Task.vue";
import { useTasks } from "../stores/taskListStore";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const { submitTask, completeTask } = useTasks();
// functions can be used from a Pinia store like this
const { tasks } = storeToRefs(useTasks());
// But state properties and getters will
// lose their reactivity if destructured normally
const newTask = reactive();
</script>

<template>
  <div data-cy="todo-list" class="task-list-container">
    <div class="add-task">
      <input
        data-cy="new-task-input"
        type="text"
        placeholder="Add task here"
        class="new-task-input"
      />
      <div class="add-task-buttons">
        <button class="clear">clear</button>
        <button
          data-cy="add-new-task"
          @click="submitTask()"
          class="add-task-button"
        >
          submit
        </button>
      </div>
    </div>
    <section class="task-list">
      <Task v-for="task in tasks" :task="task" :complete="completeTask">
        {{ task.title }}
      </Task>
    </section>
  </div>
</template>

<style lang="scss">
.task-list-container {
  position: relative;
  min-height: 15rem;
  border: 2px inset black;
  border-radius: 0.4rem;
  padding: 1rem 0.5rem;
  width: 45%;
  margin: 0 auto;
  max-width: 40rem;
  .add-task {
    .add-task-buttons {
      width: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .new-task-input {
      margin: 1rem auto;
    }
    .add-task-button {
    }
  }
}
</style>
