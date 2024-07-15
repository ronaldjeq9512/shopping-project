import { CarouselItem } from "./CarouselItem"
import { CAROUSEL } from "../../constants/carousel"

export const Carousel = () => {

    return (
        <div id="carouselExample" className="carousel slide carouselContainer">
            <div className="carousel-inner">
                {
                    CAROUSEL.map((item, index) => (
                        <CarouselItem 
                            key={index}
                            imageUrl={item} 
                            isActive={index === 0} 
                        />
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
