import React, { useState, useEffect } from 'react';
import styles from './EveningShow.module.css';

const images = [
  require('../assets/images/image1.jpg'),
  require('../assets/images/image2.jpg'),
  require('../assets/images/image3.jpg'),
  require('../assets/images/image4.jpg'),
  require('../assets/images/image5.jpg'),
];

const EveningShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const autoAdvance = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 3000);

    return () => clearInterval(autoAdvance);
  }, [currentImageIndex]);

  const translateValue = `translateX(-${currentImageIndex * 100}%)`;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselText}>EVENING SHOW</div>
      <div className={styles.carouselViewport}>
        <div className={styles.carouselInner} style={{ transform: translateValue }}>
          {images.map((image, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.carouselImageContainer}>
                <img src={image} alt={`Image ${index}`} className={styles.image_class} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.carouselInner}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === currentImageIndex - 1 || index === currentImageIndex + 1
                  ? styles.activeAdjacent
                  : ''
              }`}
              style={{ left: `${(index - currentImageIndex) * 100}%` }}
            >
              <img src={image} alt={`Adjacent Image ${index}`} className={styles.adjacentImage} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${currentImageIndex === index ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EveningShow;
