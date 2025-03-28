import React from "react";
import "../../styles/MobileFeaturedOptions.css";
import { featuredDataMobile } from "../../data/featuredDataMobile";

const MobileFeaturedOptions: React.FC = () => {
  return (
    <section className="mobile-featured">
      <h2 className="title">Featured options</h2>
      <div className="options-container">
        {featuredDataMobile.map((item, index) => (
          <div
            key={index}
            className="option-card"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              mixBlendMode: "luminosity",
            }}
          >
            <div className="option-content">
              <div className="option-content-text">{item.title}</div>
              <div className="option-content-p">{item.description}</div>
              <button className="learn-more">Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileFeaturedOptions;
