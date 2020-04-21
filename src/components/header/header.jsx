import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="header-left">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
    <div className="header-right"></div>
  </div>
);

export default Header;
