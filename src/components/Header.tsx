import React, { useState } from "react";
import "../styles/Header.css";
import { Logo } from "../Images";

const mainNav = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>(
    window.location.pathname
  );

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <img src={Logo} alt="Central Texas Fly Fishing" />
          <span className="header-title">Central Texas Fly Fishing</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {mainNav.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className={`nav-link ${
                    activePath === item.url ? "active" : ""
                  }`}
                  onClick={() => setActivePath(item.url)}
                >
                  {item.name}
                </a>
              </li>
            ))}
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
