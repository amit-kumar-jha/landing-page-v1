import React from "react";
import "../styles/Footer.css";
import { Fb, FooterLogo, Insta, LinkedIn } from "../Images";

// Footer Navigation Data
const footerNav = [
  { name: "FAQ", url: "/faq" },
  { name: "Privacy", url: "/privacy" },
  { name: "Support", url: "/support" },
  { name: "Contact", url: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icon-data">
          <div className="footer-logo">
            <img src={FooterLogo} alt="Logo" />
          </div>
          <nav className="footer-links">
            {footerNav.map((item, index) => (
              <a key={index} href={item.url}>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-icons">
          <a href="#">
            <img src={Fb} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="LinkedIn" />
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
