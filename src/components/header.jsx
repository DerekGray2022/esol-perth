import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/timetable">Timetable</Link>

                        {/* DropDown */}
                        <NavDropdown variant="dark" title="English Lessons">
                        <ul>
                            <li><Link to="/beginners">Beginners' Lessons</Link></li>
                            <li><Link to="/intermediate">Intermediate Lessons</Link></li>
                            <li><Link to="/advanced">Advanced Lessons</Link></li>
                            <li><Link to="/ielts">IELTS Lessons</Link></li>
                        </ul>
                        </NavDropdown>

                        <Link to="/activities">Activities</Link>
                        <Link to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
    );
};

export default Header;