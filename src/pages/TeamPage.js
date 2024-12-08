import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../sections/Contact';
import Team from '../sections/Team';
import SpheresBackground from './SpheresBackground'; // Import the updated SpheresBackground

const TeamPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='Homescrolled' style={{ position: 'relative' ,zIndex: '1' , background: 'transparent'}}>
      {/* Render Spheres in the background */}
      <div style={{}}>
      <SpheresBackground style={{opacity: '1'}}/>
      </div>
      
      <div style={{ position: 'relative' , background: 'transparent'}}> {/* Adjust z-index to be above the spheres */}
        <Team />
      </div>
      <div style={{ position: 'relative' , background: 'transparent' }}> {/* Adjust z-index to be above the spheres */}
        <Contact />
      </div>
    </div>
  );
};

export default TeamPage;        