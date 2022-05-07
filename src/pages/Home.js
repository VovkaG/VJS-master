import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hp.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> VJS Analyzer </h1>
      </div>
    </div>
  );
}

export default Home;
