import React from 'react';
import { Fade } from 'react-awesome-reveal';

import '../scss/Friends.scss';

const PartnerGrid = () => {
    return (
        <>
            
            {/***       GRID        ***/}
            <div className="friendsGrid">

                <Fade triggerOnce duration={3000}>
                    {/*         Buttons & Bows      */}
                    <div className="buttonsBows logo">
                        <img className='logo' src="assets/Partners/ButtonsBows.png" alt="Buttons & Bows Logo" />
                    </div>

                    <div className="buttonsBows link">
                        <a href="https://perthbabybank.org/" target="_blank" rel="noreferrer">
                            <h5>Buttons and Bows<br />Baby Bank</h5>
                        </a>
                    </div>

                    {/*         Letham FC        */}
                    <div className="lethamFC logo">
                        <img className='logo' src="assets/Partners/LethamFC-solid.png" alt="Letham FC Logo" />
                    </div>

                    <div className="lethamFC link">
                        <a href="https://lethamfc.co.uk/" target="_blank" rel="noreferrer">
                            <h5>Letham Football Club</h5>
                        </a>
                    </div>

                    {/*         OSCR         */}
                    <div className="OSCR logo">
                        <img className='logo' src="assets/Partners/OSCR.jpg" alt="OSCR Logo" />
                    </div>

                    <div className="OSCR link">
                        <a href="https://www.oscr.org.uk/" target="_blank" rel="noreferrer">
                            <h5>OSCR</h5>
                        </a>
                    </div>

                    {/*         Perth Museum         */}
                    <div className="perthMuseum logo">
                        <img className='logo' src="assets/Partners/PerthMuseum.png" alt="Perth Museum Logo" />
                    </div>

                    <div className="perthMuseum link">
                        <a href="http://www.culturepk.org.uk/museums-and-galleries/perth-museum-and-art-gallery/" target="_blank" rel="noreferrer">
                            <h5>Perth Museum</h5>
                        </a>
                    </div>

                    {/*         Perth Playhouse      */}
                    <div className="perthPlayhouse logo">
                        <img className='logo' src="assets/Partners/PerthPlayhouse-solid.png" alt="Perth Playhouse Logo" />
                    </div>

                    <div className="perthPlayhouse link">
                        <a href="https://theperthplayhouse.co.uk/" target="_blank" rel="noreferrer">
                            <h5>Perth Playhouse</h5>
                        </a>
                    </div>

                    {/*         Perth Theatre        */}
                    <div className="perthTheatre logo">
                        <img className='logo' src="assets/Partners/PerthTheatre-solid.png" alt="Perth Theatre Logo" />
                    </div>

                    <div className="perthTheatre link">
                        <a href="https://www.horsecross.co.uk/" target="_blank" rel="noreferrer">
                            <h5>Perth Theatre</h5>
                        </a>
                    </div>

                    {/*         Police Scotland      */}
                    <div className="policeScotland logo">
                        <img className='logo' src="assets/Partners/PoliceScotland.png" alt="Police Scotland Logo" />
                    </div>

                    <div className="policeScotland link">
                        <a href="http://www.scotland.police.uk/your-community/tayside/perth-and-kinross/" target="_blank" rel="noreferrer">
                            <h5>Police Scotland</h5>
                        </a>
                    </div>

                    {/*         RASAC        */}
                    <div className="rasac logo">
                        <img className='logo' src="assets/Partners/RASAC.png" alt="RASAC Logo" />
                    </div>

                    <div className="rasac link">
                        <a href="https://www.rasacpk.org.uk/" target="_blank" rel="noreferrer">
                            <h5>RASAC</h5>
                        </a>
                    </div>

                    {/*         Scottish Tech Army        */}
                    <div className="STA logo">
                        <img className='logo' src="assets/Partners/STA.jpg" alt="Scottish Tech Army Logo" />
                    </div>

                    <div className="lethamFC link">
                        <a href="https://www.scottishtecharmy.org/" target="_blank" rel="noreferrer">
                            <h5>Scottish Tech Army</h5>
                        </a>
                    </div>

                    {/*         SCVO         */}
                    <div className="SCVO logo">
                        <img className='logo' src="assets/Partners/SCVO.png" alt="SCVO Logo" />
                    </div>

                    <div className="SCVO link">
                        <a href="https://scvo.scot/" target="_blank" rel="noreferrer">
                            <h5>SCVO</h5>
                        </a>
                    </div>
                </Fade>

            </div>
        </>
    );
};

export default PartnerGrid;


