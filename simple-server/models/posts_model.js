const db = require("../db/dbConfig");

const getAllPosts = () => {
  try {
    return db("posts").select("*");
  } catch (error) {
    console.log(error);
  }
};

const addNewPost = async (newPost) => {
  try {
    let result = await db("posts").insert(newPost).returning("id");

    return result[0];
  } catch (error) {
    console.log(error);
  }
};

const getUsernameById = async (id) => {
  try {
    let result = await db("users").select("*").where({ id }).first();
    return result.username;
  } catch (error) {
    console.log(err);
  }
};

async function deletePost(id) {
  try {
    return await db("posts").where({ id }).del();
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAllPosts,
  addNewPost,
  getUsernameById,
  deletePost,
};
