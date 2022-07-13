import Post from "../Posts/Post.vue";
import { createTestingPinia } from "@pinia/testing";
import { usePosts } from "@/stores/postsStore.js";
import router from "@/router";

describe("Post Component", () => {
  const post = {
    id: 8000,
    title: "Posts and you",
    content:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex molestiae necessitatibus quis dignissimos optio, vero iste a voluptatibus nesciunt odit.",
    author: "The Postmaster",
    created_at: "2020-06-22T11:20:16.812Z",
  };

  const post_2 = {
    id: 8001,
    title: "Posts can be good too.",
    content:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex molestiae necessitatibus quis dignissimos optio, vero iste a voluptatibus nesciunt odit.",
    author: "The Postmaster",
    created_at: "2020-06-22T11:20:16.812Z",
  };
  it("It displays post 1", () => {
    cy.mount(Post, {
      props: {
        post: post,
      },
      global: {
        plugins: [createTestingPinia({ createSpy: () => cy.spy() }), router],
      },
    });

    cy.getElement(`post-title-${post.id}`).should("have.text", post.title);
    cy.getElement(`post-content-${post.id}`).should("have.text", post.content);
    cy.getElement(`post-author-${post.id}`).should(
      "have.text",
      ` By: ${post.author}`
    );
    cy.get(".delete-post")
      .click()
      .then(() => {
        console.log("Post was deleted");
      });
  });

  it("It deletes post.", () => {
    cy.mount(Post, {
      props: {
        post: post,
      },
      global: {
        plugins: [createTestingPinia({ createSpy: () => cy.spy() }), router],
      },
    });
    const usePost = usePosts();

    // const spy = cy.spy(usePost, "deletePost");
    usePost.deletePost(post_2.id);
    expect(usePost.deletePost).to.be.called;
  });
});
