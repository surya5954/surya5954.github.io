import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = (props) => {
    console.log(props.carouselData);
    const data = props.carouselData.map((item) => (
        <div>
            <img src={item.image} />
            <p className="legend">{item.caption}</p>
        </div>
    ))
    return (
        <Carousel>
            {data}
        </Carousel>
    )
}

export default MyCarousel;
