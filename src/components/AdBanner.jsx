import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const AdBanner =()=> {
    return (
        <Container>
            <Carousel controls={false} indicators={false}>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets\adBanner\AD01.png"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets\adBanner\AD02.png"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets\adBanner\AD03.png"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets\adBanner\AD04.png"
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </Container>
    );
}

export default AdBanner;

