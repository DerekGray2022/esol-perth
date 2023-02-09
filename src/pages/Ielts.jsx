import { Fade } from 'react-awesome-reveal';

import "../scss/Lessons.scss";

const Ielts = () => {
    return (
        <div className="lessonsContainer">

            {/***       IELTS       ***/}
            <h1 className="head">I E L T S</h1>

            <div className="ielts">

                <Fade triggerOnce duration={3000}>
                    <div>
                        <h4 className="ieltsHead">
                            International English Language Test
                        </h4>

                        <a href="https://www.amazon.co.uk/Official-Cambridge-Students-Answers-DVD-ROM/dp/1107620694/ref=asc_df_1107620694/?tag=googshopuk-21&linkCode=df0&hvadid=310977298937&hvpos=&hvnetw=g&hvrand=7237135544404518703&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9046888&hvtargid=pla-450493603327&psc=1" target="blank">
                            <h5>
                                ISBN: 978-1-107-620698
                            </h5>
                        </a>
                    </div>

                    <div className="image">
                        <img src="assets/Lessons/IELTS.jpg" alt="" />
                    </div>

                    <p className="ieltsBody">
                        This is a required qualification for anyone who wants to attend further education to degree level in the UK. The course is banded from 1 to 9 (9 is the highest) and students must achieve a minimum of 6.5 for most courses at university.
                    </p>

                    <p className="ieltsPS">
                        <span>IELTS is divided into 4 sections:</span>
                        <br />reading, writing, speaking and listening.
                    </p>
                </Fade>

            </div>

        </div>
    );
};

export default Ielts;