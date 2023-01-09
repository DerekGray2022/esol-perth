import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

import member from '../components/BoardMembers';
import "../scss/Modal.scss";

const BoardCard = () => {

    //      USE STATES
    const [show, setShow] = useState(false);
    const [num, setNum] = useState(0);

    //      FUNCTIONS
    const handleShow = (num) => {
        setShow(true);
        setNum(num);
    };

    const handleClose = () => setShow(false);



    //      RETURN
    return (
        <>
            <div className="boardContainer">

                <div className="boardMember">

                    {member.map((person) => {

                        const classname = `member member${person.id}`;

                        return (
                            <div className={classname} key={person.id}>

                                <img src={person.img} alt={person.name} />

                                <h3>{person.name}</h3>

                                <p>{person.biography[0]}</p>

                                <button onClick={() => handleShow(person.id)}>
                                    Read more about {person.firstName}...
                                </button>

                            </div>
                        );
                    })}

                </div>

            </div>


            {/***         MODAL        ***/}
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
                        src={member[num].img}
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



