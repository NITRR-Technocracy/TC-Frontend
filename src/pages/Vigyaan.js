import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VigyaanInfo from '../sections/VigyaanInfo'
import VigyaanGallery from '../sections/VigyaanGallery'
import VigyaanForm from '../forms/VigyaanForm'
import ProblemStatement from '../sections/ProblemStatement'
import VigyaanHero from '../sections/hero/VigyaanHero'
import FullPageLoader from '../layout/FullPageLoader';
import { useLocation } from 'react-router-dom';
import StarFieldAnimation from '../layout/StarFieldAnimation';
const Vigyaan = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
    
    <div className={scrolled ? "Vigyaanscrolled" : "Vigyaannotscrolled"}>
      <div className={scrolled ? "dark-overlay" : ""}></div>
          {/* <VigyaanInfo/> */}
          <StarFieldAnimation/>
          <VigyaanHero />
          <div className="AavartanContainer">
          <VigyaanGallery />
          <ProblemStatement />
          <VigyaanForm />
          </div>
        </div>
    
  )
}

export default Vigyaan