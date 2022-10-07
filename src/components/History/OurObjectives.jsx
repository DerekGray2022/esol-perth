import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

import "../../scss/History/OurObjectives.scss";

const OurObjectives = () => {
    return (
        <>
            <Container fluid className="ourObjectivesContainer">
                <Row>
                    <Col xs={12} md={1}>
                        &nbsp;
                    </Col>

                    <Col xs={12} md={5}>
                        <Card className='ourObjectivesCard ourObjectivesList'>
                            <Card.Body className='ourObjectivesBody'>
                                <Card.Text className='ourObjectivesText'>
                                    <div className='listPara'>
                                        <b>
                                            <ul className='list'>
                                                <li>
                                                    Inclusion, empowerment, and independence for our students
                                                </li>
                                                <li>
                                                    Instruction with an attitude of friendship and co-operation
                                                </li>
                                                <li>
                                                    Respect for the culture and beliefs of our students
                                                </li>
                                            </ul>
                                        </b>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='ourObjectivesImageContainer' xs={12} md={5} >
                        <img
                            className='ourObjectivesImage'
                            src="assets/History/OurObjectives.jpg"
                            alt="ourObjectivesImage"
                        />
                    </Col>

                    <Col xs={12} md={1}>
                        &nbsp;
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default OurObjectives;