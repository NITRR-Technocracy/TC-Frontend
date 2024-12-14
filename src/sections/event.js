import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: '1.jpg',
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: '2.jpg',
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: '3.jpg',
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: '4.jpg',
  },
];

const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  const handleClick = () => {
    handleSlideClick(slide.index);
  };

  const classNames = [
    'slide',
    current === slide.index && 'slide--current',
    current - 1 === slide.index && 'slide--previous',
    current + 1 === slide.index && 'slide--next',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img className="slide__image" alt={slide.headline} src={slide.src} />
      </div>
      <article className="slide__content">
        <h2 className="slide__headline">{slide.headline}</h2>
        <button className="slide__action btn">{slide.button}</button>
      </article>
    </li>
  );
};

const SliderControl = ({ type, title, handleClick }) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

const Slider = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">
          {heading}
        </h3>
        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
