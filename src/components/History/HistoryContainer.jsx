import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

import "../../scss/History/HistoryContainer.scss";

const HistoryContainer = () => {
    return (
        <>
            <Container fluid className="historyContainer">
                <Row>
                    <Col xs={12} md={1}>
                        &nbsp;
                    </Col>
                    <Col xs={12} md={5}>
                        <Card className='historyCard'>
                            <Card.Body className='historyBody'>

                                <Card.Text className='historyText'>
                                    <p>
                                        Esolperth is an English language learning environment. However, we have a structure that encourages social integration at a family friendly level.
                                    </p>

                                    <p>
                                        Originally started in 2015 in response to a request for lessons outside the normal working day, we have expanded to offer a wide range of family friendly activities.
                                    </p>

                                    <p>
                                        We try to teach the individual person and we adapt to meet their needs. We have a group of enthusiastic volunteer and paid tutors. We also have a part-time administrator and more volunteers, including our Board members, who support our activities.
                                    </p>

                                    <p>
                                        <b>
                                            All our lessons are free to those living in Perth and Kinross.  We look for funding from grant-giving bodies including other charities.
                                        </b>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='historyImageContainer' xs={12} md={5} >
                        <img
                            className='historyImage'
                            src="assets/History/History.jpg"
                            alt="historyImage"
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

export default HistoryContainer;