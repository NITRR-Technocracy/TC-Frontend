import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Spons from '../sections/Spons';

const SponsorsPage = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);

    const vantaEffect = window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1e90ff,
      backgroundColor: 0x000000,
    });

    // Cleanup
    return () => vantaEffect.destroy();
  }, []);

  return (
    <div ref={vantaRef} className="Homescrolled" >
      <Spons />
    </div>
  );
};

export default SponsorsPage;
