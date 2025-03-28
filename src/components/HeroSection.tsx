import React from "react";
import "../styles/Hero.css";
import { Hero } from "../Images";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content-text">Central Texas Fly Fishing</div>
          <div className="hero-content-para ">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </div>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="Fly Fishing" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
