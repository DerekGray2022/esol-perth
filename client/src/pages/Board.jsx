import React from 'react';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import BoardMembers from '../Json/BoardMembers.json';
import '../scss/Board.scss';

import Spacer from "../components/Spacer";

const Board = () => {

    return (
        <div>
            <h1>ESOL PERTH Board</h1>
            <Spacer />
            {/* <Container fluid> */}
                {/* HEADER */}
                {/* <Row className="memberHead"><h1>Esol Perth Board Members</h1></Row> */}
                {/* BOARD MEMBER */}
                {/* <Row className="memberRow">
                {BoardMembers.map((member, id) => {
                    return (
                        <Col key={id} xs={12} md={6}>
                                <div className='memberCard'> */}

                                    {/* Image */}
                                    {/* <img
                                        className='memberImage'
                                        src={member.img}
                                        alt={member.name}
                                    /> */}

                                    {/* Details */}
                                    {/* <div className='memberText'> */}
                                        {/* Name */}
                                        {/* <h3>{member.name}</h3>
                                        <br /> */}
                                        {/* Biography */}
                                        {/* <p>{member.biography[0].substring(0, member.intro)}
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
            </Container> */}
        </div>
    );
};

export default Board;
