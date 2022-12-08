import "../scss/Lessons.scss";

const Beginners = () => {

    return (
        <div className="beginnersContainer">

            <h1 className="beginHead">Beginner Level</h1>

            {/***       BEGINNERS       ***/}
            <div className="red">

                <h4 className="redHead">
                    Level 1. Red book
                </h4>

                <div className="image">
                    <img src="assets/Lessons/BeginnerL01RED.jpg" alt="" />
                </div>

                <p className="redBody">
                    This is suitable for students who are just starting to learn English as well as those who already have a little knowledge of English. It focuses on basic vocabulary and learning the phonetic sounds of English.
                </p>

            </div>

            <div className="orange">

                <h4 className="orangeHead">
                    Level 2. Orange book
                </h4>

                <div className="image">
                    <img src="assets/Lessons/BeginnerL02ORG.jpg" alt="" />
                </div>

                <p className="orangeBody">
                    This level is suitable for those students who already have the basics but need to develop their skills to use English independently.
                </p>

            </div>

        </div>
    );
};

export default Beginners;