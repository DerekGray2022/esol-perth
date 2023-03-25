import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "../../scss/History/OurObjectives.scss";

const OurObjectives = () => {
  return (
    <>
      <Container fluid className="ourObjectivesContainer">
        <Row>
          <Col className="filler" xs={12} md={1}>
            &nbsp;
          </Col>

          <Col xs={12} md={6}>
            <Card className="ourObjectivesCard ourObjectivesList">
              <Card.Body className="ourObjectivesBody">
                <div className="ourObjectivesText">
                  <div className="listPara">
                    <b>
                      <ul className="list">
                        <li data-testid="inclusion">
                          Inclusion, empowerment, and independence for our
                          students
                        </li>
                        <li data-testid="instruction">
                          Instruction with an attitude of friendship and
                          co-operation
                        </li>
                        <li data-testid="respect">
                          Respect for the culture and beliefs of our students
                        </li>
                      </ul>
                    </b>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className="ourObjectivesImageContainer" xs={12} md={4}>
            <img
              className="ourObjectivesImage"
              src="assets/History/OurObjectives.jpg"
              alt="ourObjectivesImage"
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

export default OurObjectives;
