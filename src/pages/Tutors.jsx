import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../scss/Timetable.scss';
import '../scss/Tutors.scss';


const Tutors = () => {
    return (
        <>
            {/*         INTRODUCTION         */}
            <div className='introTitle'>
                {/*         TITLE        */}
                <h1>Esol Perth Tutors</h1>
            </div>

            <div>
                {/*         HEADER       */}
                <Container className='introHeader'>
                    <Row>
                        <Col className='introCol'>
                            We know that learning is easier when you have an excellent teacher. That's why our tutors keep their qualifications up to date with continuous professional development every year.
                        </Col>

                        <Col className='introCardCol'>
                            <Card className='introCard'>
                                <Card.Body className='introCardBody'>
                                    <Card.Text>
                                        <b>Our tutors are passionate about their subject and they bring this enthusiasm into their lessons.</b>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>



                {/*         TUTOR LIST       */}
                {/* <Container> */}
                    <Card className='timetableContainer'>

                        <Card.Body className='timetableCardBody'>

                            {/*         Senior Tutor       */}
                            <Card.Title className='timetableCardTitle'>
                                    <h2>Senior English Language Tutor</h2><p>Linda El-Miligy</p>
                            </Card.Title>

                            {/*     Tutors */}
                            <Card.Text>
                                <Row>

                                    {/*         English Language Tutors       */}
                                    <Col>

                                        <Card className='tutorBox'>
                                            <h4>English Language Tutors</h4>
                                            <p>Liz Auld</p>
                                            <p>Alice Carbone</p>
                                            <p>Michael Ellacott</p>
                                            <p>Karen Guthrie</p>
                                            <p>Sarah Jamieson</p>
                                            <p>Helen Kirk</p>
                                            <p>Kasia McGregor</p>
                                            <p>Louise Milne</p>
                                            <p>Joshua Olewole</p>
                                            <p>Agi Parzniewska</p>
                                            <p>Catherine Perrin</p>
                                            <p>Shona Robertson</p>
                                            <p>Lily Scott</p>
                                            <p>Fiona Smith</p>
                                        </Card>

                                    </Col>

                                    {/*         Support Workers      */}
                                    <Col>

                                        {/*         Voice Coaches       */}
                                        <Card className='tutorBox'>
                                            <div>
                                                <h4>Voice Coaches</h4>
                                                <p>Edna Auld</p>
                                                <p>Heather Knudtsen</p>
                                            </div>
                                        </Card>

                                        {/*         Playworker       */}
                                        <Card className='tutorBox'>
                                            <div>
                                                <h4>Playworker</h4>
                                                <p>Elsa Tesfamichael</p>
                                            </div>
                                        </Card>

                                        {/*         Administrator        */}
                                        <Card className='tutorBox'>
                                            <div>
                                                <h4>Administrator</h4>
                                                <p>Jess Jack</p>
                                            </div>
                                        </Card>

                                    </Col>

                                </Row>
                            </Card.Text>

                        </Card.Body>

                    </Card>

                {/* </Container> */}

            </div>
        </>
    );
};

export default Tutors;
