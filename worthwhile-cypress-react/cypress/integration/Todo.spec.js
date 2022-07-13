/// <reference types="Cypress" />

describe("To-do Modal works correctly.", () => {
  const username = "testman";
  const password = "test123!";
  let token;

  it("Should load the page", () => {
    cy.visit("/");
  });
  it("Displays the action todo modal correctly.", () => {
    cy.login(username, password).then((res) => {
      token = res.body.token;
      window.localStorage.setItem("token", token);
      cy.visit("/");
      cy.get('[data-cy="navigate-todo"]').click();
      cy.url().should("include", "/todo");
    });
  });

  it("Starts with the correct tasks", () => {
    cy.get('[data-cy="task-0"]').should("have.text", "Get Pizza");

    cy.get('[data-cy="task-1"]').should("have.text", "Eat Pizza");
  });

  it("Adds a task correctly.", () => {
    cy.get('[data-cy="new-task-input"]').type("Clean Up Pizza");
    cy.get('[data-cy="add-new-task"]').click();

    cy.get('[data-cy="task-2"]').should("have.text", "Clean Up Pizza");
  });

  it("Completes a task correctly.", () => {
    let randomId = Math.floor(Math.random() * 3);
    let completeTask = cy.getElement(`complete-task-${randomId}`);
    completeTask.click();
    completeTask.should("be.checked");
  });

  it("Deletes a task correctly.", () => {
    let randomId = Math.floor(Math.random() * 3);

    cy.get(`[data-cy="delete-task-${randomId}"]`).click();
    cy.get(`[data-cy="task-${randomId}"]`).should("not.exist");
  });
});
