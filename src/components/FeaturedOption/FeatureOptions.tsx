import React from "react";
import "../../styles/FeaturedOptions.css";

import MobileFeaturedOptions from "./MobileFeaturedOptions";
import DesktopFeatureOptions from "./DesktopFeatureOptions";

const FullScreenAccordion: React.FC = () => {
  return (
    <section>
      <div className="desktop">
        <DesktopFeatureOptions />
      </div>
      <div className="mobile">
        <MobileFeaturedOptions />
      </div>
    </section>
  );
};

export default FullScreenAccordion;
