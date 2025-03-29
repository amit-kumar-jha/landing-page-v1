import React from "react";
import "../styles/MemberStories.css";
import { storiesData } from "../data/storiesData";

const MemberStories: React.FC = () => {
  return (
    <section className="member-stories">
      <div className="title">Member stories</div>
      <div className="stories-container mobile">
        {storiesData?.map((story, index) => (
          <div key={index} className="mobile-card">
            <div className="border-line" />
            <div className="story-card-text">{story?.title}</div>
            <div key={index} className="story-card">
              <div style={{ display: "block" }}>
                <img src={story?.image} alt={story?.title} width={"100%"} />
                <button className="read-more">Read more</button>
              </div>
              <div className="cardData">
                <div className="story-card-para">{story?.description}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-line" />
      </div>
      <div className="desktop">
        <div className="stories-container">
          {storiesData?.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story?.image} alt={story?.title} />
              <div className="cardData">
                <div className="story-card-text">{story?.title}</div>
                <div className="story-card-para">{story?.description}</div>
                <button className="read-more">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberStories;
