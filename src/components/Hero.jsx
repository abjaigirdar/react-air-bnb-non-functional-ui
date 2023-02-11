import React from "react";
function Hero() {
  return (
    <section className="hero">
      <img src="../assets/hero_image.png" className="hero--photo" />
      <div className="hero--text--div">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}

export default Hero;
