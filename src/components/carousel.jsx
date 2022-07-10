import { Carousel } from 'react-bootstrap';

const FadeCarousel = () => {
    return (
        <Carousel fade>

            {/* T'ai Chi */}
            <Carousel.Item>
                <img
                    src="assets/esol-images/tai-chi.png"
                    className=" w-100"
                    alt="T'ai Chi" 
                    />
            </Carousel.Item>
            {/* Piano */}
            <Carousel.Item>
                <img src="assets/esol-images/piano.png" className=" w-100" alt="Piano" />
            </Carousel.Item>
            {/* Kids' Art */}
            <Carousel.Item>
                <img src="assets/esol-images/kids-art.png" className=" w-100" alt="Kids' Art" />
            </Carousel.Item>
            {/* Coding */}
            <Carousel.Item>
                <img src="assets/esol-images/coding.png" className="w-100" alt="Coding" />
            </Carousel.Item>
            {/* Piano & Singing */}
            <Carousel.Item>
                <img src="assets/esol-images/piano-sing.png" className=" w-100" alt="Piano and Singing" />
            </Carousel.Item>
            {/* Chess */}
            <Carousel.Item>
                <img src="assets/esol-images/chess.png" className=" w-100" alt="Chess" />
            </Carousel.Item>
            {/* Art */}
            <Carousel.Item>
                <img src="assets/esol-images/art.png" className=" w-100" alt="Art" />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default FadeCarousel;








