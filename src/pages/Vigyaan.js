import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VigyaanGallery from '../sections/VigyaanGallery'
import VigyaanForm from '../forms/VigyaanForm'
import ProblemStatement from '../sections/ProblemStatement'
import VigyaanHero from '../sections/hero/VigyaanHero'
import { useLocation } from 'react-router-dom';
import VigyaanFinalistSection from '../sections/VigyaanFinalistSection';

const Vigyaan = () => {
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
    <div className="Vigyaanscrolled"> 
  {/* This overlay works with the CSS above to hit those 'Shadows -100' vibes */}
  <div className="dark-overlay"></div>
  
  <VigyaanHero />
  <div className="AavartanContainer">
      <VigyaanGallery />
      <ProblemStatement />
      
      {/* Registration Closed Label */}
      <div className="closed-status-wrapper">
  <style>{`
    .closed-status-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 20px; /* Side padding for mobile safety */
      width: 100%;
      box-sizing: border-box;
    }

    .closed-label-v2 {
      /* Responsive sizing: scales with screen width, but has limits */
      font-size: clamp(1rem, 4vw, 1.6rem); 
      padding: 12px 30px;
      font-weight: 900;
      color: #ff0000;
      background-color: #000000;
      border: 2px solid #ff0000;
      text-transform: uppercase;
      letter-spacing: clamp(2px, 1vw, 5px);
      border-radius: 4px;
      text-align: center;
      
      /* Glowing effect for visibility */
      box-shadow: 0 0 15px rgba(255, 0, 0, 0.5), inset 0 0 8px rgba(255, 0, 0, 0.2);
      text-shadow: 0 0 8px rgba(255, 0, 0, 0.7);
      
      /* Ensures the box doesn't get too wide on small screens */
      width: fit-content;
      max-width: 90%; 
      line-height: 1.2;
    }

    /* Small mobile adjustment */
    @media (max-width: 480px) {
      .closed-status-wrapper {
        padding: 20px 10px;
      }
      .closed-label-v2 {
        padding: 10px 20px;
        border-width: 1px;
      }
    }
  `}</style>

  <div className="closed-label-v2">
    REGISTRATION CLOSED!
  </div>
</div>

      {/* <VigyaanForm /> */}
  </div>
</div>
  )
}

export default Vigyaan
