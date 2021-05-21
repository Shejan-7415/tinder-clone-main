import { IconButton } from "@material-ui/core";
import { Forum, Person } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/account">
        <IconButton>
          <Person fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/74/TinderLogo-2017.svg"
          alt=""
          className="header__logo"
        />
      </Link>
      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
