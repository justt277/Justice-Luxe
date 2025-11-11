import React from "react";
import './PageStyle.css';
import Slideshow from "./slideshow";

function Home() {
  return (
    <div className="home-section">
      <Slideshow /> {/* Background slideshow */}
      <div className="home-text">
        <h1 className="text-warning">
          Welcome to my Store, <strong>JUSTICE</strong>
        </h1>
        <p className="home-intro">
          “Step into a world where style meets <span>sophistication</span>. <strong>JUSTICE LUXE</strong> brings you exclusive fashion and streetwear designed to make a statement.”
        </p>
      </div>
    </div>
  );
}

export default Home;
