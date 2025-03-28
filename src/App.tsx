import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedOptions from "./components/FeaturedOption/FeatureOptions";
import MemberStories from "./components/MemberStories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />

      <FeaturedOptions />
      <MemberStories />
      <Footer />
    </div>
  );
}

export default App;
