import React from 'react';

import '../scss/Tutors.scss';


const XTutors = () => {
    return (
        <>
            <div className='splashBox'>
                {/*         INTRODUCTION       */}
                <div className='splashRow'>
                    <div className='splashCol'>
                        We know that learning is easier when you have an excellent teacher. That's why our tutors keep their qualifications up to date with continuous professional development every year.
                    </div>

                    <div className='splashCard'>
                        <b>Our tutors are passionate about their subject and they bring this enthusiasm into their lessons.</b>
                    </div>
                </div>

            </div>

            {/*         TUTOR LIST       */}
            {/* Senior Tutor */}
            <div className="seniorContainer">

                <div className="seniorText">
                    <h3>Senior English Language Tutor</h3>
                    <p>Linda El-Miligy</p>
                </div>

                <div className="seniorImg">
                    <img
                        src="assets/Tutors/Linda-with-student.jpg"
                        alt="Linda with Student"
                    />
                </div>

            </div>


            {/* Class Tutors */}
            <div className="tutorContainer">

                <h4>English Language Tutors</h4>

                <div className="tutorList1">
                    <p>Liz Auld</p>
                    <p>Alice Carbone</p>
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
                    <p>Catherine Perrin</p>
                    <p>Shona Robertson</p>
                    <p>Lily Scott</p>
                    <p>Fiona Smith</p>
                </div>

                <div className="tutorImage">
                    <img
                        src="assets/Tutors/Whiteboard.jpg"
                        alt="Tutor"
                    />
                </div>

            </div>

            {/* Support Staff */}
            <div className="supportContainer">
                <h3>Support Workers</h3>

                <div className='supportCard voiceCoach'>
                    <img
                        src="assets/Tutors/Support/VoiceCoaches.jpg"
                        alt="Voice Coaches"
                    />
                    <div className="supportInfo">
                        <h5>Voice Coaches</h5>
                        <p>Edna Auld<br />Heather Knudtsen</p>
                    </div>
                </div>

                <div className='supportCard playWork'>
                    <img
                        src="assets/Tutors/Support/Playworker.jpg"
                        alt="Playworker"
                    />
                    <div className="supportInfo">
                        <h5>Playworker</h5>
                        <p>Elsa Tesfamichael</p>
                    </div>
                </div>

                <div className='supportCard admin'>
                    <img
                        src="assets/Tutors/Support/Administrator.jpg"
                        alt="Administrator"
                    />
                    <div className="supportInfo">
                        <h5>Administrator</h5>
                        <p>Jess Jack</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default XTutors;
