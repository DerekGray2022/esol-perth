import Container from 'react-bootstrap/Container';
import { Fade } from 'react-awesome-reveal';


import Donate from '../components/Donate';
import Register from '../components/Register';
import Sponsors from '../components/Sponsors';
import SummaryTimetable from '../components/SummaryTimetable';
import Intro from '../components/Intro';
import QR from '../components/QR';

const Home = () => {
    return (
        <>
            <Fade triggerOnce duration={3000}>
                {/* INTRO DIVISION */}
                <div className="intro">
                    <Container fluid>
                        <Intro />
                    </Container>
                </div>

                {/* SUMMARY TIMETABLE */}
                <Container fluid className='summary'>
                    <SummaryTimetable />
                </Container>

                {/* SUMMARY TIMETABLE */}
                <Container fluid className='qrCode'>
                    <QR />
                </Container>

                {/* DONATE DIVISION */}
                <Container fluid className="donate">
                    <Donate />
                </Container>

                {/* FACEBOOK DIVISION */}
                <Container fluid className="facebook">
                    <h2>
                        <a href="https://www.facebook.com/search/top?q=esolperth" target="blank">
                            <i className="fa-brands fa-facebook" />
                            &nbsp; Find us on Facebook
                        </a>
                    </h2>
                </Container>

                {/*     INSTAGRAM BANNER     */}
                <Container fluid className="instagram">
                    <a href="https://www.instagram.com/explore/locations/389478557923021/esolperth/" target="blank">
                        <h4>
                            <i className="fa-brands fa-instagram"></i>
                            &nbsp;
                            <span className="gradient-text">
                                Find us on Instagram
                            </span>
                        </h4>
                    </a>
                </Container>

                {/* SPONSOR DIVISION */}
                <Container fluid className="sponsor">
                    <Sponsors />
                </Container>

                {/* SIGN-UP FORM DIVISION */}
                <Container fluid className="register">

                    <h2>Register Here</h2>

                    <p>Register here for further information</p>

                    <Register />

                </Container>
            </Fade>
        </>
    );
};

export default Home;









