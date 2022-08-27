import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Donate() {
    return (

        <Card>
            <Card.Body>
                <Container>
                    <Row>

                        <Col className='donateText' xs={12} md={8}>
                            <h3>esolperth is a charity</h3>
                            <p>please consider donating to help us keep our lessons and community activities free</p>
                        </Col>

                        <Col className='donate' xs={12} md>
                            <Button className='donateButton'>
                                Donate
                            </Button>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
        </Card>


    );
};

export default Donate;
