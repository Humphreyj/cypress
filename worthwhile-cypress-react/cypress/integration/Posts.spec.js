/// <reference types="cypress"/>

describe("Posts Feed Works Correctly", () => {
  const username = "testman";
  const password = "test123!";
  let token;
  beforeEach(() => {
    cy.login(username, password).then((res) => {
      token = res.body.token;
      window.localStorage.setItem("token", token);
      cy.visit("/posts");
    });
  }); //before each

  it("renders posts with mock data", () => {
    cy.intercept("GET", "http://localhost:3030/api/posts", {
      fixture: "posts.json",
    }).as("posts");

    cy.wait("@posts").then((res) => {
      const mockPosts = res.response.body;
      mockPosts.forEach((post) => {
        cy.getElement(`post-title-${post.id}`).should("have.text", post.title);
        cy.getElement(`post-content-${post.id}`).should(
          "have.text",
          post.content
        );
      });
    });
  });

  it("renders posts from API", () => {
    let actualPosts;
    cy.request("GET", "http://localhost:3030/api/posts").then((res) => {
      actualPosts = res.body;
      for (let index in actualPosts) {
        let current = actualPosts[index];

        cy.getElement(`post-title-${current.id}`).should(
          "have.text",
          current.title
        );
        cy.getElement(`post-content-${current.id}`).should(
          "have.text",
          current.content
        );
      }
    });

    cy.getElement("all-posts-container").should("exist");
  });

  // it("Shows correct text when no posts", () => {
  //   let actualPosts;
  //   cy.request("GET", "http://localhost:3030/api/posts").then((res) => {
  //     actualPosts = res.body;
  //     for (let index in actualPosts) {
  //       let current = actualPosts[index];
  //       if (current) {
  //         cy.getElement(`post-title-${current.id}`).should(
  //           "have.text",
  //           current.title
  //         );
  //         cy.getElement(`post-content-${current.id}`).should(
  //           "have.text",
  //           current.content
  //         );
  //         cy.getElement(`delete-post-${current.id}`).click();
  //       }
  //     }
  //   });

  //   cy.getElement("no-posts").should("be.visible");
  // });
});
