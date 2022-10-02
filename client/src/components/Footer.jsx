import { Row, Col, Navbar } from "react-bootstrap";

import "../scss/Footer.scss";

const Footer = () => {
    return (


            <Navbar
                id="footer"
                className="footer"
                bg="esolOrange"
                variant="dark"
                sticky="bottom"
            >
                <Row className="footerRow">
                    <Col xs={12} sm={12} md={12} lg={3}>
                        <Navbar.Brand className="brand">
                            <img src="assets/images/ESOLPERTH-logo.png" width="300px" alt="Logo" />
                        </Navbar.Brand>
                    </Col>

                    <Col className="foot-text" xs={12} sm={12} md={12} lg={9}>
                        <Navbar className="footBar">
                            <p>
                                <b>Linda El-Miligy</b><br />
                                senior tutor and centre manager<br />
                                Suite 1, Drummond House,<br />
                                6 Scott Street,<br />
                                Perth PH1 5EJ<br />
                                +44(0)742 768 9797<br />
                            <a href="mailto:esolperth@gmail.com?subject=Website%20Query" >esolperth@gmail.com</a>
                            </p>
                        </Navbar>
                    </Col>
                </Row>
            </Navbar>


    );
};

export default Footer;


