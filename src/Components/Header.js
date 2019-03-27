import React from "react";
import Avatar from "@atlaskit/avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">Super ERP!</Link>
        <Link to="/badges">
          <Avatar size="large" git />
        </Link>
      </div>
    </header>
  );
};

export default Header;
