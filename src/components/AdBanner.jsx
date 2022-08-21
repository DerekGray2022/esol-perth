import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const AdBanner = () => {
    return (
        <Card>
            <Card.Body>
                <Container>
                    <h3>We'd like to thank all our sponsors:</h3>
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
            </Card.Body>
        </Card>
    );
}

export default AdBanner;

