import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/Timetable.scss';
import { useState } from 'react';

const Timetable = () => {

    const days = [
        ["Monday", "Beginners", "Intermediate", "Women's Health", "Children's English Club", "Beginners | Intermediate", "10:00 - 11:00"],
        ["Tuesday", "Beginners", "Intermediate", "Crafts for Everyone", "English Club", "Beginners | Intermediate", "10:00 - 11:00"],
        ["Wednesday", "Beginners", "Intermediate", "Cooking for Everyone", "English Club", "Beginners | Intermediate", "10:00 - 11:00"],
        ["Thursday", "Beginners", "Intermediate", "Computer Club", "English Club", "Beginners | Intermediate", "10:00 - 11:00"],
        ["Friday", "Beginners", "IT Class", "NO CLASSES", "NO CLASSES", "NO CLASSES", "10:00 - 11:00"],
        ["Saturday", "Toddlers Club", "Computer Club", "NO CLASSES", "NO CLASSES", "NO CLASSES", "10:00 - 12:00"],
        ["Sunday", "Beginners", "Intermediate", "NO CLASSES", "NO CLASSES", "NO CLASSES", "10:00 - 11:00"]
    ];

    const [day, setDay] = useState(days[0]);

    const handleSelect = (selectedDay) => {
        setDay(days[selectedDay]);
    };

    return (
        <div className="page">
            <Container fluid>

                <h1 id="season">September - December 2022</h1>

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
                            <h2>{day[0]}</h2>
                        </Card.Title>


                        <Card.Text>
                            <Row>
                                {/*         Time of Day      */}
                                <Col className='time' xs={6} sm={5} md={4} lg={3}>
                                    <Row className='TLbox'>{day[6]}</Row>
                                    <Row>11:00 - 12:00</Row>
                                    <Row>12:00 - 13:00</Row>
                                    <Row>13:00 - 14:30</Row>
                                    <Row>15:30 - 17:00</Row>
                                    <Row className='BLbox'>18:00</Row>
                                </Col>

                                {/*         Activities       */}
                                <Col className='activity' xs={6} sm={7} md={8} lg={9}>
                                    <Row className='TRbox'>{day[1]}</Row>
                                    <Row>{day[2]}</Row>
                                    <Row className='lunch'>LUNCH</Row>
                                    <Row>{day[3]}</Row>
                                    <Row>{day[4]}</Row>
                                    <Row className='BRbox'>{day[5]}</Row>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default Timetable;