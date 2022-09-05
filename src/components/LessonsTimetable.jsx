import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../scss/LessonsTimetable.scss';

const LessonsTimetable = () => {
    return (
        <Container className='LTcontainer'>

            <Card className='LTcard'>
                <Card.Body className='LTcardBody'>
                    <Card.Title className='LTcardTitle'><h1><b>Lessons Timetable</b></h1></Card.Title>
                    {/* Mon - Thurs */}
                    <Row className='LTrow'>
                        <Col className='LTcol-left' xs={6} sm={4} lg={3}>
                            <Card.Text>
                                <b>Monday-Thursday</b>
                            </Card.Text>
                        </Col>
                        <Col className='LTcol-right' xs={6} sm={8} lg={9}>
                            <Card.Text>
                                <span>beginners and intermediate</span>
                                <br />10:00-12.00<br />18:00-19.00
                            </Card.Text>
                        </Col>
                    </Row>
                    {/* Friday */}
                    <Row className='LTrow'>
                        <Col className='LTcol-left' xs={6} sm={4} lg={3}>
                            <Card.Text>
                                <b>Friday</b>
                            </Card.Text>
                        </Col>
                        <Col className='LTcol-right' xs={6} sm={8} lg={9}>
                            <Card.Text>
                                <span>beginners</span>
                                <br />10:00 - 11.00
                            </Card.Text>
                        </Col>
                    </Row>
                    {/* Saturday & Sunday */}
                    <Row className='LTrow'>
                        <Col className='LTcol-left' xs={6} sm={4} lg={3}>
                            <Card.Text>
                                <b>Saturday & Sunday</b>
                            </Card.Text>
                        </Col>
                        <Col className='LTcol-right' xs={6} sm={8} lg={9}>
                            <Card.Text>
                                <span>beginners and intermediate</span>
                                <br />10:00 - 12.00
                            </Card.Text>
                        </Col>
                    </Row>
                    {/* Discussion classes  */}
                    <Row className='LTrow'>
                        <Col className='LTcol-left' xs={6} sm={4} lg={3}>
                            <Card.Text>
                                <b>Monday-Thursday</b>
                            </Card.Text>
                        </Col>
                        <Col className='LTcol-right' xs={6} sm={8} lg={9}>
                            <Card.Text>
                                <b>Discussion classes</b>
                                <br />13:00 - 14.30
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </Container>
    );
};

export default LessonsTimetable;
