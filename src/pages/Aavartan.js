// import React, { useEffect, useState } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import EveningShow from '../sections/EveningShow'
// import EventsGallery from '../sections/EventsGallery'
// import AavartanHero from '../sections/hero/AavartanHero'
// import { useLocation } from 'react-router-dom';
// // import StarFieldAnimation from '../layout/StarFieldAnimation';
// import Merchandise from '../sections/Merchandise';


// const Aavartan = () => {
//     const location = useLocation();
//     const [activeLink, setActiveLink] = useState(null);
//     const [scrolled, setScrolled] = useState(false);
 
//   useEffect(() => {
//     AOS.init({ duration: 1000, });
//     window.scrollTo(0, 0)
    
//   }, [])

//   useEffect(() => {
//     setActiveLink(location.pathname);
//                     // Add event listener for scroll
//                     window.addEventListener("scroll", handleScroll);

//                     // Cleanup the event listener on unmount
//                     return () => {
//                         window.removeEventListener("scroll", handleScroll);
//                     };
// }, [location.pathname]);

// const handleScroll = () => {
//     if (window.scrollY > 600) {
//         setScrolled(true); // User has scrolled down
//     } else {
//         setScrolled(false); // User is at the top
//     }
// };


//   return (
//     <div className="Aavartanscrolled">
//       {/* <div className='plant-container'>
//         <img src={plant} alt="plant" className='plant'/>  
//         </div> */}
//       <div className={scrolled ? "dark-overlay" : ""}></div>
//           {/* <StarFieldAnimation/> */}
//           {/* <Events/> */}
//           {/* <AavartanHero/> */}
//           <AavartanHero />
//           <div className='AavartanContainer'>
//             <EveningShow />
//             <EventsGallery />
//             <Merchandise/>
//           </div>
        
//         </div>
    
   
//   )
// }

// export default Aavartan


// ---------------------------2026----------------------
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EveningShow from '../sections/EveningShow';
import EventsGallery from '../sections/EventsGallery';
import AavartanHero from '../sections/hero/AavartanHero';
import { useLocation } from 'react-router-dom';
import Merchandise from '../sections/Merchandise';

const Aavartan = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        
        // Toggle 'scrolled' state for fixed binary changes
        if (position > 600) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        // Calculate dynamic opacity for the "glow transition"
        // Adjust 1.2 and 0.85 to control how fast it darkens and the max darkness
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercentage = Math.min((position / height) * 1.2, 0.85); 
        setScrollOpacity(scrolledPercentage);
    };

    return (
        <div className="Aavartanscrolled">
            {/* Dynamic Interactive Overlay */}
            <div 
                className="scrolling-overlay" 
                style={{ 
                    opacity: scrollOpacity,
                    backdropFilter: `saturate(${1 + scrollOpacity * 0.5})` 
                }} 
            ></div>

            {/* Binary Dark Overlay for AOS or specific transitions */}
            <div className={scrolled ? "dark-overlay active" : "dark-overlay"}></div>

            <AavartanHero />
            
            <div className='AavartanContainer'>
                <EveningShow />
                <EventsGallery />
                <Merchandise />
            </div>
        </div>
    );
}

export default Aavartan;