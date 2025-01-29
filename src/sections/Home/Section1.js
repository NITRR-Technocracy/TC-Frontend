import React from "react";
import title from "../../assets/images/HomePage/title.png";
import po from "../../assets/images/HomePage/po.png";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
import home_hero from "../../assets/videos/home-hero2.mp4";
import { useNavigate } from "react-router-dom";

//gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const navigate = useNavigate();

  // useGSAP(() => {
  //   gsap.set("#video-frame", {
  //     clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
  //     borderRadius: "0% 0% 40% 10%",
  //   });
  //   gsap.from("#video-frame", {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     borderRadius: "0% 0% 0% 0%",
  //     ease: "power1.inOut",
  //     scrollTrigger: {
  //       trigger: "#video-frame",
  //       start: "center center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //   });
  //});

  return (
    <div id="video-frame" className="Home-sec1">
      <video src={home_hero} muted autoPlay loop className="hero-vid"></video>
      <div className="title-cont">
        <div className="title-cont-inn">
          <img className="home-title" src={title} alt=""/>
        </div>
        {/* <div className="img-cont">
          <img className="po-img title-comp" src={po} alt="" />
        </div> */}
        <div className="btn-cont">
          <button className="btn-sec1" onClick={(e) => {
            navigate('/vigyaan')
          }}>VIGYAAN</button>
          <button className="btn-sec1" onClick={(e) => {
            navigate('/ignite')
          }}>igNITe</button>
        </div>
      </div>
    </div>
  );
}
