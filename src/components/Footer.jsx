import React from "react";
import { Link } from "react-router-dom";
import "../scss/Footer.scss";

const Footer = () => {
    return (
        <>
            <div className="footer">

                {/*         LOGO         */}
                <div className="logoLink">
                    <div className="footerLogo">
                        <img src="assets/images/ESOLPERTH-logo.png" alt="Logo" />
                    </div>

                    <div className="footerLinks">
                        <div className="list01">
                            <Link to="/">Home</Link>
                            <Link to="/history">History</Link>
                            <Link to="/tutors">Tutors</Link>
                            <Link to="/board">Board</Link>
                            <Link to="/timetable">Timetable</Link>
                            <Link to="/beginners">Beginners</Link>
                        </div>
                        <div className="list02">
                            <Link to="/intermediate">Intermediate</Link>
                            <Link to="/advanced">Advanced</Link>
                            <Link to="/ielts">IELTS</Link>
                            <Link to="/activities">Activities</Link>
                            <Link to="/friends">Friends</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>

                {/*         ADDRESS      */}
                <div className="footerAddress">
                    <p>
                        <b>Linda El-Miligy</b>
                        <br />
                        Senior Tutor and Centre Manager
                        <br />
                        Suite 1, Drummond House,
                        <br />
                        6 Scott Street,
                        <br />
                        Perth PH1 5EJ
                        <br />
                        +44(0)742 768 9797
                        <br />
                        <a href="mailto:esolperth@gmail.com?subject=Website%20Query" >esolperth@gmail.com</a>
                    </p>
                </div>

                {/*         SOCIAL MEDIA ICONS       */}
                <div className="footerIcons">

                    <a href="https://www.facebook.com/search/top?q=esolperth" target="blank">
                        <h2>
                            <i className="fa-brands fa-facebook" />
                        </h2>
                    </a>

                    <a href="https://www.instagram.com/explore/locations/389478557923021/esolperth/" target="blank">
                        <h2>
                            <i className="fa-brands fa-instagram"></i>
                        </h2>
                    </a>
                </div>

                {/*         CHARITY  NUMBER       */}
                <div className="charityNo">
                    <p>
                        <i>Scottish Charity No:</i><b> SC 046650</b>
                    </p>
                    <p className="lwm">
                        powered by Little Wise Monkey 2023
                    </p>
                </div>

            </div>

        </>


    );
};

export default Footer;


