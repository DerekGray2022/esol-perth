import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import '../scss/Header.scss';

const Header = () => {
    return (
        <>
            <Navbar
                className="headBar"
                bg="light"
                variant="light"
                sticky="top"
                expand="lg"
                collapseOnSelect
            >

                <Navbar.Brand className="brand">
                    <img src="assets/images/ESOLPERTH-logo.png" width="300px" alt="Logo" />
                    {/* esolperth */}
                </Navbar.Brand>

                <Navbar.Toggle className="toggle" />

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {/*         Home         */}
                        <LinkContainer to="/">
                            <Nav.Link><b>Home</b></Nav.Link>
                        </LinkContainer>

                        {/*     About DropDown      */}
                        <b><NavDropdown variant="dark" title="About Us">
                            <LinkContainer to="/history">
                                <Nav.Link>History</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tutors">
                                <Nav.Link>Tutors</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/board">
                                <Nav.Link>Board Members</Nav.Link>
                            </LinkContainer>
                        </NavDropdown></b>
                        {/*     End About DropDown      */}

                        {/*     Timetable       */}
                        <LinkContainer to="/timetable">
                            <Nav.Link><b>Timetable</b></Nav.Link>
                        </LinkContainer>

                        {/*     Lessons DropDown        */}
                        <b><NavDropdown variant="dark" title="English Lessons">
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
                        </NavDropdown></b>
                        {/* End Lessons DropDown */}

                        {/*     Activities      */}
                        <LinkContainer to="/activities">
                            <Nav.Link><b>Activities</b></Nav.Link>
                        </LinkContainer>

                        {/*     Friends & Feedback      */}
                        <LinkContainer to="/Friends">
                            <Nav.Link><b>Friends &<br />Feedback</b></Nav.Link>
                        </LinkContainer>

                        {/*     Contact     */}
                        <LinkContainer to="/contact">
                            <Nav.Link><b>Contact</b></Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;