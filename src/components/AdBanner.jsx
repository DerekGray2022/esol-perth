import React from 'react';
import Container from 'react-bootstrap/Container';

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
<Container>
            <Carousel controls="off" indicators="false">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/adBanner/AD01.png"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/adBanner/AD02.png"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/adBanner/AD03.png"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/adBanner/AD04.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
*/

