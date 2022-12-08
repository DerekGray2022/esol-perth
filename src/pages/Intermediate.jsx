import "../scss/Lessons.scss";

const Intermediate = () => {
    return (
        <div className="lessonsContainer">

            {/***       INTERMEDIATE       ***/}
            <h1 className="head">Intermediate level</h1>

            <div className="poster">
                
                <h4 className="greenHead">
                    Level 3. Green book
                </h4>

                <div className="image">
                    <img src="assets/Lessons/Intermediate.jpg" alt="" />
                </div>

                <p className="posterBody">
                    This level is for learners who have a solid foundation in English and are ready to improve their knowledge and fluency.
                </p>

            </div>
            
        </div>
    );
};

export default Intermediate;


