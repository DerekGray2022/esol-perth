import { Col, Container, Row } from 'react-bootstrap';

import FadeCarousel from '../components/carousel';
import Donate from '../components/donate';
import SignUp from '../components/signUp';
import EsolMap from '../components/map';

const Home = () => {
    return (
        <>
            <div className="carouselContainer">
                <Container>
                    <Row className='rowContainer'>
                        <FadeCarousel />
                    </Row>
                </Container>
            </div>

            <div className="cotent intro">
                <Container>
                    <Row>
                        <h1>esolperth</h1>

                    </Row>
                    <Row>
                        <p className='bodyText'>esolperth provides free English lessons to speakers of other languages.
                            We run weekly activities to encourage a community spirit through the speaking of English.
                            There is no cost for lessons or the activities...<br /><b>so if you want to improve your English come along and start learning!</b></p>
                    </Row>
                </Container>
            </div>

            <div className="donate">
                <Container>
                    <Row>
                        <Col>
                            <Donate />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="facebook">
                <h2><i className="fa-brands fa-facebook"></i>
                    &nbsp;Find us on Facebook</h2>
            </div>

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

            <Container className='content'>
                <Row>
                    <h2><b>Our Location:</b></h2>
                    <p><b>Suite 1, Drummond House, 6 Scott Street, Perth, PH1 5EJ UK</b></p>

                    <p> Please get in touch with Linda on</p>
                    
                    <p><b>+447427 689797</b> (from outside the UK)</p>

                    <p><b>07427689797</b> (in the UK)</p>

                    <p><b>email:</b> esolperth@gmail.com</p>
                </Row>
                <Row>
                    <EsolMap />
                </Row>
            </Container>
        </>
    );
};

export default Home;