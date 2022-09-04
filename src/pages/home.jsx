import { Col, Container, Row } from 'react-bootstrap';


import Donate from '../components/Donate';
import Register from '../components/Register';
import AdBanner from '../components/AdBanner';
import FadeCarousel from "../components/FadeCarousel";

const Home = () => {
    return (
        <>
            {/* INTRO DIVISION */}
            <div className="intro">
                <Container>

                    <Row>
                        <h1>esolperth</h1>

                    </Row>

                    <Row>
                        {/* WORKSHOP CAROUSEL */}
                        <div className="carouselContainer">
                            <Row>
                                <FadeCarousel />
                            </Row>
                        </div>
                    </Row>

                    <Row>
                        <p className='bodyText'>esolperth provides English lessons to speakers of other languages.  The lessons are free for those who live in the council area of Perth & Kinross.<br />
                            We run weekly activities to encourage a community spirit through the speaking of English...
                        </p>
                        <p className="bodyText"><b>so if you want to improve your English come along and start learning!</b>
                        </p>
                    </Row>
                </Container>
            </div>

            {/*         SUMMARY TIMETABLE */}
            <div className="summaryTimetable">
                <h1>Summary Timetable</h1>
            </div>

            {/* DONATE DIVISION */}
            <div className="donate">
                    <Container>
                        <Row>
                            <Col>
                                <Donate />
                            </Col>
                        </Row>
                    </Container>
            </div>

            {/* FACEBOOK DIVISION */}
            <div className="facebook">
                <h2><i className="fa-brands fa-facebook"></i>
                    &nbsp;Find us on Facebook</h2>
            </div>

            {/* AD BANNER DIVISION */}
            <div>
                <Container className="adBanner">
                    <AdBanner />
                </Container>
            </div>

            {/* SIGN-UP FORM DIVISION */}
            <div className="register">
                <Container>
                    <Row>
                        <h2>Register Here</h2>
                    </Row>

                    <Row>
                        <p>Register here for online updates or drop into the office 9-5 Monday to Friday.<br /><br />
                        </p>

                    </Row>

                    <Row>
                        <Register />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;