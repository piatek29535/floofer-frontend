import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CustomCarousel() {
    return (
        <Carousel style={{width:'100%', height:'90vh'}}>
            <Carousel.Item>
                <img
                    className='mw-100 mh-100'
                    src="https://cdn.pixabay.com/photo/2013/10/09/02/26/landscape-192987_960_720.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='mw-100 mh-100'
                    src="https://cdn.pixabay.com/photo/2014/11/21/03/24/landscape-540115_960_720.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='mw-100 mh-100'
                    src="https://cdn.pixabay.com/photo/2014/11/21/03/26/scotland-540119_960_720.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}