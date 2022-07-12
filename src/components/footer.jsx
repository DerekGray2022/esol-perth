import { Col, Navbar } from "react-bootstrap";

const Footer = () => {
    return (


        <Navbar
            className="footer"
            bg="esolOrange"
            variant="dark"
            sticky="bottom"
        >
            <Col>
                <Navbar.Brand className="brand">
                    <img src="assets/images/onBlue_logo.png" width="80px" alt="Logo" />
                </Navbar.Brand>
            </Col>

            <Col className="justify-content-end foot-text">
                <Navbar>
                    Suite 1, Drummond House, 6 Scott Street, Perth, PH1 5EJ UK<br />
                    +44(0)742 768 9797<br />
                    esolperth@gmail.com
                </Navbar>
            </Col>
        </Navbar>


    );
};

export default Footer;


