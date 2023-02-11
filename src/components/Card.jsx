import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--div">
        <img src={`../assets/${props.coverImg}`} className="card--image" />
        <div className="card--star">
          <img src="../assets/Star.png" className="star" />
          <h3 className="card--text--star">{props.stats.rating}</h3>
          <h3 className="card--text--fade">({props.stats.reviewCount}) • </h3>
          <h3 className="card--text--fade">{props.location}</h3>
        </div>
        <p className="card--text--name">{props.title}</p>
        <div className="card--text--bottom">
          <p className="card--text--price">From ${props.price}</p>
          <p className="card--text--name">/ Person</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
