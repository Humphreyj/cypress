import React, { useEffect, useContext } from "react";
import { MainContext } from "../../context/Context";
import { Routes, Route } from "react-router-dom";
//components
import Login from "../Authentication/Login";
import TodoList from "../TodoList/TodoList";
import PrivateRoute from "../Authentication/PrivateRoute";
import Home from "../Home/Home";
import Posts from "../Posts/Posts";

export default function Main() {
  const { authenticateToken, isAuthenticated, logout } =
    useContext(MainContext);
  useEffect(() => {
    authenticateToken();
    //eslint-disable-next-line
  }, []);

  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
      {isAuthenticated ? (
        <button data-cy="logout" onClick={logout} className="button-logout">
          Logout
        </button>
      ) : null}
    </section>
  );
}
