import React from 'react';

import { Fade } from 'react-awesome-reveal';

import HistoryContainer from '../components/History/HistoryContainer';
import OurAimsContainer from '../components/History/OurAimsContainer';
import OurObjectives from '../components/History/OurObjectives';


import '../scss/History.scss';

const History = () => {
    return (
        <Fade triggerOnce duration={3000}>
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
        </Fade>
    );
};

export default History;








