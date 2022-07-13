describe("Posts interaction", () => {
  const username = "admin";
  const password = "admin123!";
  let token;
  let postId;

  beforeEach(() => {
    cy.login(username, password).then((res) => {
      token = res.body.token;
      window.localStorage.setItem("token", token);
    });
  }); //before each
  it("Adds and Deletes a post", () => {
    let newPost = {
      title: "This is new",
      content: "This is a new post",
      author: 199,
      created_at: new Date(Date.now()).toISOString(),
    };
    cy.request("POST", "http://localhost:3030/api/posts", newPost).then(
      (res) => {
        postId = res.body.id;
        cy.visit("/posts");
        cy.getElement(`post-title-${postId}`).should(
          "have.text",
          newPost.title
        );
        cy.getElement(`post-content-${postId}`).should(
          "have.text",
          newPost.content
        );
        cy.getElement(`post-author-${postId}`).should("exist");
        cy.getElement(`delete-post-${postId}`).should("exist");
        cy.getElement(`delete-post-${postId}`).click();
        cy.getElement(`post-title-${postId}`).should("not.exist");
        cy.getElement(`delete-post-${postId}`).should("not.exist");
      }
    );
  });
});
