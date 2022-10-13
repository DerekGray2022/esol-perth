import React, { useState } from 'react';
import { Row, Card, Button, Modal } from "react-bootstrap";

import Andrew from "../Images/Board/AndrewParrott.jpg";
import Paul from "../Images/Board/PaulCrawford.jpg";
import Rob from "../Images/Board/RobJarvis.jpg";

import member from '../components/BoardMembers';
import "../scss/Modal.scss";

const BoardCard = () => {

    const [show, setShow] = useState(false);
    const [num, setNum] = useState(0);

    const handleShow = (num) => {
        setShow(true);
        setNum(num);
    };

    const handleClose = () => setShow(false);

    //      RETURN
    return (
        <>
            <Row className="boardRow">

                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="assets/Board/AndrewParrott.jpg"
                    />
                    <Card.Body>
                        <Card.Title><b>Councillor Andrew Parrott</b></Card.Title>
                        <Card.Text>
                            Born in London, Andrew graduated from Aberdeen University before starting a career in the British Army.
                        </Card.Text>
                        <Button onClick={()=> handleShow(0)}>
                            Read More...
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="assets/Board/PaulCrawford.jpg"
                    />
                    <Card.Body>
                        <Card.Title><b>Dr. Paul Crawford</b></Card.Title>
                        <Card.Text>
                            Born in Aberdeen, Paul graduated from the University of Dundee and continued on an academic and engineering career.
                        </Card.Text>
                        <Button onClick={() => handleShow(1)}>
                            Read More...
                        </Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="assets/Board/RobJarvis.jpg"
                    />
                    <Card.Body>
                        <Card.Title><b>Dr. Rob Jarvis</b></Card.Title>
                        <Card.Text>
                            Rob is a medical doctor and has worked in general practice in Tayside and Fife and at Rachel House children's hospice.
                        </Card.Text>
                        <Button onClick={() => handleShow(2)}>
                            Read More... 
                        </Button>
                    </Card.Body>
                </Card>

            </Row>

            {/*         MODAL        */}
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                
                <Modal.Header>
                    <img
                        src={num === 0 ? Andrew : num === 1 ? Paul : Rob}
                        alt={member[num].name}
                        height="100%"
                        width={300}
                    />
                    <Modal.Title>{member[num].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {member[num].biography.map((bio, id) => {
                        return (
                            <p key={id}>
                                {bio}
                            </p>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BoardCard;



