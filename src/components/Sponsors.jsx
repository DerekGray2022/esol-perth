import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "../scss/Sponsors.scss";

const Sponsors = () => {
    return (
        <div className='adCard'>
            <h2>We'd like to thank all our sponsors:</h2>
            <Carousel className='adCarousel' slide fade controls={false} indicators={false}>

                <Carousel.Item>
                    <a href="https://www.scotlandallstrong.com/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\AllStrong.jpg"
                            alt="All Strong Scotland"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.corra.scot/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\CorraFoundation.jpg"
                            alt="Corra Foundation"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.foundationscotland.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\FoundationScotland.jpg"
                            alt="Foundation Scotland"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://inspiringcommunities.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\InspiringCommunities.jpg"
                            alt="Inspiring Communities"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://leathersellers.co.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\Leathersellers.jpg"
                            alt="Leathersellers"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://localgiving.org/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\LocalGiving.jpg"
                            alt="Local Giving"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.national-lottery.co.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\NationalLottery.jpg"
                            alt="National Lottery"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.scotland.police.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\PoliceScotland.jpg"
                            alt="Police Scotland"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.therobertsontrust.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\RobertsonTrust.jpg"
                            alt="Robertson Trust"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://scottishrefugeecouncil.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\ScottishRefugeeCouncil.jpg"
                            alt="Scottish Refugee Council"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.soutercharitabletrust.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\Souter.jpg"
                            alt="Souter Charitable Trust"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://planetradio.co.uk/tay/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\TayFM.jpg"
                            alt="Tay FM"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.thomaswalltrust.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\ThomasWallTrust.jpg"
                            alt="Thomas Wall Trust"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://woodwardcharitabletrust.org.uk/" target="_blank" rel='noreferrer'>
                        <img
                            className="d-block w-100"
                            src="assets\Sponsors\WoodwardCharitableTrust.jpg"
                            alt="Woodward Charitable Trust"
                        />
                    </a>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default Sponsors;

