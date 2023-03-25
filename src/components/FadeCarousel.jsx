import Carousel from "react-bootstrap/Carousel";
import "../scss/Intro.scss";

const FadeCarousel = () => {
  return (
    <Carousel
      className="workshop"
      slide
      fade
      controls={false}
      indicators={false}
    >
      {/* Lesson00 */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/Lesson00.jpg"
          className=" w-100"
          alt="Lesson00"
        />
      </Carousel.Item>
      {/* BelieveInYourself */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/BelieveInYourself.jpg"
          className=" w-100"
          alt="BelieveInYourself"
        />
      </Carousel.Item>
      {/* StudyMates */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/StudyMates.jpg"
          className=" w-100"
          alt="StudyMates"
        />
      </Carousel.Item>
      {/* Lesson03 */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/Lesson03.jpg"
          className="w-100"
          alt="Lesson03"
        />
      </Carousel.Item>
      {/* WrappingUp */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/WrappingUp.jpg"
          className=" w-100"
          alt="WrappingUp"
        />
      </Carousel.Item>
      {/* Lesson01 */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/Lesson01.jpg"
          className=" w-100"
          alt="Lesson01"
        />
      </Carousel.Item>
      {/* StudentStudy */}
      <Carousel.Item id="fadeItem">
        <img
          src="assets/Carousel/StudentStudy.jpg"
          className=" w-100"
          alt="StudentStudy"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default FadeCarousel;
