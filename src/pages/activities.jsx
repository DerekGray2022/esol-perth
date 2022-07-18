import { Container, Row } from "react-bootstrap";
import FadeCarousel from "../components/carousel";

const Activities = () => {
  return (
    <div className="page">

      <Container>
        <h2 className="bodyText">Activities</h2>
        <p className="bodyText"><b>Each week our volunteers run activities to help our students mingle with each other.</b><br />
          Some activities happen on a regular weekly basis, where others are one off or opportunistic<br /></p>

        <div className="activitiesFacebook">
          <i className="fa-brands fa-facebook"></i>
          &nbsp;- see our Facebook page for updates
        </div>
      </Container>

      {/* WORKSHOP CAROUSEL */}
      <div className="carouselContainer">
        <Container>
          <Row className='rowContainer'>
            <FadeCarousel />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Activities;
