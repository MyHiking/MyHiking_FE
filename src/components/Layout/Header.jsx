import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSign = () => {
    navigate("/sign");
  };

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
      <div className="header-profile">
        <button onClick={goToLogin}>Login</button>
        <button onClick={goToSign}>Signup</button>
      </div>
    </header>
  );
};

export default Header;
