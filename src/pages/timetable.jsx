import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Days from "../Json/Timetable.json";

import '../scss/Timetable.scss';



const Timetable = () => {

    const [day, setDay] = useState(Days[0]);

    const handleSelect = (selectedDay) => {
        setDay(Days[selectedDay]);
    };

    return (
        <div className="page">
            <Container fluid>

                <h1 className="season">September - December 2022</h1>

                {/*         WEEKDAY BUTTONS      */}
                <div className="timetableHead">
                    <Button variant='none' id='button01' onClick={() => { handleSelect(0) }}>MON</Button>
                    <Button variant='none' onClick={() => { handleSelect(1) }}>TUE</Button>
                    <Button variant='none' onClick={() => { handleSelect(2) }}>WED</Button>
                    <Button variant='none' onClick={() => { handleSelect(3) }}>THU</Button>
                    <Button variant='none' onClick={() => { handleSelect(4) }}>FRI</Button>
                    <Button variant='none' onClick={() => { handleSelect(5) }}>SAT</Button>
                    <Button variant='none' id='button02' onClick={() => { handleSelect(6) }}>SUN</Button>
                </div>

                {/*         CONTENT      */}
                <Card className='timetableContainer'>
                    <Card.Body className='timetableCardBody'>

                        <Card.Title className='timetableCardTitle'>
                            <h2>{day.day}</h2>
                        </Card.Title>


                            <Row>
                                {/*         Time of Day      */}
                                <Col className='time' xs={6} sm={5} md={4} lg={3}>
                                    <Row className='TLbox'><span>10:00 - 11:00</span></Row>
                                    <Row><span>11:00 - 12:00</span></Row>
                                    <Row><span>12:00 - 13:00</span></Row>
                                    <Row><span>13:00 - 14:30</span></Row>
                                    <Row><span>15:30 - 17:00</span></Row>
                                    <Row className='BLbox'><span>18:00</span></Row>
                                </Col>

                                {/*         Activities       */}
                                <Col className='activity' xs={6} sm={7} md={8} lg={9}>
                                    <Row className='TRbox'><span>{day.earlyMorn}</span></Row>
                                    <Row><span>{day.lateMorn}</span></Row>
                                    <Row className='lunch'><span>LUNCH</span></Row>
                                    <Row title={day.title}><span>{day.earlyAft}</span></Row>
                                    <Row><span>{day.lateAft}</span></Row>
                                    <Row className='BRbox'><span>{day.evening}</span></Row>
                                </Col>
                            </Row>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default Timetable;