import React from 'react';

import FadeCarousel from './FadeCarousel';
import "../scss/Intro.scss";

const Intro = () => {
    return (
        <div className='introContainer'>

            <div className="introCarousel">
                
                <div>
                    <FadeCarousel />
                </div>

                <div className="introText">
                    
                    <p className='bodyText'>
                        <span>
                        ESOLPERTH provides English lessons to speakers of other languages.  The lessons are free for those who live in the council area of Perth & Kinross.
                        </span>
                        <br />
                        We run weekly activities to encourage a community spirit through the speaking of English...
                    </p>

                    <p className="bodyText">
                        <b>...so if you want to improve your English come along and start learning!</b>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Intro;