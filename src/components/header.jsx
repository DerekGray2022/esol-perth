import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
    return (
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
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About us</Nav.Link>
                        <Nav.Link href="timetable">Timetable</Nav.Link>

                        {/* DropDown */}
                        <NavDropdown variant="dark" title="English Lessons">
                            <NavDropdown.Item href="beginners">Beginners' Lessons</NavDropdown.Item>
                            <NavDropdown.Item href="intermediate">Intermediate Lessons</NavDropdown.Item>
                            <NavDropdown.Item href="advanced">Advanced Lessons</NavDropdown.Item>
                            <NavDropdown.Item href="ielts">IELTS Lessons</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="activities">Activities</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
    );
};

export default Header;