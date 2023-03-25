import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "../../scss/History/HistoryContainer.scss";

const HistoryContainer = () => {
  return (
    <>
      <Container fluid className="historyContainer">
        <Row>
          <Col className="filler" xs={12} md={1}>
            &nbsp;
          </Col>
          <Col xs={12} md={5}>
            <Card className="historyCard">
              <Card.Body className="historyBody">
                <Card.Text className="historyText">
                  ESOLPERTH is an English language learning environment.
                  However, we have a structure that encourages social
                  integration at a family friendly level.
                </Card.Text>

                <Card.Text className="historyText">
                  Originally started in 2015 in response to a request for
                  lessons outside the normal working day, we have expanded to
                  offer a wide range of family friendly activities.
                </Card.Text>

                <Card.Text className="historyText">
                  We try to teach the individual person and we adapt to meet
                  their needs. We have a group of enthusiastic volunteer and
                  paid tutors. We also have a part-time administrator and more
                  volunteers, including our Board members, who support our
                  activities.
                </Card.Text>

                <Card.Text className="historyText emph">
                  All our lessons are free to those living in Perth and Kinross.
                  We look for funding from grant-giving bodies including other
                  charities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="historyImageContainer" xs={12} md={4}>
            <img
              className="historyImage"
              src="assets/History/History.jpg"
              alt="historyImage"
            />
          </Col>
          <Col className="filler" xs={12} md={1}>
            &nbsp;
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HistoryContainer;
