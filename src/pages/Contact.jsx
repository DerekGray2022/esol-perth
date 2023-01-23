
import { Container, Row } from "react-bootstrap";
import EsolMap from "../components/Map";
import '../scss/Contact.scss';

const Contact = () => {
    return (
        <div className="page">

            <Container className='content'>

                {/* ADDRESS DIVISION */}
                <Row>
                    <h2><b>Our Location:</b></h2>
                    <p><b>Suite 1, Drummond House, 6 Scott Street, Perth, PH1 5EJ UK</b></p>

                    <p> Please get in touch with Linda on:</p>

                    <p><b>+447427 689797</b> (from outside the UK)</p>

                    <p><b>07427689797</b> (in the UK)</p>

                    <p><b>email: </b>esolperth@gmail.com</p>
                    <p><b>What3words: </b>forget.spun.metro</p>
                </Row>

                {/* MAP DIVISION */}
                <Row>
                    <EsolMap />
                </Row>

            </Container>

        </div>
    );
};

export default Contact;