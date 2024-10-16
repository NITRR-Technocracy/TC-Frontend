import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import EventCard from '../components/EventCard';
import { EventsList } from '../assets/Events_data';
import styles from './EventSec.module.css';
import img from '../assets/eventsAssets/omni1-removebg-preview 1.png';

const EventSec = () => {
    const [goToSlide, setGoToSlide] = useState(0);
    const [cards, setCards] = useState([]);
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const formattedCards = EventsList.map((item, index) => {
            return {
                key: index,
                content: (
                    <EventCard
                        name={item.name}
                        imgSrc={item.imgUrl}
                        des={item.des}
                        date={item.date}
                        time={item.time}
                        venue={item.venue}
                        link={item.link}
                        deadline={item.deadline}
                    />
                ),
            };
        });
        setCards(formattedCards);
    }, []);

    const moveLeft = () => {
        setGoToSlide((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
        triggerBlink();
    };

    const moveRight = () => {
        setGoToSlide((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
        triggerBlink();
    };

    const triggerBlink = () => {
        setBlink(true); // Trigger the blinking effect
        setTimeout(() => {
            setBlink(false); // Turn off the blinking effect after 1 second
        }, 1000); // Blink duration
    };

    return (
        <div className={styles.banner} style={{ marginBottom: '200px' }}>
            <div className={styles.slider}>
                <Carousel slides={cards} goToSlide={goToSlide} offsetRadius={0} />
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.leftButton} onClick={moveLeft}>
                    Left
                </button>
                <button className={styles.rightButton} onClick={moveRight}>
                    Right
                </button>
            </div>

            <img src={img} style={{ width: '600px', position: 'relative', top: '-100px', zIndex: '-1' }} alt="event"></img>

            {/* Glowing point with blink effect */}
            <div
                className={`${styles.glowingPoint} ${blink ? styles.blinking : ''}`}
            ></div>
        </div>
    );
};

export default EventSec;
