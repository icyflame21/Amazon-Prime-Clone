import React from "react";
import slideshow1 from "./slideshow1.jpeg";
import slideshow2 from "./slideshow2.jpeg";
import slideshow3 from "./slideshow3.jpeg";
import slideshow4 from "./slideshow4.jpeg";
import slideshow5 from "./slideshow5.jpg";
import slideshow6 from "./slideshow6.jpeg";
import slideshow7 from "./slideshow7.jpeg";
import slideshow8 from "./slideshow8.jpeg";
import slideshow9 from "./slideshow9.jpeg";
import slideshow10 from "./slideshow10.jpeg";
import slideshow11 from "./slideshow11.jpeg";
import slideshow12 from "./slideshow12.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
function BootStrapCarousal() {
  return (
    <div style={{ display: 'block', width: "100vw", marginTop: "80px"}}>
    <Carousel>
      <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow1}
          alt="Image One"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
            src={ slideshow2}
          alt="Image Two"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow3}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow4}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow5}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow6}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow7}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow8}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow9}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow10}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow11}
          alt="Image One"
        />
        </Carousel.Item>
        <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
src={slideshow12}
          alt="Image One"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export { BootStrapCarousal };
