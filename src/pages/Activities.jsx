import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import "../scss/Activities.scss";

const Activities = () => {
  return (
    <div className="page">
      <Container fluid>
        <Fade triggerOnce duration={3000}>
          {/*     HEADER     */}
          <div className="activitiesTextContainer" data-testid="splash">
            <h1 className="activitiesHeader">Activities</h1>

            {/*     INTRODUCTION     */}
            <div className="activitiesText">
              <h5>
                <b>
                  Each week our volunteers run activities to help our students
                  mingle with each other.
                </b>
              </h5>
              <p data-testid="para00">
                Some activities happen on a regular weekly basis, where others
                are one off or opportunistic.
              </p>
            </div>
          </div>

          {/*     FACESPOOK BANNER     */}
          <div className="activitiesFacebook">
            <a
              href="https://www.facebook.com/search/top?q=esolperth"
              target="_blank"
              rel="noreferrer"
            >
              <h4>
                <i className="fa-brands fa-facebook"></i>
                &nbsp; - see our Facebook page for updates
              </h4>
            </a>
          </div>

          {/*     INSTAGRAM BANNER     */}
          <div className="activitiesInstagram">
            <a
              href="https://www.instagram.com/explore/locations/389478557923021/esolperth/"
              target="_blank"
              rel="noreferrer"
            >
              <h4>
                <i className="fa-brands fa-instagram"></i>
                &nbsp;
                <span className="gradient-text">
                  - see our Instagram page for updates
                </span>
              </h4>
            </a>
          </div>

          {/***    ACTIVITIES GRID   ***/}
          <div className="activitiesGrid">
            <Fade triggerOnce duration={3000}>
              {/*     INTERNATIONAL CAFE     */}
              <div data-testid="div00" className="activitiesContainer cafe">
                <div className="actContText">
                  <h2>International Café</h2>
                  <p data-testid="para01">
                    Usually held at 7pm on the second Monday of each month.
                    <br />
                    <span data-testid="para02" className="block">
                      This is an opportunity for people from different nations
                      to socialise and make friends.
                    </span>
                    <br />
                    <span data-testid="para03" className="emphasis">
                      There is a different focus or topic for each session.
                    </span>
                  </p>
                </div>
              </div>

              {/*     DAY TRIPS    */}
              <div data-testid="div01" className="activitiesContainer dayTrips">
                <div className="actContText">
                  <h2>Daytrips</h2>
                  <p data-testid="para04">
                    We explore Scotland on coach trips.
                    <br />
                    <span data-testid="para05" className="block">
                      Past visits have been to Glasgow, Edinburgh, St. Andrews,
                      Stirling and Blair Atholl!
                    </span>
                  </p>
                </div>
              </div>

              {/*     CITY WALKS     */}
              <div
                data-testid="div02"
                className="activitiesContainer cityWalks"
              >
                <div className="actContText">
                  <h2>City Walks</h2>
                  <p data-testid="para06">
                    A chance to explore the place in which we live.
                  </p>
                </div>
              </div>

              {/*     CHESS CLUB     */}
              <div data-testid="div03" className="activitiesContainer chess">
                <div className="actContText">
                  <h2>Perth Chess Club</h2>
                  <p data-testid="para07">
                    Meets every Monday at 7.30pm.
                    <br />
                    <span data-testid="para08" className="block">
                      Beginners and experienced players are welcome.
                    </span>
                  </p>
                </div>
              </div>

              {/*     SPEAKERS CLUB     */}
              <div data-testid="div04" className="activitiesContainer speakers">
                <div className="actContText">
                  <h2>Perth Speakers Club</h2>
                  <p data-testid="para09">
                    Meets every ???
                    <br />
                    <span data-testid="para10" className="block">
                      It is a normal misconception about Speakers Clubs that
                      they are full of very good and accomplished speakers.
                      <br />
                    </span>
                    <span data-testid="para11" className="emphasis">
                      The truth is, that it is the very place to be looking for
                      if you struggle with confidence, and presenting the best
                      version of yourself to the world.
                    </span>
                  </p>
                </div>
              </div>

              {/*     CHILDREN'S HOLIDAY CLUB     */}
              <div
                data-testid="div05"
                className="activitiesContainer childrensClub"
              >
                <div className="actContText">
                  <h2>Children's Holiday Club</h2>
                  <p data-testid="para12">
                    This course runs in the second week of the school holidays
                    and throughout July.
                    <br />
                    <span data-testid="para13" className="block">
                      It is primarily to support the learning and development
                      language skills but we also recognise that there is a need
                      for childcare in the school holidays.
                    </span>
                    <br />
                    <span data-testid="para14" className="emphasis">
                      There are only 10 places available in the Holiday Club.
                    </span>
                  </p>
                </div>
              </div>

              {/*     TABLE TENNIS CLUB     */}
              <div
                data-testid="div06"
                className="activitiesContainer tableTennis"
              >
                <div className="actContText">
                  <h2>Table Tennis Club</h2>
                  <p data-testid="para15">
                    Meets Monday at 4pm for children aged 4 - 10 years.
                    <br />
                    <span data-testid="para16" className="block">
                      Wednesday at 7.30pm for teenagers and adults.
                    </span>
                    <br />
                    <span data-testid="para17" className="emphasis">
                      Beginners and experienced players are welcome.
                    </span>
                  </p>
                </div>
              </div>

              {/*     JULY SUMMER SCHOOL     */}
              <div
                data-testid="div07"
                className="activitiesContainer summerSchool"
              >
                <div className="actContText">
                  <h2>July Summer School</h2>
                  <p data-testid="para18">
                    Every year in July we run an intensive English language
                    course for 4 weeks.
                    <br />
                    <span data-testid="para19" className="block">
                      Monday to Thursday in the classroom and every Friday we go
                      for an educational and fun day out.
                    </span>
                    <br />
                    <span data-testid="para20" className="emphasis">
                      This is a good course to attend if you need an IELTS
                      qualification to start a university course in September.
                    </span>
                    <br />
                    <span data-testid="para21" className="emphasis">
                      ...It is also a good course to attend if you are looking
                      for work.
                    </span>
                  </p>
                </div>
              </div>

              {/*     TODDLER GROUP     */}
              <div
                data-testid="div08"
                className="activitiesContainer toddlerGroup"
              >
                <div className="actContText">
                  <h2>Esolperth Toddler Group</h2>
                  <p data-testid="para22">
                    The Esolperth Toddler group runs alongside the Beginner
                    class in the same room so Mums, Dads and Grandparents can
                    come along to class with their children.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default Activities;
