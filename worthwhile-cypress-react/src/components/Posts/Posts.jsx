import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../context/Context";
import Post from "./Post";
import AddPost from "./AddPost";
import Backdrop from "../UI/Backdrop/Backdrop";
//styles
import scss from "./posts.module.scss";

export default function Posts() {
  const { getPosts, posts, setPosts } = useContext(MainContext);
  const [addingNewPost, setAdding] = useState(false);
  const toggleNewPost = () => {
    setAdding(!addingNewPost);
  };
  useEffect(() => {
    getPosts(setPosts);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        data-cy="all-posts-container"
        className={scss["all-posts-container"]}
      >
        {posts.length ? (
          posts?.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ) : (
          <h3 className={scss["no-posts"]} data-cy="no-posts">
            There are no posts right now, dude.
          </h3>
        )}

        {addingNewPost ? <Backdrop /> : null}
        {addingNewPost && <AddPost toggle={toggleNewPost} />}
      </div>
      <button
        data-cy="add-post-toggle"
        className="button"
        onClick={toggleNewPost}
      >
        Add new post
      </button>
    </>
  );
}
