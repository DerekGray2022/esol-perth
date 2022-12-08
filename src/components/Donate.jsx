import Button from 'react-bootstrap/Button';

import "../scss/Donate.scss";

function Donate() {
    return (

        <>
            {/***       CARD        ***/}
            <div className='donateCard'>
                {/* Text */}
                <div className='donateText'>
                    <h2>
                        ESOLPERTH is a charity
                    </h2>
                    <p>
                        We rely on funding from other charities and the public
                        <br />
                        <b>please consider donating to help us keep our lessons and community activities free</b>
                    </p>
                </div>
                {/* Button */}
                <div className='donateButtonContainer'>
                    <Button className='donateButton'>
                        Donate
                    </Button>
                </div>

            </div>

        </>
    );
};

export default Donate;
