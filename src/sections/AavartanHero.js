import React from 'react';
import './AavartanHero.css';

const AavartanHero2 = () => {
  return (
    <section className="hero">
      <WaterWave
        // imageUrl="/your-image-url.jpg" // Replace with your image URL
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {(methods) => (
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span>AAVARTAN</span>
              </h1>
              <p>
              Team Technocracy organizes a wide range of events, including hackathons, coding competitions, technical workshops, seminars, and technical talks by industry experts all under the banner of our annual Tech-Fest “Aavartan” . We also undertake technical projects and research initiatives.
              </p>
            </div>
          </div>
        )}
    </section>
  );
};

export default AavartanHero2;
