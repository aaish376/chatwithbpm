import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> <Link to="/">ChatWithBPM</Link></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload BPM</Link>
        <Link to="/chat">Chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;
