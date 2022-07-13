import axios from "axios";
export const getPosts = (setPosts) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND}/api/posts/`)
    .then((res) => {
      setPosts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const submitNewPost = (newPost, getPosts) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND}/api/posts/`, newPost)
    .then((res) => {
      console.log(res);
      getPosts();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePost = (postId, getPosts) => {
  axios
    .delete(`${process.env.REACT_APP_BACKEND}/api/posts/${postId}`)
    .then((res) => {
      console.log(res);
      getPosts();
    })
    .catch((err) => {
      console.log(err);
    });
};
