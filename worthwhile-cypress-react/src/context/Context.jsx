import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import jwt_decode from "jwt-decode";
export const MainContext = createContext();

const Context = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, [isAuthenticated]);

  const authenticateToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
      let tokenExpiration = jwt_decode(token).exp;
      let dateNow = new Date();

      if (tokenExpiration < dateNow.getTime() / 1000) {
        console.log("Token has expired.");
        setIsAuthenticated(false);
      } else {
        console.log("Token is authenticated.");
        setIsAuthenticated(true);
      }
    } else {
      console.log("No token at all.");
      setIsAuthenticated(false);
    }
  };
  const login = (credentials, from) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/auth/login`, credentials)
      .then((res) => {
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        authenticateToken();
        navigate(from);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  const logout = () => {
    setIsAuthenticated(null);
    setUser({});
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const [taskList, setTaskList] = useState([
    {
      id: 0,
      title: "Get Pizza",
      complete: false,
    },
    {
      id: 1,
      title: "Eat Pizza",
      complete: false,
    },
  ]);

  const getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/posts/`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitNewPost = (newPost, getPosts) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/posts/`, newPost)
      .then((res) => {
        console.log(res.data);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId) => {
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

  return (
    <MainContext.Provider
      value={{
        user: user,
        taskList: taskList,
        setTaskList: setTaskList,
        login: login,
        logout: logout,
        authenticateToken: authenticateToken,
        isAuthenticated: isAuthenticated,
        posts: posts,
        setPosts: setPosts,
        getPosts: getPosts,
        submitNewPost: submitNewPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
