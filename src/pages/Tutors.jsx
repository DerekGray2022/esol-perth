import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


import '../scss/Timetable.scss';
import '../scss/Tutors.scss';


const Tutors = () => {
    return (
        <>
            <div className='introContainer'>
                {/*         HEADER       */}
                <Container className='introHeader'>
                    {/* <Row> */}
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
                    {/* </Row> */}
                </Container>

            </div>

            {/*         TUTOR LIST       */}
            {/* Senior Tutor */}
            <Container className="seniorContainer">

                <div className="senior">

                    <div className="seniorText">
                        <h3>Senior English Language Tutor</h3>
                        <p>Linda El-Miligy</p>
                    </div>

                    <img
                        src="assets/Tutors/Linda-with-student.jpg"
                        alt="Linda with Student"
                    />

                </div>

            </Container>


            {/* Class Tutors */}
            <div className="tutorContainer">

                <div className="tutorImage">
                    <img
                        src="assets/Tutors/Whiteboard.jpg"
                        alt="Tutor"
                    />
                </div>

                <div className="tutorList">
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
                </div>

            </div>

            {/* Support Staff */}
            <div className="supportContainer">
                <h3>Support Workers</h3>
                <Row className="supportRow">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            variant="top"
                            src="assets/Tutors/Support/VoiceCoaches.jpg"
                        />
                        <Card.Body>
                            <Card.Title><b>Voice Coaches</b></Card.Title>
                            <Card.Text>
                                <p>Edna Auld</p>
                                <p>Heather Knudtsen</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img 
                        variant="top"
                            src="assets/Tutors/Support/Playworker.jpg"
                         />
                        <Card.Body>
                            <Card.Title><b>Playworker</b></Card.Title>
                            <Card.Text>
                                <p>Elsa Tesfamichael</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img 
                        variant="top"
                            src="assets/Tutors/Support/Administrator.jpg"
                         />
                        <Card.Body>
                            <Card.Title><b>Administrator</b></Card.Title>
                            <Card.Text>
                                <p>Jess Jack</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Row>
            </div>
        </>
    );
};

export default Tutors;
