/// <reference types='cypress' />

describe("Navigation works as intended.",  () => {
    const username = "testman";
  const password = "test123!";
    context("Not logged in", () => {
        it("Hides protected routes when not logged in", () => {
            cy.visit('/')
            cy.getElement("navigate-posts").should('not.exist')
            cy.getElement("navigate-todo").should('not.exist')
            cy.getElement("navigate-login").click()
            cy.url().should('include', '/login')
        })
      
    })
    context("Logged in through API", () => {
        it("Shows protected routes", () => {
            cy.login(username, password).then(res => {
                window.localStorage.setItem('token', res.body.token)
                cy.visit('/')
                cy.getElement("navigate-todo").should('exist')
                cy.getElement("navigate-posts").should('exist')
            })
        })
    })
})