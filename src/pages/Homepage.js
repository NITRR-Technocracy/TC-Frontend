import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Section1 from "../sections/Home/Section1";
import About from "../components/About";
import Timeline from "../sections/Timeline";
import Faq from "../sections/Faq";
import FullPageLoader from "../layout/FullPageLoader";

/* ✅ IMPORT THE WRAPPER */
import AboutFaqWrapper from "../sections/Home/AboutFaqWrapper";

import "../sections/Home/Home.scss";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div className="homecontainer">
          {/* HERO */}
          <Section1 />

          {/* ABOUT + TIMELINE + FAQ — SHARED BACKGROUND */}
          <AboutFaqWrapper>
            <About />
            <Timeline />
            <Faq />
          </AboutFaqWrapper>
        </div>
      )}
    </>
  );
};

export default Homepage;
