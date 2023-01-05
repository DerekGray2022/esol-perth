// import { Row, Col, Navbar } from "react-bootstrap";

import "../scss/Footer.scss";

const Footer = () => {
    return (
        <>
            <div className="footer">
                
                <div className="footerLogo">
                    <img src="assets/images/ESOLPERTH-logo.png" alt="Logo" />
                </div>

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

                <div className="charityNo">
                    <p>
                        <i>Scottish Charity No:</i><b> SC 046650</b>
                    </p>
                    <p className="lwm">
                        powered by Little Wise Monkey | 2023
                    </p>
                </div>

            </div>
            
            </>


    );
};

export default Footer;


