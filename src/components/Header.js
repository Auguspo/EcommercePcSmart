 
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Carousel interval={5000} className="mb-5 ">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://mastecnologia.com.ar/images/slider/cableutpe.jpg"
            alt="Primera diapositiva"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://mastecnologia.com.ar/images/slider/apc.jpg"
            alt="Segunda diapositiva"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://mastecnologia.com.ar/images/slider/proyectos.jpg"
            alt="Tercera diapositiva"
          />
        </Carousel.Item>
      </Carousel>

      <div className="custom-welcome-section text-center">
        <Container>
          <h1 className="display-4 fw-bold text-danger">Bienvenido a PC Smart</h1>
          <p className="lead">
            Somos una tienda especializada en la venta de productos electrónicos y de computación.
            Explora nuestra amplia selección de productos de alta calidad.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Header;
