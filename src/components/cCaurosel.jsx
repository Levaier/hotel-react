import React from 'react'
import { Carousel } from 'react-bootstrap';

import '../assets/css/cCarousel.css';

export default function CCaurosel() {

  const slide_01 = require("../assets/images/relax.jpg");
  const slide_02 = require("../assets/images/tradizioni.jpg");
  const slide_03 = require("../assets/images/comfort.jpg");


  return (
    <Carousel fade id="home">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid object-fit-scale"
          src={slide_01}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid object-fit-scale"
          src={slide_02}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid object-fit-scale"
          src={slide_03}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
