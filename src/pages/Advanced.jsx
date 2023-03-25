import { Fade } from "react-awesome-reveal";

import "../scss/Lessons.scss";

const Advanced = () => {
  return (
    <div className="lessonsContainer">
      <Fade triggerOnce duration={3000}>
        {/***       ADVANCED       ***/}
        <h1 className="head">Advanced level</h1>

        <div className="poster">
          <div>
            <h4 className="blueHead">Level 4. Blue book.</h4>

            <a
              className="advancedLink"
              href="https://www.dk.com/uk/book/9780241242322-english-for-everyone-course-book-level-4-advanced/"
              target="blank"
            >
              <h5>ISBN: 978-0-241-242322</h5>
            </a>
          </div>

          <div className="image">
            <img src="assets/Lessons/Advanced.jpg" alt="Blue Book" />
          </div>

          <p className="posterBody">
            This level is for students who have a good language ability and are
            ready to expand their vocabulary, grammar and fluency.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Advanced;
