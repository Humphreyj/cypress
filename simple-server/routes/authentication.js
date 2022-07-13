const express = require("express");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const bcrypt = require("bcrypt");
const router = express.Router();
const { findByUsername, findByEmail,register } = require("../models/user_model");

const generateToken = (username) => {
  const payload = {
    subject: username,
    username: username,
  };
  const options = {
    expiresIn: "2h",
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findByUsername({ username });
    if (user) {
      const passwordValid = await bcrypt.compare(password, user.password);
      if (passwordValid) {
        const token = generateToken(username);
        user.token = token;
        res.status(200).json({ user: user, token });
      } else {
        res
          .status(404)
          .json({ message: "Check your credentials and try again." });
      }
    } else {
      res.status(404).json({ message: "User could not be found." });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { email, username } = req.body;

    let user = await findByEmail({ email });

    let userName = await findByUsername({ username });

    if (user || userName) {
      return res.status(409).json({
        message:
          "There is an account associated with this email, please try logging in.",
      });
    } else {
      const newId = await register(req.body);
      let userData = { ...req.body };
      userData.id = newId;
      delete userData.password;
      delete userData.email;
      res.status(201).json(userData);
      return userData;
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
}); //Register new User

module.exports = router;
