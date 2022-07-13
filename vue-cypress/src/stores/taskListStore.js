import { defineStore } from "pinia";

export const useTasks = defineStore({
  id: "tasklist",
  state: () => ({
    tasks: [
      {
        id: 0,
        title: "Get Pizza",
        complete: false,
      },
      {
        id: 1,
        title: "Eat Pizza",
        complete: false,
      },
    ],
  }),
  getters: {},
  actions: {
    submitTask(task) {
      this.tasks = [...this.tasks, task];
    },
    completeTask(task) {
      console.log(task);
      this.tasks[task.id].complete = !newTaskList[task.id].complete;
    },
    deleteTask(task) {
      const newList = taskList.filter((item) => item.title !== task.title);
      this.tasks = newList;
    },
  },
});
