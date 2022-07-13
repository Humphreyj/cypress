const express = require("express");
const posts = require("../data/posts");
const router = express.Router();
const {
  getAllPosts,
  addNewPost,
  getUsernameById,
  deletePost,
} = require("../models/posts_model");

router.get("/", async (req, res) => {
  try {
    const posts = await getAllPosts();
    const postsCopy = [...posts];
    for (let post of postsCopy) {
      let username = await getUsernameById(post.author);
      post.author = username;
    }
    res.status(200).json(postsCopy);
  } catch (error) {
    res.status(500).json({ message: "Posts could not be retrieved" });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = req.body;
    let result = await addNewPost(post);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send("There was an issue adding your post.");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await deletePost(req.params.id);
    res.status(204).json({ data: "Your Item was Deleted." });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
