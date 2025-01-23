import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Faq from "../sections/Faq";
import FullPageLoader from "../layout/FullPageLoader";
import About from "../components/About";
import Timeline from "../sections/Timeline";
import Section1 from "../sections/Home/Section1";
import "../sections/Home/Home.scss";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div className="homecontainer">
          {/* <div className="dark-overlay" style={{position:"relative", zIndex:"0"}}></div> */}
          <Section1 />
          {/* <HomeHero /> */}
          {/* <RecruitForm/> */}
          <About />
          {/* <Blog/> */}
          <Timeline />
          <Faq />
          {/* <RecruitForm/> */}
          <About />
          {/* <Blog/> */}
          <Timeline />
          <Faq />
        </div>
      )}
    </>
  )
}
export default Homepage;
