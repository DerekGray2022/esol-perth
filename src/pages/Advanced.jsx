import "../scss/Lessons.scss";

const Advanced = () => {
    return (
        <div className="lessonsContainer">

            {/***       ADVANCED       ***/}
            <h1 className="head">Advanced level</h1>

            <div className="poster">
                
                <h4 className="blueHead">
                    Level 4. Blue book.
                </h4>

                <div className="image">
                    <img src="assets/Lessons/Advanced.jpg" alt="" />
                </div>

                <p className="posterBody">
                    This level is for students who have a good language ability and are ready to expand their vocabulary, grammar and fluency.
                </p>

            </div>

        </div>
    );
};

export default Advanced;