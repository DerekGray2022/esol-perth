import { Container } from 'react-bootstrap';


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

            {/* AD BANNER DIVISION */}
            <Container fluid className="adBanner">
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









