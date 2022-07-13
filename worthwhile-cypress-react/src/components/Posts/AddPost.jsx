import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
//styles
import scss from "./posts.module.scss";

const AddPost = ({ toggle }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, submitNewPost, getPosts } =
    useContext(MainContext);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: user.id,
    created_at: new Date(Date.now()).toISOString(),
  });
  const changeHandler = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const clearInputs = () => {
    setNewPost({
      title: "",
      content: "",
      author: user.id,
      created_at: new Date(Date.now()).toISOString(),
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    clearInputs();
    submitNewPost(newPost, getPosts);
    toggle();
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <div data-cy="add-post-container" className={scss["add-post-container"]}>
      <h3 className="section-title">Add a new post</h3>
      <form
        className={scss["new-post-form"]}
        data-cy="new-post-form"
        onSubmit={submitHandler}
      >
        <div className={scss["input-container"]}>
          <input
            type="text"
            placeholder="New post title"
            name="title"
            value={newPost.title}
            onChange={changeHandler}
            className="text-input"
            data-cy="post-title-input"
          />
        </div>

        <div className={scss["input-container"]}>
          <textarea
            type="text"
            placeholder="New post content"
            name="content"
            value={newPost.content}
            onChange={changeHandler}
            className="text-input"
            data-cy="post-content-input"
          />
        </div>
        <button
          className="button-cancel"
          data-cy="cancel-post"
          onClick={toggle}
        >
          Cancel
        </button>
        <button className="button-submit" data-cy="submit-post">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
