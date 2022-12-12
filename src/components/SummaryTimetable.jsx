import React from 'react';

import Days from "../Json/Summary.json";

import "../scss/Summary.scss";

const SummaryTimetable = () => {
    return (
        <div className='summaryContainer'>

            {/***       HEADER      ***/}
            <div className="summaryHeader"><h1><b>Lessons Timetable</b></h1></div>

            {/***       DAYS        ***/}
            {Days.map((day) => {
                return (
                    <div className={"sumDay " + day.id} key={day.id}>
                        {day.day}
                    </div>
                )
            })}

            {/***       EVENTS      ***/}
            {Days.map((day) => {
                return (
                    <>
                        <div className={"sumEvent " + day.id} key={day.id}>
                            {day.title}
                            <p className={"sumTime" + day.id}>
                                {day.time}
                            </p>
                        </div>
                    </>
                )
            })}

        </div>
    );
};

export default SummaryTimetable;
