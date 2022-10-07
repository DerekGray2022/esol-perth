import React from 'react';

import HistoryContainer from '../components/History/HistoryContainer';
import OurAimsContainer from '../components/History/OurAimsContainer';
import OurObjectives from '../components/History/OurObjectives';

// import Spacer from "../components/Spacer";

import '../scss/History.scss';

const History = () => {
    return (
        <>
            <div>
                <h5 className='historyHeader'> History </h5>
            </div>
            
            <HistoryContainer />

            <div>
                <h5 className='historyHeader'> Our Aims </h5>
            </div>

            <OurAimsContainer />

            <div>
                <h5 className='ourObjectivesHeader'> Our Objectives </h5>
            </div>

            <OurObjectives />

            {/* <Spacer /> */}
        </>
    );
};

export default History;








