import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../scss/Friends.scss';

const PartnerGrid = () => {
    return (
        <Container className='friendsContainer'>
            
            {/*         Perth Museum         */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='friendsLogoCol topLeft'>
                    <img className='logo' src="assets/Partners/PerthMuseum.png" alt="Perth Museum Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol topRight'>
                    <a href="http://www.culturepk.org.uk/museums-and-galleries/perth-museum-and-art-gallery/" target="_blank" rel="noreferrer">
                        <h5>Perth Museum</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>

            {/*         Buttons & Bows */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='friendsLogoCol'>
                    <img className='logo' src="assets/Partners/ButtonsBows.png" alt="Buttons & Bows Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol'>
                    <a href="https://perthbabybank.org/" target="_blank" rel="noreferrer">
                        <h5>Buttons and Bows Baby Bank</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>

            {/*         Police Scotland      */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='friendsLogoCol'>
                    <img className='logo' src="assets/Partners/PoliceScotland.png" alt="Police Scotland Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol'>
                    <a href="http://www.scotland.police.uk/your-community/tayside/perth-and-kinross/" target="_blank" rel="noreferrer">
                        <h5>Police Scotland</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>

            {/*         RASAC        */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='friendsLogoCol'>
                    <img className='logo' src="assets/Partners/RASAC.png" alt="RASAC Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol'>
                    <a href="https://www.rasacpk.org.uk/" target="_blank" rel="noreferrer">
                        <h5>RASAC</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>

            {/*         Perth Playhouse      */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='friendsLogoCol'>
                    <img className='logo' src="assets/Partners/PerthPlayhouse-solid.png" alt="Perth Playhouse Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol'>
                    <a href="https://theperthplayhouse.co.uk/" target="_blank" rel="noreferrer">
                        <h5>Perth Playhouse</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>

            {/*         Perth Theatre        */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='friendsLogoCol'>
                    <img className='logo' src="assets/Partners/PerthTheatre-solid.png" alt="Perth Theatre Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol'>
                    <a href="https://www.horsecross.co.uk/" target="_blank" rel="noreferrer">
                        <h5>Perth Theatre</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>

            {/*         Letham FC        */}
            <Row>
                <Col xs={0}></Col>

                <Col xs={4} sm={3} lg={2} className='lethamLogoCol bottomLeft'>
                    <img className='logo' src="assets/Partners/LethamFC-solid.png" alt="Letham FC Logo" />
                </Col>

                <Col xs={6} sm={8} lg={5} className='friendsLinkCol bottomRight'>
                    <a href="https://lethamfc.co.uk/" target="_blank" rel="noreferrer">
                        <h5>Letham Football Club</h5>
                    </a>
                </Col>

                <Col xs={0}></Col>
            </Row>
        </Container>
    );
};

export default PartnerGrid;
