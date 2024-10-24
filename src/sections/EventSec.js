import React, { useEffect, useRef, useState } from 'react';
import styles from './EventSec.module.css';
import { EventsList } from '../assets/Events_data';


function EventSec() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  
  const [carouselBg, setCarouselBg] = useState(EventsList[0].imgUrl); // Set initial background to the first thumbnail image

  useEffect(() => {
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    // Select DOM elements using refs
    let nextDom = nextRef.current;
    let prevDom = prevRef.current;
    let carouselDom = carouselRef.current;
    let sliderDom = sliderRef.current;
    let thumbnailBorderDom = thumbnailRef.current;

    // Append the first thumbnail item to the end
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(`.${styles.item}`);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    // Event listeners for next and prev buttons
    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };

    // Automatic slider movement
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      const sliderItemsDom = sliderDom.querySelectorAll(`.${styles.item}`);
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(`.${styles.item}`);

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add(styles.next);
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add(styles.prev);
      }

      // Update the carousel background to match the first visible thumbnail
      setCarouselBg(thumbnailItemsDom[0].querySelector('img').src); // Update to the current first thumbnail

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove(styles.next);
        carouselDom.classList.remove(styles.prev);
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div
      className={styles.carouselContainer}
      ref={carouselRef}
      //  style={{ backgroundImage: `url(${carouselBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Set dynamic background
    >
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.list} ref={sliderRef}>
          {/* Map over the EventsList dynamically */}
          {EventsList.map((event, index) => (
            <div className={styles.item} key={index}>
              {/* <img src={event.imgUrl} alt={event.name} /> */}
              <div className={styles.content}>
                <div className={styles.title}>{event.name}</div>
                <div className={styles.date}><strong>Date: </strong> {event.date}</div>
                <div className={styles.time}><strong>Time:</strong> {event.time}</div>
                <div className={styles.venue}><strong>Venue:</strong> {event.venue}</div>
                <div className={styles.des}><strong>Deadline: </strong>{event.deadline}</div>
                <button className={styles.button}><a href={event.link} className={styles.link}>Register</a></button>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails for quick navigation */}
        <div className={styles.thumbnail} ref={thumbnailRef}>
          {EventsList.map((event, index) => (
            <div className={styles.item} key={index}>
              <img src={event.imgUrl} alt={event.name} />
              <div className={styles.content}>
                <div className={styles.title}>{event.name}</div>
                <div className={styles.description}>{event.deadline}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className={styles.arrows}>
           <button id="prev" ref={prevRef}>&lt;</button>
          <button id="next" ref={nextRef}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default EventSec;
