import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../scss/Donate.scss";

function Donate() {
    return (

        <Card className='donateCard'>
            <Card.Body className='donateCardBody'>
                <Container>
                    <Row className='donateCardRow'>

                        <Col className='donateText' xs={12} md={7}>
                            <h2>ESOL PERTH is a charity</h2>
                            <p>
                                We rely on funding from other charities and the public
                                <br />
                                <b>please consider donating to help us keep our lessons and community activities free</b>
                            </p>
                        </Col>

                        <Col className='donateButtonContainer' xs={12} md={4}>
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
