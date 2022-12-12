import { Container } from "react-bootstrap";

import '../scss/Activities.scss';

const Activities = () => {
  return (
    <div className="page">

      <Container fluid>
        {/*     HEADER     */}
        <h1 className="activitiesHeader">Activities</h1>

        {/*     INTRODUCTION     */}
        <div className="activitiesTextContainer">
          <div className="activitiesText">
            <h5>
              <b>Each week our volunteers run activities to help our students mingle with each other.</b>
            </h5>
            <p>
              Some activities happen on a regular weekly basis, where others are one off or opportunistic.
            </p>
          </div>
        </div>

        {/*     FACESPOOK BANNER     */}
        <div className="activitiesFacebook">
          <h4><i className="fa-brands fa-facebook"></i>
            &nbsp; - see our Facebook page for updates</h4>
        </div>

        {/***    ACTIVITIES GRID   ***/}
        <div className="activitiesGrid">

          {/*     INTERNATIONAL CAFE     */}
          <div className="activitiesContainer cafe">
            <div className="actContText">
              <h2>International Café</h2>
              <p>
                Usually held at 7pm on the second Monday of each month.  This is an opportunity for people from different nations to socialise and make friends.  There is a different focus or topic for each session.
              </p>
            </div>
          </div>

          {/*     DAY TRIPS    */}
          <div className="activitiesContainer dayTrips">
            <div className="actContText">
              <h2>Daytrips</h2>
              <p>
                We explore Scotland on coach trips.  Past visits have been to Glasgow, Edinburgh, St. Andrews, Stirling and Blair Atholl!
              </p>
            </div>
          </div>

          {/*     CITY WALKS     */}
          <div className="activitiesContainer cityWalks">
            <div className="actContText">
              <h2>City walks</h2>
              <p>
                A chance to explore the place in which we live.
              </p>
            </div>
          </div>

        </div>

      </Container>

    </div>
  );
};

export default Activities;
