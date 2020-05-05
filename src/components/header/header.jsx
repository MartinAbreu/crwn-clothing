import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.scss";
import { auth } from "../../firebase/firebase.utils";

function welcomeUser(e) {
  if ((e = true)) {
    return <p>Hi, {e.substr(0, e.indexOf(" "))}</p>;
  } else {
    return <p>Test</p>;
  }
}

const Header = ({ user }) => (
  <div className="header">
    <Link to="/" className="header-left">
      <Logo className="logo" />
    </Link>
    <div className="header-right">
      <Link className="links" to="/shop">
        Shop
      </Link>
      <Link className="links" to="/contact">
        Contact
      </Link>
      {user ? (
        <div>
          <span className="welcomeUser">
            Hi, {user.substr(0, user.indexOf(" "))}
          </span>
          <div
            style={{ cursor: "pointer" }}
            className="links"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </div>
        </div>
      ) : (
        <Link className="links" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
