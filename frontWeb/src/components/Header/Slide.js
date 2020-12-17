import React from "react";

const Slide = ({ index, sliderImage, title, description }) => {
  if (index === 0) {
    return (
      <div
        class="carousel-item carousel-item-header active"
        style={{ backgroundImage: `url(${sliderImage})` }}
      >
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "10%",
            color: "white",
          }}
        >
          <h2 class="fontMark">{title}</h2>
          <h3 class="fontMont-extra-bold">{description}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div
        class="carousel-item carousel-item-header"
        style={{ backgroundImage: `url(${sliderImage})` }}
      >
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "10%",
            color: "white",
          }}
        >
          <h1 class="fontMark">{title}</h1>
          <h3 class="fontMont-extra-bold">{description}</h3>
        </div>
      </div>
    );
  }
};

export default Slide;
