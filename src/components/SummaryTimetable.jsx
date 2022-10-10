import React from 'react';
import '../scss/Summary.scss';

const SummaryTimetable = () => {
    return (
        <>
            <table className='summaryContainer'>
                
                <thead className='summaryCardTitle'>
                    <th colSpan={2}>
                        <h2><b>Lessons Timetable</b></h2>
                    </th>
                </thead>

                <tbody className='summaryCardBody'>
                    
                    <tr className='contentRow'>
                        <td className="time"><span>Monday-Thursday</span></td>
                        <td className='activity'>
                            <span><b>Beginners and Intermediate</b></span><br />
                            <span>10:00-12.00 & 18:00-19.00</span>
                        </td>
                    </tr>
                    
                    <tr className='contentRow'>
                        <td className="time"><span>Friday</span></td>
                        <td className='activity'>
                            <span><b>Beginners</b></span><br />
                            <span>10:00 - 11.00</span>
                        </td>
                    </tr>

                    <tr className='contentRow'>
                        <td className="time"><span>Saturday & Sunday</span></td>
                        <td className='activity'>
                            <span><b>Beginners and Intermediate</b></span><br />
                            <span>10:00 - 12.00</span>
                        </td>
                    </tr>

                    <tr className='contentRow'>
                        <td className="time"><span>Monday-Thursday</span></td>
                        <td className='activity'>
                            <span><b>Discussion Classes</b></span><br />
                            <span>13:00 - 14.30</span>
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    );
};

export default SummaryTimetable;
