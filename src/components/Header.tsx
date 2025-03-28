import React, { useState } from "react";
import "../styles/Header.css";
import { Logo } from "../Images";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <img src={Logo} alt="Central Texas Fly Fishing" />
          <span className="header-title">Central Texas Fly Fishing</span>
        </div>
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
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
