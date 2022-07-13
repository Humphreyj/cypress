import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context/Context";
//styles
import scss from "./header.module.scss";
export default function Header() {
  const { isAuthenticated } = useContext(MainContext);

  return (
    <header data-cy="header" className={scss["header"]}>
      <h2 data-cy="header-title" className={scss["header-title"]}>
        Worthwhile Cypress
      </h2>
      <p data-cy="header-subtext" className={scss["header-subtext"]}>
        Exploring best practices for Cypress testing.
      </p>
      <nav data-cy="navigation" className={scss["navigation"]}>
        <NavLink className={scss["nav-link"]} data-cy="navigate-home" to="/">
          Home
        </NavLink>

        {!isAuthenticated ? (
          <NavLink
          className={scss["nav-link"]}
          data-cy="navigate-login"
          to="/login"
        >
          Login
        </NavLink>
        ) : null}

        {isAuthenticated ? (
          <NavLink
            className={scss["nav-link"]}
            data-cy="navigate-todo"
            to="/todo"
          >
            Todo
          </NavLink>
        ) : null}

        {isAuthenticated ? (
          <NavLink
            className={scss["nav-link"]}
            data-cy="navigate-posts"
            to="/posts"
          >
            Posts
          </NavLink>
        ) : null}
      </nav>
    </header>
  );
}
