import Carousel from 'react-bootstrap/Carousel';

const FadeCarousel = () => {
    return (
        <Carousel className="workshop" slide fade controls={false} indicators={false}>

            {/* T'ai Chi */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/tai-chi.png" className=" w-100" alt="T'ai Chi"  />
            </Carousel.Item>
            {/* Piano */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/piano.png" className=" w-100" alt="Piano" />
            </Carousel.Item>
            {/* Kids' Art */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/kids-art.png" className=" w-100" alt="Kids' Art" />
            </Carousel.Item>
            {/* Coding */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/coding.png" className="w-100" alt="Coding" />
            </Carousel.Item>
            {/* Piano & Singing */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/piano-sing.png" className=" w-100" alt="Piano and Singing" />
            </Carousel.Item>
            {/* Chess */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/chess.png" className=" w-100" alt="Chess" />
            </Carousel.Item>
            {/* Art */}
            <Carousel.Item id="fadeItem">
                <img src="assets/esol-images/art.png" className=" w-100" alt="Art" />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default FadeCarousel;






