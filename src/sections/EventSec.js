import React, { useEffect, useRef } from 'react';
import styles from './EventSec.module.css';
import { EventsList } from '../assets/Events_data';
import EventCard from '../components/Events/EventCard';
import Thumbnail from '../components/Events/Thumbnail';

const EventSec = () => {
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    useEffect(() => {
        const carouselDom = carouselRef.current;
        const sliderDom = sliderRef.current;
        const thumbnailDom = thumbnailRef.current;
        const nextDom = nextRef.current;
        const prevDom = prevRef.current;

        const timeRunning = 3000;

        const syncSliderAndThumbnails = (type) => {
            const sliderItems = Array.from(sliderDom.children);
            const thumbnailItems = Array.from(thumbnailDom.children);

            if (type === 'next') {
                sliderDom.appendChild(sliderItems[0]);
                thumbnailDom.appendChild(thumbnailItems[0]);
            } else {
                sliderDom.prepend(sliderItems[sliderItems.length - 1]);
                thumbnailDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
            }

            carouselDom.classList.add(type === 'next' ? styles.next : styles.prev);

            setTimeout(() => {
                carouselDom.classList.remove(styles.next);
                carouselDom.classList.remove(styles.prev);
            }, timeRunning);
        };

        const handleNext = () => syncSliderAndThumbnails('next');
        const handlePrev = () => syncSliderAndThumbnails('prev');

        nextDom.addEventListener('click', handleNext);
        prevDom.addEventListener('click', handlePrev);

        return () => {
            nextDom.removeEventListener('click', handleNext);
            prevDom.removeEventListener('click', handlePrev);
        };
    }, []);

    return (
        <div className={styles.carousel} ref={carouselRef}>
            <div className={styles.list} ref={sliderRef}>
                {EventsList.map(event => (
                    <EventCard key={event.id} props={event} />
                ))}
            </div>

            <div className={styles.thumbnail} ref={thumbnailRef}>
                {EventsList.map(event => (
                    <Thumbnail key={event.id} props={event} />
                ))}     
            </div>

            <div className={styles.arrows}>
                <button id="prev" ref={prevRef}>{'<'}</button>
                <button id="next" ref={nextRef}>{'>'}</button>
            </div>
        </div>
    );
};

export default EventSec;
