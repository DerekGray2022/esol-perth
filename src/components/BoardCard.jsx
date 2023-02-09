import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';

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
                <div className="boardMember">

                <Fade triggerOnce duration={3000}>
                    {member.map((person) => {

                        const classname = `member member${person.id}`;

                        return (
                            <div className={classname} key={person.id}>

                                <img src={person.img} alt={person.name} />

                                <div className="memberTitle">
                                    <h4>{person.title}</h4>

                                    <h3>{person.name}</h3>

                                    <p>{person.biography[0]}</p>
                                </div>

                                <div className="button">
                                    <button onClick={() => handleShow(person.id)}>
                                        Read more about
                                        <br />
                                        {person.firstName}
                                    </button>
                                </div>

                            </div>
                        );
                    })}
                    </Fade>

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
                    <Modal.Title>
                        <h3>{member[num].name}</h3>
                        <h4 className="title">
                            {member[num].title}
                        </h4>
                    </Modal.Title>
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



