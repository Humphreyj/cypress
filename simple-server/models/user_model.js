const db = require("../db/dbConfig");
const bcrypt = require("bcrypt");


async function register(user) {
  try {
    user.password = await bcrypt.hash(user.password, 14);
    console.log(user.password)
    // user.confirm_password = await bcrypt.hash(user.confirm_password,14);
    
  } catch (err) {
    console.log(err);
  }
}

async function findByEmail(email) {
  try {
    if (email) {
      const user = await db("users").select("*").where(email).first();
      return user;
    }
  } catch (err) {
    // console.log(err);
  }
}

async function findByUsername(username) {
  try {
    const user = await db("users").select("*").where(username).first();
    return user;
  } catch (err) {
    console.log(err);
  }
}

function findById(id) {
  try {
    return db("users").select("*").where(id).first();
  } catch (err) {
    console.log(err);
  }
}

async function update(id, changes) {
  if (changes) {
    return db("users")
      .where({ id })
      .update(changes)
      .catch((err) => {
        console.log(err);
      });
  }
}

function filterBy(filter) {
  return db("users").where(filter).first();
}

module.exports = {
  register,
  findByEmail,
  findByUsername,
  findById,
  update,
  filterBy,
  filterBy,
};
