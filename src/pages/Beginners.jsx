import "../scss/Lessons.scss";
import { Fade } from "react-awesome-reveal";

const Beginners = () => {
  return (
    <div className="beginnersContainer">
      <h1 className="beginHead">Beginner Level</h1>

      <Fade triggerOnce duration={3000}>
        {/***       BEGINNERS       ***/}
        <div className="red">
          <div>
            <h4 className="redHead">Level 1. Red book</h4>

            <a
              className="redLink"
              href="https://www.dk.com/uk/book/9780241226315-english-for-everyone-course-book-level-1-beginner/"
              target="_blank"
              rel="noreferrer"
            >
              <h5>ISBN: 978-0-241-226315</h5>
            </a>
          </div>

          <div className="image">
            <img src="assets/Lessons/BeginnerL01RED.jpg" alt="Red Book" />
          </div>

          <p className="redBody">
            This is suitable for students who are just starting to learn English
            as well as those who already have a little knowledge of English. It
            focuses on basic vocabulary and learning the phonetic sounds of
            English.
          </p>
        </div>

        <div className="orange">
          <div>
            <h4 className="orangeHead">Level 2. Orange book</h4>

            <a
              className="orangeLink"
              href="https://www.dk.com/uk/book/9780241252697-english-for-everyone-course-book-level-2-beginner/"
              target="_blank"
              rel="noreferrer"
            >
              <h5>ISBN: 978-0-241-252697</h5>
            </a>
          </div>

          <div className="image">
            <img src="assets/Lessons/BeginnerL02ORG.jpg" alt="Orange Book" />
          </div>

          <p className="orangeBody">
            This level is suitable for those students who already have the
            basics but need to develop their skills to use English
            independently.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Beginners;
