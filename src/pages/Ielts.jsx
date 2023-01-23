import "../scss/Lessons.scss";

const Ielts = () => {
    return (
        <div className="lessonsContainer">

            {/***       IELTS       ***/}
            <h1 className="head">I E L T S</h1>

            <div className="ielts">

                <h4 className="ieltsHead">
                    International English Language Test
                </h4>

                <div className="ieltsImage">
                    <img src="assets/Lessons/IELTS.jpg" alt="" />
                </div>

                <p className="ieltsBody">
                    This is a required qualification for anyone who wants to attend further education to degree level in the UK. The course is banded from 1 to 9 (9 is the highest) and students must achieve a minimum of 6.5 for most courses at university.
                </p>

                <p className="ieltsPS">
                    <span>IELTS is divided into 4 sections:</span>
                    <br />reading, writing, speaking and listening.
                </p>

            </div>

        </div>
    );
};

export default Ielts;