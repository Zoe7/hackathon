import React from "react";
import Avatar from "@atlaskit/avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">Super ERP!</Link>
        <Avatar size="large" src="C:/hackathon/src/assets/picture.jpeg" />
      </div>
    </header>
  );
};

export default Header;
