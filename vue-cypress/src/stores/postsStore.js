import { defineStore } from "pinia";
import axios from "axios";

export const usePosts = defineStore({
  id: "posts",
  state: () => ({
    posts: [],
  }),
  getters: {},
  actions: {
    getAllPosts() {
      axios
        .get(`http://localhost:3030/api/posts`)
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitNewPost(newPost) {
      axios
        .post(`http://localhost:3030/api/posts/`, newPost)
        .then((res) => {
          console.log(res);
          this.getAllPosts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletePost(postId) {
      axios
        .delete(`http://localhost:3030/api/posts/${postId}`)
        .then((res) => {
          console.log(res);
          this.getAllPosts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
