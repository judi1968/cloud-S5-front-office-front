import Carousel from 'react-bootstrap/Carousel';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselMessage() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="%PUBLIC_URL%/../assets/images/carousel_message/carousel img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Message</h5>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMessage;