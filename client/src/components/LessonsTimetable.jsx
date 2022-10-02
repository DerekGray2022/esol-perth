import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../scss/Timetable.scss';

const LessonsTimetable = () => {
    return (
        <Container>

            <Card className='timetableContainer'>
                <Card.Body className='timetableCardBody'>

                    <Card.Title className='timetableCardTitle'>
                        <h2><b>Lessons Timetable</b></h2>
                    </Card.Title>

                    <Card.Text>
                        <Row className='contentRow'>
                            {/*     Time of Day      */}
                            <Col className='time' xs={6} sm={4} lg={3}>
                                <Row><span>Monday-Thursday</span></Row>
                                <Row><span>Friday</span></Row>
                                <Row><span>Saturday & Sunday</span></Row>
                                <Row><span>Monday-Thursday</span></Row>
                            </Col>

                            {/*         Activities       */}
                            <Col className='activity' xs={6} sm={8} lg={9}>
                                <Row>
                                    <span><b>Beginners and Intermediate</b></span>
                                    <span>10:00-12.00 & 18:00-19.00</span>
                                </Row>
                                <Row>
                                    <span><b>Beginners</b></span>
                                    <span>10:00 - 11.00</span>
                                </Row>
                                <Row>
                                    <span><b>beginners and intermediate</b></span>
                                    <span>10:00 - 12.00</span>
                                </Row>
                                <Row>
                                    <span><b>Discussion classes</b></span>
                                    <span>13:00 - 14.30</span>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    );
};

export default LessonsTimetable;
