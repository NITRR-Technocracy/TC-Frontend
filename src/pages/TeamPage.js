import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../sections/Contact";
import Team from "../sections/Team";
import teamBg from "../assets/images/team-bg.webp"; // 👈 your background image

const TeamPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="team-bg"
      style={{
        backgroundImage: `url(${teamBg})`,
      }}
    >
      <div className="team-bg-overlay"></div>

      <div className="team-content">
        <Team />
        <Contact />
      </div>
    </div>
  );
};

export default TeamPage;
