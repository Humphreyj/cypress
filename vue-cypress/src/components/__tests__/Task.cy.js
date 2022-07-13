import Task from "@/components/TaskList/Task.vue";
import { createTestingPinia } from "@pinia/testing";
import { useTasks } from "@/stores/taskListStore.js";
// import router from "@/router";

describe("Task Component", () => {
  const complete = (task) => {
    task.complete = !task.complete;
  };
  it("Gets tasks from Pinia store", () => {
    cy.mount(Task, {
      props: {
        task: {
          id: 1,
          title: "Eat Pizza",
          complete: false,
        },
        complete,
      },
      global: {
        plugins: [createTestingPinia({ createSpy: () => cy.spy() })],
      },
    });
    const useTask = useTasks();
    const tasks = useTask.tasks;
    expect(tasks).to.have.length(2);
  });
  it("Checks a box.", () => {
    cy.mount(Task, {
      props: {
        task: {
          id: 1,
          title: "Eat Pizza",
          complete: false,
        },
        complete,
      },
      global: {
        plugins: [createTestingPinia({ createSpy: () => cy.spy() })],
      },
    });
    cy.get(".complete-task").click();
    cy.get(".complete-task").should("be.checked");
  });
});
