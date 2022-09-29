import Carousel from 'react-bootstrap/Carousel';
import "../scss/FadeCarousel.scss";

const FadeCarousel = () => {
    return (
        <Carousel className="workshop" slide fade controls={false} indicators={false}>

            {/* T'ai Chi */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/Lesson00.jpg" className=" w-100" alt="T'ai Chi"  />
            </Carousel.Item>
            {/* Piano */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/BelieveInYourself.jpg" className=" w-100" alt="Piano" />
            </Carousel.Item>
            {/* Kids' Art */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/StudyMates.jpg" className=" w-100" alt="Kids' Art" />
            </Carousel.Item>
            {/* Coding */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/Lesson03.jpg" className="w-100" alt="Coding" />
            </Carousel.Item>
            {/* Piano & Singing */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/WrappingUp.jpg" className=" w-100" alt="Piano and Singing" />
            </Carousel.Item>
            {/* Chess */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/Lesson01.jpg" className=" w-100" alt="Chess" />
            </Carousel.Item>
            {/* Art */}
            <Carousel.Item id="fadeItem">
                <img src="assets/ClassImages/StudentStudy.jpg" className=" w-100" alt="Art" />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default FadeCarousel;






