import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../scss/timetable.scss';

const Timetable = () => {
    return (
        <div className="page">
            <Container fluid>

                <h1>September - December 2022</h1>

                {/*         WEEKDAY BUTTONS      */}
                <div className="timetableHead">
                    <Button>MON</Button>
                    <Button>TUE</Button>
                    <Button>WED</Button>
                    <Button>THU</Button>
                    <Button>FRI</Button>
                    <Button>SAT</Button>
                    <Button>SUN</Button>
                </div>
                
                {/*         CONTENT      */}
                <Card className='timetableContainer'>
                    <Row>
                        {/*         Time of Day      */}
                        <Col className='time' xs={6} sm={5} md={4} lg={3}>
                            <Row>10:00 - 11:00</Row>
                            <Row>11:00 - 12:00</Row>
                            <Row>12:00 - 13:00</Row>
                            <Row>13:00 - 14:30</Row>
                            <Row>15:30 - 17:00</Row>
                            <Row>18:00</Row>
                        </Col>

                        {/*         Activities       */}
                        <Col className='activity' xs={6} sm={7} md={8} lg={9}>
                            <Row>Beginners</Row>
                            <Row>Intermediate</Row>
                            <Row className='lunch'>LUNCH</Row>
                            <Row>Womens' Health</Row>
                            <Row>Childrens' English Club</Row>
                            <Row>Beginners | Intermediate</Row>
                        </Col>
                    </Row>
                </Card>

                {/* <Row className="body">
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
                    </Row> */}

            </Container>
        </div>
    );
};

export default Timetable;