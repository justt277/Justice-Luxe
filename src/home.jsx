import React from "react";
import './PageStyle.css';
import Slideshow from "./slideshow";

function Home() {
  return (
    <div className="home-page">
      {/* Left: Text */}
      <div className="home-text-container">
        <h1>
          Welcome to my Store, <strong>JUSTICE</strong>
        </h1>
        <p>
          “Step into a world where style meets <span>sophistication</span>. <strong>JUSTICE LUXE</strong> brings you exclusive fashion and streetwear designed to make a statement.”
        </p>
      </div>

      {/* Right: Slideshow */}
      <div className="home-slideshow">
        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
