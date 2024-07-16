import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">SSB</div>
      <nav className="nav">
        <ul className="nav-list">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/news" label="News" />
          <NavItem to="/donation" label="Donation" />
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <li className="nav-item">
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default Header;
