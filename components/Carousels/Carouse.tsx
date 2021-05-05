import React, { ReactElement } from "react";

import Carousel from "react-bootstrap/Carousel";

interface Props {}

export default function Carouse({}: Props): ReactElement {
  return (
    <Carousel prevLabel="" nextLabel="">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="imgs/Carousels/carouse1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          src="imgs/Carousels/carouse2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          src="imgs/Carousels/carouse3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
