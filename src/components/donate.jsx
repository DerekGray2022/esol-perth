import { Container, Row, Col, Button } from 'react-bootstrap'

function Donate() {
    return (
        <Container>
            <Row>

                <Col sm={12} md={2} />

                <Col sm={12} md={6}>
                    <h3>esolperth is a charity</h3>
                </Col>

                <Col sm={12} md={2}>
                    <Button className='donateButton'>
                        Donate
                    </Button>
                </Col>

                <Col sm={12} md={2} />

            </Row>
        </Container>
    );
};

export default Donate;
