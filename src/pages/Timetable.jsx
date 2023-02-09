import React, { useState } from 'react';
import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

import Days from "../Json/Timetable.json";

import "../scss/Timetable.scss";

//      VARIABLES       ////
let lastElement = null;

const Timetable = () => {

    //      USE STATES      ////
    const [day, setDay] = useState(Days[0]);

    //  Set lastElement to "Mon" button on page load
    useEffect(() => {
        lastElement = document.querySelector(".monButton");
    }, [])


    //      FUNCTIONS       ////
    const handleClick = (e, num) => {
        //  Removes "active" from previous button className
        lastElement.classList.remove("dayPicked");
        //  Adds "active" to current button className
        e.target.classList.add("dayPicked");
        //  Sets lastElement to current button
        lastElement = e.target;
        //  Loads events for selcted day
        setDay(Days[num]);
    }

    return (
        <Fade triggerOnce duration={3000}>
            <div className="timetableContainer">
                {/***       HEADER      ***/}
                <div className="header"><h1>Timetable</h1></div>

                {/***       SEASON      ***/}
                <h1 className="newSeason">September - December 2022</h1>

                {/***       BUTTONS     ***/}
                <div className="monButton buttons dayPicked" onClick={(e) => { handleClick(e, 0); }}>
                    Mon
                </div>

                <div className="tueButton buttons " onClick={(e) => { handleClick(e, 1) }}>
                    Tue
                </div>

                <div className="wedButton buttons " onClick={(e) => { handleClick(e, 2) }}>
                    Wed
                </div>

                <div className="thuButton buttons " onClick={(e) => { handleClick(e, 3) }}>
                    Thu
                </div>

                <div className="friButton buttons " onClick={(e) => { handleClick(e, 4) }}>
                    Fri
                </div>

                <div className="satButton buttons " onClick={(e) => { handleClick(e, 5) }}>
                    Sat
                </div>

                <div className="sunButton buttons " onClick={(e) => { handleClick(e, 6) }}>
                    Sun
                </div>

                {/***       DAY TITLE     ***/}
                <div className="dayTitle"><h1>{day.day}</h1></div>

                {/***       TIMES       ***/}
                <div className="time earlyAM">
                    <span>10:00 - 11:00</span>
                </div>
                <div className="time lateAM">
                    <span>11:00 - 12:00</span>
                </div>
                <div className="time lunch">
                    <span>12:00 - 13:00</span>
                </div>
                <div className="time earlyPM">
                    <span>13:00 - 14:30</span>
                </div>
                <div className="time latePM">
                    <span>15:30 - 17:00</span>
                </div>
                <div className="time evening">
                    <span>18:00</span>
                </div>

                {/***       CLASSES       ***/}
                <div className={day.earlyAM === "NO CLASSES" ? "class earlyAM noClass" : "class earlyAM"}>
                    {day.earlyAM}
                </div>

                <div className={day.lateAM === "NO CLASSES" ? "class lateAM noClass" : "class lateAM"}>
                    {day.lateAM}
                </div>

                <div className="class lunch">LUNCH</div>

                <div className={day.earlyPM === "NO CLASSES" ? "class earlyPM noClass" : "class earlyPM"}>
                    {day.earlyPM}
                    <p className="classTitle">{day.title}</p>
                </div>

                <div className={day.latePM === "NO CLASSES" ? "class latePM noClass" : "class latePM"}>
                    {day.latePM}
                </div>

                <div className={day.evening === "NO CLASSES" ? "class evening noClass" : "class evening"}>{day.evening}</div>

            </div>
        </Fade>
    );
};

export default Timetable;