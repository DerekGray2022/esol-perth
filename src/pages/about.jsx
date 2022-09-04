import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MemberCard from "../components/MemberCard";
import '../scss/about.scss';

const About = () => {
  return (
    <div className="page">
      <Container fluid>
        <Row className="memberHead"><h1>esolperth Board Members</h1></Row>
        <Row className="memberRow">
          {/*     HELEN    */}
          <Col xs={12} md={6}>
            <MemberCard
              className="member"
              name="Helen Boardmember"
              img="assets\MemberImages\Helen.jpg"
              intro="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error autem laboriosam odio hic beatae esse."
            />
          </Col>
          {/*     SHONA    */}
          <Col xs={12} md={6}>
            <MemberCard
              className="member"
              name="Shona Boardmember"
              img="assets\MemberImages\Shona.png"
              intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita vitae rerum sed voluptatum consectetur?"
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default About;
