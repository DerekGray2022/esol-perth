import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

import "../../scss/History/OurAim.scss";

const OurAimsContainer = () => {
    return (
        <>
            <Container fluid className="ourAimContainer">
                <Row>
                    <Col xs={12} md={1}>
                        &nbsp;
                    </Col>

                    <Col className='ourAimImageContainer' xs={12} md={5}>
                        <img
                            className='ourAimImage'
                            src="assets/History/OurAim.jpg"
                            alt="ourAimImage"
                        />
                    </Col>

                    <Col xs={12} md={5} >
                        <Card className='ourAimCard'>
                            <Card.Body className='ourAimBody'>
                                <Card.Text className='ourAimText'>
                                    <p>
                                        The main aim of ESOLPERTH is to improve the quality of life for people from other countries by teaching them how to <span>speak, read and write in English.</span>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={1}>
                        &nbsp;
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default OurAimsContainer;