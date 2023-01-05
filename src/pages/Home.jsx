import Container from 'react-bootstrap/Container';


import Donate from '../components/Donate';
import Register from '../components/Register';
import AdBanner from '../components/AdBanner';
import SummaryTimetable from '../components/SummaryTimetable';
import Intro from '../components/Intro';

const Home = () => {
    return (
        <>
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
                            - Find us on Instagram
                        </span>
                    </h4>
                </a>
            </Container>

            {/* SPONSOR DIVISION */}
            <Container fluid className="sponsor">
                <AdBanner />
            </Container>

            {/* SIGN-UP FORM DIVISION */}
            <Container fluid className="register">

                <h2>Register Here</h2>

                <p>Register here for further information</p>

                <Register />

            </Container>
        </>
    );
};

export default Home;









