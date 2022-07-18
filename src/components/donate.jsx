import { Container, Row, Col, Button } from 'react-bootstrap'

function Donate() {
    return (
        <Container>
            <Row>

                <Col className='donateText' sm={12} md={9}>
                    <h3>esolperth is a charity</h3>
                    <p>please consider donating to help us keep our lessons and community activities free</p>
                </Col>

                <Col className='donate' sm={12} md={3}>
                    <Button className='donateButton'>
                        Donate
                    </Button>
                </Col>

            </Row>
        </Container>
    );
};

export default Donate;
