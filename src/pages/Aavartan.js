import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from '../sections/Events'
import EveningShow from '../sections/EveningShow'
import EventsGallery from '../sections/EventsGallery'
import AavartanHero from '../sections/hero/AavartanHero'
import { useLocation } from 'react-router-dom';
import StarFieldAnimation from '../layout/StarFieldAnimation';

const Aavartan = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);
    const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
    
  }, [])

  useEffect(() => {
    setActiveLink(location.pathname);
                    // Add event listener for scroll
                    window.addEventListener("scroll", handleScroll);

                    // Cleanup the event listener on unmount
                    return () => {
                        window.removeEventListener("scroll", handleScroll);
                    };
}, [location.pathname]);

const handleScroll = () => {
    if (window.scrollY > 600) {
        setScrolled(true); // User has scrolled down
    } else {
        setScrolled(false); // User is at the top
    }
};


  return (
    <div className={scrolled ? "Aavartanscrolled" : "Aavartannotscrolled"}>
      <div className={scrolled ? "dark-overlay" : ""}></div>
          <StarFieldAnimation/>
          {/* <Events/> */}
          {/* <AavartanHero/> */}
          <AavartanHero />
          <div className='AavartanContainer'>
            <EveningShow />
            <EventsGallery />
          </div>
        </div>
   
  )
}

export default Aavartan