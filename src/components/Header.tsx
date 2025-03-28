import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png"; // Add a logo in assets folder
import { Logo } from "../Images";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Central Texas Fly Fishing" />
          <span>Central Texas Fly Fishing</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
