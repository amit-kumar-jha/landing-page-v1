import React, { useState } from "react";
import "../../styles/FeaturedOptions.css";
import { Down, Up } from "../../Images";
import { featuredData } from "../../data/featureData";

const DesktopFeatureOptions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="full-width-accordion">
        <div className="title">Featured options</div>
        <div className="accordion-container">
          {featuredData?.map((item, index) => (
            <div>
              <div
                key={index}
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="accordion-title">
                  <div className="accordion-title-text">{item?.title}</div>
                  <div className="" style={{ textAlign: "center" }}>
                    {activeIndex === index ? (
                      <img src={Up} alt="Up" />
                    ) : (
                      <img src={Down} alt="Down" />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <div>
                      {item.image && (
                        <img src={item?.image} alt={item?.title} />
                      )}
                    </div>

                    <div className="accordion-struc">
                      <div className="border-small" />
                      <div className="accordion-data">
                        <div className="accordion-data-title">
                          {item?.title}
                        </div>
                        <div className="accordion-data-para">
                          {item?.description}
                        </div>
                        <button className="learn-more">Learn More</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {activeIndex !== index && <div className="border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopFeatureOptions;
