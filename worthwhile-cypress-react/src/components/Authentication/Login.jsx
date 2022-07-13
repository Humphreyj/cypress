import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
//styles
import scss from "./login.module.scss";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  let from = state ? state.from.pathname : "/";
  //
  const { login, authenticateToken, isAuthenticated } = useContext(MainContext);
  const [loginCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    setCredentials({ ...loginCredentials, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    login(loginCredentials, from);
    setCredentials({
      username: "",
      password: "",
    });
  };
  useEffect(() => {
    authenticateToken();
    if (isAuthenticated) {
      navigate(from);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div className={scss["login-container"]}>
      <h3 className={scss["login-title"]}>Log in to see things.</h3>
      <form onSubmit={submitHandler} className={scss["login-form"]}>
        <input
          type="text"
          name="username"
          data-cy="username-input"
          value={loginCredentials.username}
          placeholder="username"
          className="text-input"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          data-cy="password-input"
          value={loginCredentials.password}
          className="text-input"
          onChange={changeHandler}
          placeholder="password"
        />
        <button data-cy="login-submit" className="button-login">
          Login
        </button>
      </form>
    </div>
  );
}
