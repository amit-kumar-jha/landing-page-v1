import React from "react";
import "../styles/Footer.css";
import { Fb, FooterLogo, Insta, LinkedIn } from "../Images";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icon-data ">
          <div className="footer-logo">
            <img src={FooterLogo} alt="Logo" />
          </div>
          <div>
            <nav className="footer-links">
              <a href="#">FAQ</a>
              <a href="#">Privacy</a>
              <a href="#">Support</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
        <div className="footer-icons">
          <a href="#">
            <img src={Fb} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Central Texas Fly Fishing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
