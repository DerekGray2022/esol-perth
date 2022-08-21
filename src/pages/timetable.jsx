import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/timetable.scss';

const Timetable = () => {
    return (
        <div className="page">
            <Container fluid>
                
                <h1>September - December 2022</h1>

                <Card className="timetableContainer">
                    
                    <Row className="head">
                        <Col>&nbsp;</Col>
                        <Col>10:00 - 11:00</Col>
                        <Col>11: 00 - 12:00</Col>
                        <Col>12:00 - 13:00</Col>
                        <Col>13:00 - 14:30</Col>
                        <Col>15:30 - 17:00</Col>
                        <Col>18:00</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>MON</Col>
                        <Col>Beginners</Col>
                        <Col>Intermediate</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col>Womens' Health</Col>
                        <Col>Childrens'<br />English Club</Col>
                        <Col>Beginners<br />Intermediate</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>TUE</Col>
                        <Col>Beginners</Col>
                        <Col>Intermediate</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col>Crafts for Everyone</Col>
                        <Col>Childrens'<br />English Club</Col>
                        <Col>Beginners<br />Intermediate</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>WED</Col>
                        <Col>Beginners</Col>
                        <Col>Intermediate</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col>Cooking for Everyone</Col>
                        <Col>Childrens'<br />English Club</Col>
                        <Col>Beginners<br />Intermediate</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>THU</Col>
                        <Col>Beginners</Col>
                        <Col>Intermediate</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col>Computer Club</Col>
                        <Col>Childrens'<br />English Club</Col>
                        <Col>Beginners<br />Intermediate</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>FRI</Col>
                        <Col>Beginners</Col>
                        <Col>IT Class</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col className="shade">----------</Col>
                        <Col className='classes shade'>NO CLASSES</Col>
                        <Col className="shade">----------</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>SAT</Col>
                        <Col>10-12<br />Toddlers Club</Col>
                        <Col>Computer Club</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col className="shade">----------</Col>
                        <Col className='classes shade'>NO CLASSES</Col>
                        <Col className="shade">----------</Col>
                    </Row>
                    
                    <Row className="body">
                        <Col className='title'>SUN</Col>
                        <Col>Beginners</Col>
                        <Col>Intermediate</Col>
                        <Col className='lunch'>LUNCH</Col>
                        <Col className="shade">----------</Col>
                        <Col className='classes shade'>NO CLASSES</Col>
                        <Col className="shade">----------</Col>
                    </Row>

                </Card>
            </Container>
        </div>
    );
};

export default Timetable;