Cypress.Commands.add("login", (username, password) => {
  cy.request({
    url: "http://localhost:3030/api/auth/login",
    method: "POST",
    auth: {
      username,
      password,
    },
    body: {
      username: username,
      password: password,
    },
  });
});

Cypress.Commands.add("loginWithUi", (username, password) => {
  cy.get('[data-cy="username-input"]').type(username);
  cy.get('[data-cy="password-input"]').type(password);
  cy.get('[data-cy="login-submit"]').click();
});

Cypress.Commands.add("getElement", (key) => {
  cy.get(`[data-cy=${key}]`);
});

Cypress.Commands.add("setLocalStorage", (key, value) => {
  cy.window().then((window) => {
    window.localStorage.setItem(key, value);
  });
});

Cypress.Commands.add("getLocalStorage", (key) => {
  cy.window().then((window) => {
    window.localStorage.getItem(key);
  });
});
