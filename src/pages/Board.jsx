import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BoardMembers from '../Json/BoardMembers.json';
import '../scss/Board.scss';

const Board = () => {

    return (
        <div>
            <Container fluid>
                {/* HEADER */}
                <Row className="memberHead"><h1>esolperth Board Members</h1></Row>
                {/* BOARD MEMBER */}
                <Row className="memberRow">
                {BoardMembers.map((member, id) => {
                    return (
                            <Col xs={12} md={6}>
                                <div className='memberCard' key={id}>

                                    {/* Image */}
                                    <img
                                        className='memberImage'
                                        src={member.img}
                                        alt="AP_C"
                                    />

                                    {/* Details */}
                                    <div className='memberText'>
                                        {/* Name */}
                                        <h3>{member.name}</h3>
                                        <br />
                                        {/* Biography */}
                                        <p>{member.biography[0].substring(0, member.intro)}
                                            <span>
                                                <a href="/#">
                                                    ...Read More
                                                    <img className='arrow' src="assets/BoardImages/arrow_right.png" alt='Arrow Right' />
                                                </a>
                                            </span>
                                        </p>
                                    </div>

                                </div>
                            </Col>
                    );
                })}
                </Row>
            </Container>
        </div>
    );
};

export default Board;
