import { Col, Container, Row, Navbar } from 'react-bootstrap';
import Donate from '../components/donate';
import SignUp from '../components/signUp';
import AdBanner from '../components/AdBanner';
import FadeCarousel from "../components/carousel";

const Home = () => {
    return (
        <>
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

            {/* INTRO DIVISION */}
            <div className="intro">
                <Container>
                    
                    <Row>
                        <h1>esolperth</h1>

                    </Row>

                    <Row>
                        {/* WORKSHOP CAROUSEL */}
                        <div className="carouselContainer">
                                <Row className='rowContainer'>
                                    <FadeCarousel />
                                </Row>
                        </div>
                    </Row>
                    
                    <Row>
                        <p className='bodyText'>esolperth provides free English lessons to speakers of other languages.
                            We run weekly activities to encourage a community spirit through the speaking of English.
                            There is no cost for lessons or the activities...<br /><b>so if you want to improve your English come along and start learning!</b></p>
                    </Row>
                </Container>
            </div>

            {/* AD BANNER DIVISION */}
            <div>
                <Navbar className="adBanner">
                    <AdBanner />
                </Navbar>
            </div>

            {/* FACEBOOK DIVISION */}
            <div className="facebook">
                <h2><i className="fa-brands fa-facebook"></i>
                    &nbsp;Find us on Facebook</h2>
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
                        <SignUp />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;