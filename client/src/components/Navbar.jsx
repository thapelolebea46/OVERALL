import React from "react";
import "./Navbar.scss";
import logo from "./assets/logo.png"; // adjust this path to match your file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Masiyanda Guest House Logo" />
      </div>

      <div className="navbar-title">
        <h1>Masiyanda Guest House</h1>
      </div>
    </nav>
  );
};

export default Navbar;
