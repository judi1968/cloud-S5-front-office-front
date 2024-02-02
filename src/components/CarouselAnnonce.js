import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselAnnonce() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="%PUBLIC_URL%/../assets/images/carousel_annonce/carousel img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Annoce des voitures</h5>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnnonce;