import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import IgniteForm from '../forms/IgniteForm'
import IgniteHero from '../sections/hero/IgniteHero'
import { useLocation } from 'react-router-dom';
import VigyaanFinalistSection from '../sections/VigyaanFinalistSection';

const Ignite = () => {
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
    if (window.scrollY > 500) {
        setScrolled(true); // User has scrolled down
    } else {
        setScrolled(false); // User is at the top
    }
};



  return (
    
    <div className="Ignitescrolled"> 
      <div className={scrolled ? "dark-overlay" : ""}></div>
          <IgniteHero />
          <div className="AavartanContainer">
          <IgniteForm />
          </div>
        </div>
    
  )
}

export default Ignite;