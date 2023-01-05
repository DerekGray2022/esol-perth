import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

import "../scss/AdBanner.scss"

const AdBanner = () => {
    return (
        <div className='adCard'>
                <h3>We'd like to thank our sponsors:</h3>
                <img src="assets/sponsors/AllStrong.jpg" alt="AllStrong Banner" />
                    {/* <Carousel className='adCarousel' controls={false} indicators={false}>

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

                    </Carousel> */}
        </div>
    );
}

export default AdBanner;

