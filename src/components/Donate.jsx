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
                    <a href='https://www.gofundme.com/f/esolperth' alt="Esolperth GoFundMe" target="blank">
                    <Button className='donateButton'>
                        Donate
                    </Button>
                    </a>
                </div>

            </div>

        </>
    );
};

export default Donate;
