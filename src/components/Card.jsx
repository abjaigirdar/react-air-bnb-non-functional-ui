import React from "react";
import Star from "../assets/Star.png";
import CardImage1 from "../assets/image_12.png";
import CardImage2 from "../assets/wedding-photography.png";
import CardImage3 from "../assets/mountain-bike.png";

function Card() {
  return (
    <section className="card">
      <div className="card--div">
        <img src={CardImage1} className="card--image"/>
        <div className="card--star">
          <img src={Star} className="star" />
          <h3 className="card--text--star">5.0</h3>
          <h3 className="card--text--fade">(6) .USA</h3>
        </div>
        <p className="card--text--name">Life lessons with Katie Zaferes</p>
        <div className="card--text--bottom">
          <p className="card--text--price">From $136</p>
          <p className="card--text--name">/ Person</p>
        </div>
      </div>
      <div className="card--div">
        <img src={CardImage2} className="card--image"/>
        <div className="card--star">
          <img src={Star} className="star" />
          <h3 className="card--text--star">5.0</h3>
          <h3 className="card--text--fade">(30) .USA</h3>
        </div>
        <p className="card--text--name">Learn wedding photography</p>
        <div className="card--text--bottom">
          <p className="card--text--price">From $125</p>
          <p className="card--text--name">/ Person</p>
        </div>
      </div>
      <div className="card--div">
        <img src={CardImage3} className="card--image"/>
        <div className="card--star">
          <img src={Star} className="star" />
          <h3 className="card--text--star">4.8</h3>
          <h3 className="card--text--fade">(2) .USA</h3>
        </div>
        <p className="card--text--name">Group Mountain Biking</p>
        <div className="card--text--bottom">
          <p className="card--text--price">From $50</p>
          <p className="card--text--name">/ Person</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
