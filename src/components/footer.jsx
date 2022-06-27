import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar
            className="footer"
            bg="esolOrange"
            variant="dark"
            sticky="bottom"
            expand="md"
            collapseOnSelect
        >

            <Navbar.Brand className="brand">
                <img src="assets/images/onBlue_logo.png" width="80px" alt="Logo" />
                esolperth
            </Navbar.Brand>

        </Navbar>
    );
};

export default Footer;


