import React from "react";

import video from "../assets/video/paperwork.mp4";

import "./home.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
      <div className="hero-content">
        <h1>FRESH PRINTS DAILY.</h1>

        <a class="button-quote" href="/quote/">
          GET A QUOTE
        </a>
        <div class="hero-arrow"></div>
      </div>
    </div>
  );
}
