import React, { useContext } from "react";
import { MainContext } from "../../context/Context";
//styles
import scss from "./posts.module.scss";

export default function Post({ post }) {
  const { user, deletePost, getPosts } = useContext(MainContext);
  return (
    <div
      key={post.id}
      data-cy={`post-${post.id}`}
      className={scss["post-container"]}
    >
      <h3 data-cy={`post-title-${post.id}`} className={scss["post-title"]}>
        {post.title}
      </h3>
      <p className={scss["post-content"]} data-cy={`post-content-${post.id}`}>
        {post.content}
      </p>
      <div className={scss["post-details"]} data-cy="post-details">
        <p className={scss["post-detail"]} data-cy={`post-author-${post.id}`}>
          By: {post.author}
        </p>
        <p
          className={scss["post-detail"]}
          data-cy={`post-created-date-${post.id}`}
        >
          {new Date(post.created_at).toLocaleDateString()}
        </p>
      </div>

      <button
        className="delete-post"
        data-cy={`delete-post-${post.id}`}
        onClick={() => deletePost(post.id, getPosts)}
      >
        Delete Post
      </button>
    </div>
  );
}
