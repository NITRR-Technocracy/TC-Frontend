// import React from "react";
// import "./Timeline.scss";
// import oogway from "../assets/images/HomePage/oogway.png";
// import taiLung from "../assets/images/HomePage/tai-lung.png";
// import tigress from "../assets/images/HomePage/tigress.png";
// import kai from "../assets/images/HomePage/kai.png";
// import poDad from "../assets/images/HomePage/po-dad.png";
// import leftArrow from "../assets/svgs/leftarrow.svg";
// import rightArrow from "../assets/svgs/rightarrow.svg";
// import { Navigation, Autoplay } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

// export default function App() {
//   const handleInteraction = (swiper) => {
//     swiper.autoplay.stop();
//     setTimeout(() => {
//       if (swiper.autoplay) swiper.autoplay.start();
//     }, 7000);
//   };

//   const slides = [
//     {
//       year: "2007",
//       title: "THE BEGINNING",
//       content:
//         'The grand fest of Aavartan had its seed sown back in 2007, when few Technical enthusiasts came up with the idea of "Vigyaan"-the national level science exhibition, single event back then which eventually transformed into magnificent Aavartan as we see it today.',
//       image: taiLung,
//     },
//     {
//       year: "2011",
//       title: "VIGYAAN",
//       content:
//         "It was 2011, when people witnessed the massive transition of Vigyaan, a platform for innovative ideas, into a complete fest, Aavartan. The consistent efforts and out of the box ideas of the team members laid the foundation for what now is called as the trademark of tech-fests!",
//       image: tigress,
//     },
//     {
//       year: "2019",
//       title: "CENTRAL INDIA'S LARGEST TECH-FEST",
//       content:
//         "Team Technocracy took it to the next level as Aavartan'19 witnessed a footfall of over 10,000. The family of 200+ members left no stones unturned in creating a paradise for any tech-savvy. Their efforts bore a golden fruit as Aavartan reached the milestone of being recognized as the Central India's largest tech-fest.",
//       image: kai,
//     },
//     {
//       year: "2025",
//       title: "WE ARE COMING BACK",
//       content:
//         "Aavartan will be back with its new edition with stellar range of exciting tech savvy events and evening shows. Stay tuned with us through our social media handles to make sure you don't miss out on the next big tech revolution!",
//       image: poDad,
//     },
//   ];
//   return (
//     <div className="timeline-cont">
//       <div className="timeline-cont-inn">
//         {/* <Title color={"OUR"} noncolor={"JOURNEY"} /> */}
//         <h1 className="hm-title timeline-title" data-aos="fade-up">
//           <div>
//             <span>O</span>
//             <span>U</span>
//             <span>
//               R
//               <img src={oogway} alt="" />
//               <div className="quote-cont">
//                 <div className="quote shadow bottom">
//                   <p>
//                     Yesterday is history, tomorrow is a mystery, but today is a
//                     gift. That is why it is called the present.
//                   </p>
//                 </div>
//               </div>
//             </span>
//           </div>
//           <div>
//             <span>J</span>
//             <span>O</span>
//             <span>U</span>
//             <span>R</span>
//             <span>N</span>
//             <span>E</span>
//             <span>Y</span>
//           </div>
//         </h1>
//         <div className="swip-cont" data-aos="flip-up">
//           <div className="btn-prev">
//             <img src={leftArrow} alt="" />
//           </div>
//           <div className="innn-swipe-cont">
//             <Swiper
//               navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
//               modules={[Navigation, Autoplay]}
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               loop={false}
//               speed={1000}
//               direction="horizontal"
//               style={{ height: "100%" }}
//               onSlideChangeTransitionStart={handleInteraction}
//             >
//               {slides.map((slide, index) => (
//                 <SwiperSlide key={index} data-year={slide.year}>
//                   <div className="timeline">
//                     <div className="timeline-left">
//                       <img src={slide.image} alt="" />
//                     </div>
//                     <div className="timeline-right">
//                       <div className="slide-title">{slide.title}</div>
//                       <div className="slide-content">{slide.content}</div>
//                       <div className="year">{slide.year}</div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//           <div className="btn-next">
//             <img src={rightArrow} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React from "react";
import "./Timeline.scss";

/* TITLE IMAGE */
import crocodile from "../assets/images/About/crocodile.png";

/* SLIDE IMAGES — REPLACED */
import bear from "../assets/images/About/bear.png";
import panda from "../assets/images/About/panda.png";
import turtle from "../assets/images/About/turtle.png";
import horse from "../assets/images/About/horse.png";

import leftArrow from "../assets/svgs/leftarrow.svg";
import rightArrow from "../assets/svgs/rightarrow.svg";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Timeline() {
  const handleInteraction = (swiper) => {
    swiper.autoplay.stop();
    setTimeout(() => {
      if (swiper.autoplay) swiper.autoplay.start();
    }, 7000);
  };

  const slides = [
    {
      year: "2007",
      title: "THE BEGINNING",
      content:
        'The grand fest of Aavartan had its seed sown back in 2007, when few Technical enthusiasts came up with the idea of "Vigyaan"-the national level science exhibition.',
      image: bear,
    },
    {
      year: "2011",
      title: "VIGYAAN",
      content:
        "It was 2011 when Vigyaan transformed into a complete fest, Aavartan.",
      image: panda,
    },
    {
      year: "2019",
      title: "CENTRAL INDIA'S LARGEST TECH-FEST",
      content:
        "Aavartan'19 witnessed a footfall of over 10,000 and became Central India's largest tech-fest.",
      image: turtle,
    },
    {
      year: "2025",
      title: "WE ARE COMING BACK",
      content:
        "Aavartan returns with a new edition and exciting tech-savvy events.",
      image: horse,
    },
  ];

  return (
    <div className="timeline-cont">
      <div className="timeline-cont-inn">

        {/* TITLE — STRUCTURE UNCHANGED */}
        <h1 className="hm-title timeline-title biomimicry-title" data-aos="fade-up">
          <div>
            <span>O</span>
            <span>U</span>
            <span>
              R
              <img src={crocodile} alt="" className="title-animal" />
              <div className="quote-cont">
                <div className="quote shadow bottom">
                  <p>
                    Yesterday is history, tomorrow is a mystery, but today is a
                    gift. That is why it is called the present.
                  </p>
                </div>
              </div>
            </span>
          </div>
          <div>
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
            <span>N</span>
            <span>E</span>
            <span>Y</span>
          </div>
        </h1>

        {/* SLIDER — STRUCTURE UNCHANGED */}
        <div className="swip-cont" data-aos="flip-up">
          <div className="btn-prev">
            <img src={leftArrow} alt="" />
          </div>

          <div className="innn-swipe-cont">
            <Swiper
              navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={false}
              speed={1000}
              direction="horizontal"
              style={{ height: "100%" }}
              onSlideChangeTransitionStart={handleInteraction}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} data-year={slide.year}>
                  <div className="timeline">
                    <div className="timeline-left">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="timeline-right">
                      <div className="slide-title">{slide.title}</div>
                      <div className="slide-content">{slide.content}</div>
                      <div className="year">{slide.year}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="btn-next">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
