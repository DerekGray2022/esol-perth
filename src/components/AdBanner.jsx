import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import Images from 'assets/adBanner';


const AdBanner = () => {
    return (
        <Container>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="assets/adBanner/AD01.png"
                            className="d-block w-100"
                            alt="AD01.png"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="assets/adBanner/AD02.png"
                            className="d-block w-100"
                            alt="AD02.png"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="assets/adBanner/AD03.png"
                            className="d-block w-100"
                            alt="AD03.png"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="assets/adBanner/AD04.png"
                            className="d-block w-100"
                            alt="AD04.png"
                        />
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default AdBanner;


/*
<Carousel indicators={false} controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/adBanner/AD#01.png"
                    alt="AD#01.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/adBanner/AD#02.png"
                    alt="AD#02.png"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/adBanner/AD#03.png"
                    alt="AD#03.png"
                />
            </Carousel.Item>
        </Carousel>
*/

