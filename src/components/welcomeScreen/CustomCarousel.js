import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import messages from '../../images/welcomeScreen/messages.png';
import newsFeed from '../../images/welcomeScreen/newsFeed.png';
import search from '../../images/welcomeScreen/search.png';

const styles = {
    carousel:{
        width:'100%',
    },

};

export default function CustomCarousel() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel
            style={styles.carousel}
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={newsFeed}
                    alt="News feed"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={messages}
                    alt="Messages"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={search}
                    alt="Search"
                />
            </Carousel.Item>
        </Carousel>
    );
}