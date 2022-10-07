import Carousel from 'react-bootstrap/Carousel';
import "../scss/FadeCarousel.scss";

const FadeCarousel = () => {
    return (
        <Carousel className="workshop" slide fade controls={false} indicators={false}>

            {/* timetableClassT'ai Chi */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/Lesson00.jpg" className=" w-100" alt="T'ai Chi"  />
            </Carousel.Item>
            {/* Piano */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/BelieveInYourself.jpg" className=" w-100" alt="Piano" />
            </Carousel.Item>
            {/* Kids' Art */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/StudyMates.jpg" className=" w-100" alt="Kids' Art" />
            </Carousel.Item>
            {/* Coding */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/Lesson03.jpg" className="w-100" alt="Coding" />
            </Carousel.Item>
            {/* Piano & Singing */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/WrappingUp.jpg" className=" w-100" alt="Piano and Singing" />
            </Carousel.Item>
            {/* Chess */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/Lesson01.jpg" className=" w-100" alt="Chess" />
            </Carousel.Item>
            {/* Art */}
            <Carousel.Item id="fadeItem">
                <img src="assets/Carousel/StudentStudy.jpg" className=" w-100" alt="Art" />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default FadeCarousel;






