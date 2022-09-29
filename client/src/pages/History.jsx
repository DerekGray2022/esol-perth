import React from 'react';
// import { Container, Card } from 'react-bootstrap';

import Spacer from "../components/Spacer";

import '../scss/History.scss';

const History = () => {
    return (
        <div>
            <h1>History</h1>
            <Spacer />

            {/* <Container className='historyContainer'>
                
                <Card className='historyCard'>
                    <Card.Body className='historyBody'>
                    <Card.Title className='historyTitle'>
                        <h1>History</h1>
                    </Card.Title>

                        <Card.Text className='historyText'>
                            <p>
                                Esolperth is an English language learning environment. However, we have a structure that encourages social integration at a family friendly level.
                            </p>

                            <p>
                                Originally started in 2015 in response to a request for lessons outside the normal working day, we have expanded to offer a wide range of family friendly activities.
                            </p>

                            <p>
                                We try to teach the individual person and we adapt to meet their needs. We have a group of enthusiastic volunteer and paid tutors. We also have a part-time administrator and more volunteers, including our Board members, who support our activities.
                            </p>

                            <p>
                                All our lessons are free to those living in Perth and Kinross.  We look for funding from grant-giving bodies including other charities.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className='historyCard'>
                    <Card.Body className='historyBody'>
                    <Card.Title className='historyTitle'>
                            <h1>Our aim</h1>
                    </Card.Title>

                        <Card.Text className='historyText'>
                            <p>
                                The main aim of esolperth is to improve the quality of life for people from other countries by teaching them how to speak, read and write in English.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className='historyCard historyList'>
                    <Card.Body className='historyBody'>
                    <Card.Title className='historyTitle'>
                            <h1>Our objectives</h1>
                    </Card.Title>

                        <Card.Text className='historyText'>
                            <div className='listPara'>
                                <ul className='list'>
                                    <li>
                                        Inclusion, empowerment, and independence for our students
                                    </li>
                                    <li>
                                        Instruction with an attitude of friendship and co-operation
                                    </li>
                                    <li>
                                        Respect for the culture and beliefs of our students
                                    </li>
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container> */}
        </div>
    );
};

export default History;
