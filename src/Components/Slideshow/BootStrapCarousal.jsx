import React from "react";

import slideshow1 from "./slideshow1.jpeg";
import slideshow2 from "./slideshow2.jpeg";
import slideshow3 from "./slideshow3.jpeg";

import slideshow4 from "./slideshow4.jpeg";
//import slideshow5 from "./slideshow5.jpeg";
import slideshow6 from "./slideshow6.jpeg";
import slideshow7 from "./slideshow7.jpeg";

function BootStrapCarousal() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
      data-interval="2000"
      data-pause="hover"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={slideshow1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slideshow2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slideshow3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slideshow4} alt="fourth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slideshow7} alt="fifth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slideshow6} alt="sixth slide" />
        </div>
      </div>
    </div>
  );
}

export { BootStrapCarousal };
