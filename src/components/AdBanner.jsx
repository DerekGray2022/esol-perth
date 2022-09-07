import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const AdBanner = () => {
    return (
        <Card className='adCard'>
            <Card.Body className='adCardBody'>
                    <h3>We'd like to thank all our sponsors:</h3>
                    <Carousel className='adCarousel' controls={false} indicators={false}>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets\adBanner\AD01.png"
                                alt="Ad #1"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets\adBanner\AD02.png"
                                alt="Ad #2"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets\adBanner\AD03.png"
                                alt="Ad #3"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets\adBanner\AD04.png"
                                alt="Ad #4"
                            />
                        </Carousel.Item>

                    </Carousel>
            </Card.Body>
        </Card>
    );
}

export default AdBanner;

