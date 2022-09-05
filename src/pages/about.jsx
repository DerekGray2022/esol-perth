import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MemberCard from "../components/MemberCard";
import '../scss/about.scss';
import Spacer from "../components/Spacer";

const About = () => {
  return (
    <div className="page">
      <Container>
        <Row className="memberHead"><h1>esolperth Board Members</h1></Row>
        <Row className="memberRow">
          {/*     Andrew Parrott    */}
          <Col xs={12} md={6}>
            <div className='memberCard'>
              <img className='memberImage' src="assets/MemberImages/AndrewParrott_Cropped.png" alt="AP_C" />
              <div className='memberText'>
                <h3>Councillor Andrew Parrott</h3>
                <br />
                <p>Born in London, Andrew graduated from Aberdeen University before starting a career in the British Army<span><a href="#">
                  ...Read More
                  <img className='arrow' src="assets/MemberImages/arrow_right.png" alt='Arrow Right' />
                </a></span></p>
              </div>
            </div>
          </Col>

          {/* Next Board Member */}
          <Col xs={12} md={6}>
            {/* Next Board Member */}
          </Col>

          <Spacer />
        </Row>
      </Container>
    </div>
  );
};

export default About;
