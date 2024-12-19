import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-nav">
        <Link to="com" className="header-item">
          Community
        </Link>
        <Link to="dash" className="header-item">
          DashBoard
        </Link>
        <Link to="my" className="header-item">
          MyPage
        </Link>
      </div>
    </header>
  );
};

export default Header;
