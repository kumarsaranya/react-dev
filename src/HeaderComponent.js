import React from "react";
import { LOGO_URL } from "../utility/constants";
import { useState } from "react";
import { Link } from "react-router";
const HeaderComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  return (
    <div id="headerComponent">
      <img id="app-logo" src={LOGO_URL}></img>
      <h1> Food Order App</h1>
      <ul id="header-nav-items">
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-list">
          <Link to="/cart">Cart</Link>
        </li>
        <button
          className="loginBtnName"
          onClick={() => {
            loginBtnName === "Login"
              ? setLoginBtnName("Logout")
              : setLoginBtnName("Login");
          }}
        >
          {loginBtnName}
        </button>
      </ul>
    </div>
  );
};

export default HeaderComponent;
