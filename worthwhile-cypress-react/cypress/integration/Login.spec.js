/// <reference types="cypress"/>

describe("Logging in - Basic Auth", () => {
  const username = "testman";
  const password = "test123!";
  let token;

  context("cy.request", () => {
    it("Gets jwt from API", () => {
      cy.login(username, password).then((res) => {
        token = res.body.token;
        window.localStorage.setItem("token", token);
        const resToken = window.localStorage.getItem("token");
        cy.wrap(resToken).should("exist");
      });
    });
  });

  context("cy.visit", () => {
    it("Logs in prgrammatically.", () => {
      cy.login(username, password).then((res) => {
        token = res.body.token;
        window.localStorage.setItem("token", token);
        cy.visit("/todo");
        cy.url().should("include", "/todo");
        // cy.visit("/posts");
        // cy.url().should("include", "/posts");
      });
    });

    it("Logs in with UI, visits protected route", () => {
      cy.visit("/login");
      cy.loginWithUi(username, password).then(() => {
        cy.get('[data-cy="navigate-todo"]').click();
        cy.url().should("include", "/todo");
      });
    });
  });
});
