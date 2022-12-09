import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PartnerGrid from '../components/PartnerGrid';


import '../scss/Friends.scss';

const Friends = () => {
    return (
        <>
            <Container className="friendsContainer">

                <Row className="friendsTitle">
            <h1>Friends and Feedback</h1>
                </Row>

                <Row className="friendsHeader">
                    <h5>
                        We greatly value the partnerships we have with other organisations within Perth:
                    </h5>
                </Row>

                <Row className='friendsPartners'>
                    <PartnerGrid />
                </Row>

                <Row className="friendsComments">
                    <h3>Comments from past students:</h3>
                    <p>“I thank you from the bottom of my heart for the knowledge provided with great patience”</p>
                    <p>“I really liked the warm welcome, we and our children were treated very well.  Attentive teachers, versatile training.”</p>
                    <p>“Thank you so much for organising such a wonderful day out.  I got a lot of positive emotions and felt part of the community.”</p>
                    <p>“I really liked the trip.  Thanks to esolperth for the opportunity to visit other places in this beautiful country.  We saw interesting and very beautiful places.  Thanks to the people of Scotland for their kindness and cordiality.”</p>
                    <p>“What was good?  Teachers and lessons, great excursions, kind help.”</p>
                    <p>“Good teachers, good books, attention, care, excursions, I liked everything very much.”</p>
                </Row>

            </Container>
        </>
    );
};

export default Friends;



