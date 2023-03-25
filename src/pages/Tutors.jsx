import React from "react";
import { Fade } from "react-awesome-reveal";

import "../scss/Tutors.scss";

const Tutors = () => {
  return (
    <Fade triggerOnce duration={3000}>
      <div className="splashBox">
        {/*         INTRODUCTION       */}
        <div className="splashRow">
          <div className="splashCol">
            We know that learning is easier when you have an excellent teacher.
            That's why our tutors keep their qualifications up to date with
            continuous professional development every year.
          </div>

          <div className="splashCard">
            <b>
              Our tutors are passionate about their subject and they bring this
              enthusiasm into their lessons.
            </b>
          </div>
        </div>
      </div>

      {/*         TUTOR LIST       */}
      {/* Senior Tutor */}
      <div className="seniorContainer">
        {/*         Header       */}
        <div className="seniorHead">
          <h3>Senior English Language Tutor</h3>
          <p>Linda El-Miligy</p>
        </div>
        {/*         Image        */}
        <div className="seniorImg">
          <img src="assets/Tutors/Linda_Profile.jpg" alt="Linda El-Miligy" />
        </div>
        {/*         Biography        */}
        <div className="seniorBiog">
          <p>
            <b>
              Linda has lived in Perth since 1993, she has 3 children, 1 in
              Glasgow and 2 in Brighton, England.
            </b>
          </p>
          <p>Linda lives in the centre of Perth, near the train station.</p>
          <p>
            Linda qualified as a State Registered Nurse in 1974 and as a State
            Registered Midwife in 1976.
          </p>
          <p>
            After 30 years and more than 1,000 babies delivered into the world,
            Linda retrained as an ESOL teacher, starting with a BA Honours from
            the Open University and achieving her CELTA, from Dundee College in
            2001.
          </p>
          <p>
            Since 2001 Linda has worked in ESOL, creating ESOLPERTH in 2015 and
            registering it as a charity in 2016. Linda believes strongly that
            everyone has the right to an education and ESOLPERTH reflects this
            ethos.
          </p>
          <p>
            Linda enjoys the theatre and music, particularly the music of Neil
            Diamond, Rod Stewart and Elvis. Her favourite plays are all those
            written by Willy Russell and Hamlet! (ask her about Hamlet).
          </p>
        </div>
      </div>

      {/* Class Tutors */}
      <div className="tutorContainer">
        <h3>English Language Tutors</h3>

        <div className="tutorList1">
          <p>Liz Auld</p>
          <p>Michael Ellacott</p>
          <p>Karen Guthrie</p>
          <p>Sarah Jamieson</p>
          <p>Helen Kirk</p>
          <p>Kasia McGregor</p>
        </div>

        <div className="tutorList2">
          <p>Louise Milne</p>
          <p>Joshua Olewole</p>
          <p>Agi Parzniewska</p>
          <p>Shona Robertson</p>
          <p>Lily Scott</p>
        </div>

        <div className="tutorImage">
          <img src="assets/Tutors/Whiteboard.jpg" alt="Tutor" />
        </div>
      </div>

      {/* Support Staff */}
      <div className="supportContainer">
        <h3>Support Workers</h3>

        <div className="supportCard voiceCoach">
          <img
            src="assets/Tutors/Support/VoiceCoaches.jpg"
            alt="Voice Coaches"
          />
          <div className="supportInfo">
            <h5>Voice Coaches</h5>
            <p>
              Edna Auld
              <br />
              Heather Knudtsen
            </p>
          </div>
        </div>

        <div className="supportCard playWork">
          <img src="assets/Tutors/Support/Playworker.jpg" alt="Playworker" />
          <div className="supportInfo">
            <h5>Playworker</h5>
            <p>Elsa Tesfamichael</p>
          </div>
        </div>

        <div className="supportCard admin">
          <img
            src="assets/Tutors/Support/Administrator.jpg"
            alt="Administrator"
          />
          <div className="supportInfo">
            <h5>Administrator</h5>
            <p>ESOLPERTH Administrator</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Tutors;
