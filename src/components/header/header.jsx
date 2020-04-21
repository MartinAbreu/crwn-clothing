import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.scss";

const Header = () => (
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
    </div>
  </div>
);

export default Header;
