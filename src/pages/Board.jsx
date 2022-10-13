import React from 'react';
import Container from "react-bootstrap/Container";

import BoardCard from '../components/BoardCard';
import '../scss/Board.scss';


const Board = () => {

    return (
        <>
            <div>
                <h5 className='boardHeader'> ESOL PERTH Board </h5>
            </div>

            <Container fluid className='boardContainer'>
                <BoardCard />
            </Container>
        </>
    );
};

export default Board;




