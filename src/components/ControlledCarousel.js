import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="%PUBLIC_URL%/../assets/images/carousel_accueil/carousel img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Vente de voiture</h5>
          <p>Vous pouvez vendre des voitures ici</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="%PUBLIC_URL%/../assets/images/carousel_accueil/carousel img2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Voiture d'occasion</h5>
          <p>Meme si c'est un voiture d'occasion , vous pouvez le vendre ici</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="%PUBLIC_URL%/../assets/images/carousel_accueil/carousel img3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Tout les voitures</h5>
          <p>Vous pouvez vendre tout les voitures que vous voulez</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;