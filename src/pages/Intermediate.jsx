import { Fade } from 'react-awesome-reveal';

import "../scss/Lessons.scss";

const Intermediate = () => {
    return (
        <div className="lessonsContainer">

            {/***       INTERMEDIATE       ***/}
            <h1 className="head">Intermediate level</h1>

            <Fade triggerOnce duration={3000}>
                <div className="poster">

                    <div>
                        <h4 className="greenHead">
                            Level 3. Green book
                        </h4>

                        <a className='intermediateLink' href="https://www.dk.com/uk/book/9780241226063-english-for-everyone-course-book-level-3-intermediate/" target="blank">
                            <h5>
                                ISBN: 978-0-241-226063
                            </h5>
                        </a>
                    </div>

                    <div className="image">
                        <img src="assets/Lessons/Intermediate.jpg" alt="" />
                    </div>

                    <p className="posterBody">
                        This level is for learners who have a solid foundation in English and are ready to improve their knowledge and fluency.
                    </p>

                </div>
            </Fade>
            
        </div>
    );
};

export default Intermediate;


