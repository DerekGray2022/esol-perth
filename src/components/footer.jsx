import { Col, Container, Navbar } from "react-bootstrap";

const Footer = () => {
    return (


        <Container fluid>
            <Navbar
                className="footer"
                bg="esolOrange"
                variant="dark"
                sticky="bottom"
            >
                <Col xs={3}>
                    <Navbar.Brand className="brand">
                        <img src="assets/images/onBlue_logo.png" width="80px" alt="Logo" />
                    </Navbar.Brand>
                </Col>

                <Col className="foot-text" xs={9}>
                    <Navbar className="justify-content-end">
                        Suite 1, Drummond House, 6 Scott Street, Perth, PH1 5EJ UK<br />
                        +44(0)742 768 9797<br />
                        esolperth@gmail.com
                    </Navbar>
                </Col>
            </Navbar>
        </Container>


    );
};

export default Footer;


