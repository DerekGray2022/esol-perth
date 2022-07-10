import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import AdBanner from "./AdBanner";

const Header = () => {
    return (
        <>
            <Navbar
                className="navbar"
                bg="esolDarkBlue"
                variant="dark"
                sticky="top"
                expand="md"
                collapseOnSelect
            >

                <Navbar.Brand className="brand">
                    <img src="assets/images/onBlue_logo.png" width="80px" alt="Logo" />
                    esolperth
                </Navbar.Brand>

                <Navbar.Toggle className="toggle" />

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/timetable">
                            <Nav.Link>Timetable</Nav.Link>
                        </LinkContainer>

                        {/* DropDown */}
                        <NavDropdown variant="dark" title="English Lessons">
                            <LinkContainer to="/beginners">
                                <Nav.Link>Beginners' Lessons</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/intermediate">
                                <Nav.Link>Intermediate Lessons</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/advanced">
                                <Nav.Link>Advanced Lessons</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/ielts">
                                <Nav.Link>IELTS Lessons</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                        {/* End DropDown */}

                        <LinkContainer to="/activities">
                            <Nav.Link>Activities</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Navbar className="adBanner">
                <AdBanner />
            </Navbar>
            
            
        </>
    );
};

export default Header;