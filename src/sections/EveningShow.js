// import { useEffect } from "react";
// import sqrimg from "../assets/images/1x1-min.webp";
// import Title from "../components/Title";
// import left from "../assets/svgs/leftarrow.svg"
// import right from "../assets/svgs/rightarrow.svg"
// import prop19 from "../assets/Aavartan New/FRIENDS_202304_1821x1355_KeyArt02_Characters-2-1536x1143.png"

// // import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// import es_1 from "../assets/images/eveningshows/es_1.webp";
// import es_2 from "../assets/images/eveningshows/es_2.webp";
// import es_3 from "../assets/images/eveningshows/es_3.webp";
// import es_4 from "../assets/images/eveningshows/es_4.webp";
// import es_5 from "../assets/images/eveningshows/es_5.webp";
// import es_6 from "../assets/images/eveningshows/es_6.webp";
// import es_7 from "../assets/images/eveningshows/es_7.webp";
// import es_8 from "../assets/images/eveningshows/es_8.webp";
// import es_9 from "../assets/images/eveningshows/es_9.webp";
// import es_10 from "../assets/images/eveningshows/es_10.webp";
// import prop3 from "../assets/prop4.webp"
// import { keyframes, styled } from "styled-components";

// const rotate360 = keyframes`
// 0%,
// 100% {
//   right: 5%;
// }

// 50% {
//   right: 10%;
// } 
// `;
// const RotatingImage = styled.img`
//   animation: ${rotate360} 5s linear infinite;
// `;

// const EveningShow = () => {
//   // useEffect(() => {
//   //   AOS.init();
//   // }, []);
//   // Hero slider
//   useEffect(() => {
//     const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
//     fn_cs_slider.forEach((element) => {
//       let sliderTop = element.getElementsByClassName("slider_top")[0],
//         sliderBottom = element.getElementsByClassName("slider_content"),
//         activeIndex = 2,
//         speed = 6000;

//       let myInterval = setInterval(function () {
//         activeIndex++;
//         activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//       }, speed);
//       const prev = document.querySelector(".slider_nav .prev"),
//         next = document.querySelector(".slider_nav .next"),
//         li = element.getElementsByTagName("li");
//       prev.addEventListener("click", function (e) {
//         e.preventDefault();
//         clearInterval(myInterval);
//         activeIndex--;
//         activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//         myInterval = setInterval(function () {
//           activeIndex++;
//           activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//         }, speed);
//         return false;
//       });
//       next.addEventListener("click", (e) => {
//         e.preventDefault();
//         clearInterval(myInterval);
//         activeIndex++;
//         activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//         myInterval = setInterval(function () {
//           activeIndex--;
//           activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//         }, speed);
//         return false;
//       });
//       for (let i = 0; i < li.length; i++) {
//         const liElement = li[i];
//         const getClass = liElement.getAttribute("class");
//         if (getClass === "next") {
//           activeIndex++;
//         } else if (getClass === "prev") {
//           activeIndex--;
//         } else {
//           return false;
//         }
//         clearInterval(myInterval);
//         activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//         myInterval = setInterval(function () {
//           activeIndex++;
//           activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
//         }, speed);
//         return false;
//       }
//     });
//   }, []);

//   const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
//     var topLength = sliderTop.getElementsByTagName("li").length;
//     if (activeIndex > topLength) {
//       activeIndex -= topLength;
//     }
//     var indexPrev = activeIndex - 1;
//     var indexPrev2 = activeIndex - 2;
//     var indexNext = activeIndex + 1;
//     var indexNext2 = activeIndex + 2;
//     if (indexPrev > topLength) {
//       indexPrev -= topLength;
//     }
//     if (indexPrev2 > topLength) {
//       indexPrev2 -= topLength;
//     }
//     if (indexNext > topLength) {
//       indexNext -= topLength;
//     }
//     if (indexNext2 > topLength) {
//       indexNext2 -= topLength;
//     }
//     if (indexPrev < 1) {
//       indexPrev += topLength;
//     }
//     if (indexPrev2 < 1) {
//       indexPrev2 += topLength;
//     }
//     if (activeIndex < 1) {
//       activeIndex += topLength;
//     }
//     if (indexNext < 1) {
//       indexNext += topLength;
//     }
//     if (indexNext2 < 1) {
//       indexNext2 += topLength;
//     }
//     let li = sliderTop.getElementsByTagName("li");
//     for (let i = 0; i < li.length; i++) {
//       const element = li[i];
//       element.classList.remove("prev", "prev2", "active", "next", "next2");
//       // element.setAttribute(`data-index${indexNext}`);
//     }
//     sliderTop
//       .querySelector('li[data-index="' + indexPrev2 + '"]')
//       .classList.add("prev2");
//     sliderTop
//       .querySelector('li[data-index="' + indexPrev + '"]')
//       .classList.add("prev");
//     sliderTop
//       .querySelector('li[data-index="' + activeIndex + '"]')
//       .classList.add("active");
//     sliderTop
//       .querySelector('li[data-index="' + indexNext + '"]')
//       .classList.add("next");
//     sliderTop
//       .querySelector('li[data-index="' + indexNext2 + '"]')
//       .classList.add("next2");
//     return activeIndex;
//   };

//   const color = "EVENING";
//   const noncolor = "SHOWS";

//   return (
//     <section id="home">
//       <div className="container eveningContainer">
//         <Title color={color} noncolor={noncolor} />
//         {/* <AnimatedDiv>
//                     <img style={{position:"absolute", top:"220vh", right:"5%", animation: "${rocketAnimation} 5s infinite"}} height={200} src={prop3} alt="Rocket thumb" />
//                     </AnimatedDiv> */}
//         <RotatingImage className="rimageaav"  src={prop19} alt="Rocket thumb" />
//         <div data-aos="fade-down" className="fn_cs_desc">
//           <p style={{margin:"0"}}>
//             The evening shows at Aavartan are a spectacle to behold, featuring
//             captivating dance performances by "Nrityam," the dance club of NIT
//             Raipur, grooving music performances by "Raaga," the music club of
//             NIT Raipur, and an electrifying DJ night/EDM night.
//           </p>
//         </div>
//         {/* Slider */}
//         <div  className="fn_cs_slider" data-responsive="on">
//           <div className="slider_top">
//             <img src={sqrimg} alt="" />
//             <ul>
//               <li className="prev" data-index={1}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_1})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li className="active" data-index={2}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_2})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li className="next" data-index={3}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_3})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li className="next2" data-index={4}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_4})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li data-index={5}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_5})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li data-index={6}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_6})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li data-index={7}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_7})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li data-index={8}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_8})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li data-index={9}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_9})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//               <li className="prev2" data-index={10}>
//                 <div className="item">
//                   <img src={sqrimg} alt="" />
//                   <div className="item_in">
//                     <div
//                       className="img"
//                       style={{
//                         backgroundImage: `url(${es_10})`,
//                         backgroundSize: "cover", // Adjust this as needed
//                         backgroundPosition: "center", // Adjust this as needed
//                       }}
//                     />
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="slider_nav">
//             <a href="#" className="prev">
//               <span className="circle" />
//               <span className="icon">
//                 {/* <AiOutlineArrowLeft color="white" /> */}
//                 <img src={left} alt="" />
//               </span>
//               <span className="circle" />
//             </a>
//             <a href="#" className="next">
//               <span className="circle" />
//               <span className="icon">
//                 <img src={right} alt="" />
//                 {/* <AiOutlineArrowRight color="white" /> */}
//               </span>
//               <span className="circle" />
//             </a>
//           </div>
//         </div>
//         {/* !Slider */}
//         {/* Description */}

//         {/* !Description */}
//       </div>
//     </section>
//   );
// };
// export default EveningShow;



import React, { useState, useEffect, useCallback } from "react";
import Title from "../components/Title";
import { keyframes, styled } from "styled-components";

// Asset Imports
import leftArrow from "../assets/svgs/leftarrow.svg";
import rightArrow from "../assets/svgs/rightarrow.svg";
import es_1 from "../assets/images/eveningshows/es_1.webp";
import es_2 from "../assets/images/eveningshows/es_2.webp";
import es_3 from "../assets/images/eveningshows/es_3.webp";
import es_4 from "../assets/images/eveningshows/es_4.webp";
import es_5 from "../assets/images/eveningshows/es_5.webp";

// --- Animations ---
const bioluminescentPulse = keyframes`
  0%, 100% { border-color: rgba(126, 217, 87, 0.5); box-shadow: 0 0 15px rgba(126, 217, 87, 0.2); }
  50% { border-color: rgba(0, 255, 255, 0.8); box-shadow: 0 0 35px rgba(0, 255, 255, 0.4); }
`;

// --- Styled Components ---
const EveningSection = styled.section`
  position: relative;
  padding: 6rem 0; /* Increased padding for better section separation */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Description = styled.p`
  max-width: 850px;
  text-align: center;
  color: #ffffff; /* Pure white for maximum contrast */
  font-size: 1.2rem; /* Matches Hero readability */
  line-height: 1.7;
  margin: 2rem auto;
  padding: 2rem 3rem;
  background: rgba(18, 10, 25, 0.75); /* Consistent with Hero section */
  backdrop-filter: blur(12px);
  border-radius: 30px;
  border: 1px solid rgba(126, 217, 87, 0.3); /* Subtle green border for tech feel */
  z-index: 5;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
    margin: 1.5rem 1rem;
    width: 90%;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  margin-top: 2rem; 

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const CardWrapper = styled.div`
  position: absolute;
  width: 420px; 
  height: 460px; 
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  filter: ${props => props.filter};

  @media (max-width: 768px) {
    width: 260px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 260px;
  }
`;

const LeafFrame = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => (props.index % 2 === 0 ? "0 70% 0 70%" : "70% 0 70% 0")};
  border: 3px solid rgba(126, 217, 87, 0.6);
  animation: ${bioluminescentPulse} 5s infinite ease-in-out;
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
  transform: scale(1.1);
`;

const Controls = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 30px; /* More breathing room */
  z-index: 20;

  @media (max-width: 768px) {
    gap: 40px;
    margin-top: 20px;
  }
`;

const NavBtn = styled.button`
  background: rgba(126, 217, 87, 0.3);
  border: 2px solid rgba(126, 217, 87, 0.7);
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(126, 217, 87, 0.5);
    box-shadow: 0 0 20px rgba(126, 217, 87, 0.6);
    transform: scale(1.1);
  }

  img {
    width: 24px;
    filter: brightness(0) invert(1);
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    img { width: 18px; }
  }
`;

const EveningShow = () => {
  const images = [es_1, es_2, es_3, es_4, es_5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const getCardStyles = (index) => {
    const total = images.length;
    const diff = (index - currentIndex + total) % total;
    const spacing = isMobile ? 180 : 380;

    if (diff === 0) {
      return {
        zIndex: 10,
        opacity: 1,
        transform: "translateX(0) translateY(-15px) scale(1) rotate(0deg)",
        filter: "brightness(1.1)",
      };
    } else if (diff === 1 || (diff === -(total - 1))) {
      return {
        zIndex: 5,
        opacity: 0.8,
        transform: `translateX(${spacing}px) translateY(15px) scale(0.8) rotate(12deg)`,
        filter: "brightness(0.5) grayscale(20%)",
      };
    } else if (diff === total - 1 || (diff === -1)) {
      return {
        zIndex: 5,
        opacity: 0.8,
        transform: `translateX(-${spacing}px) translateY(15px) scale(0.8) rotate(-12deg)`,
        filter: "brightness(0.5) grayscale(20%)",
      };
    } else {
      return {
        zIndex: 0,
        opacity: 0,
        transform: "translateX(0) scale(0.5) rotate(0deg)",
        filter: "brightness(0)",
      };
    }
  };

  return (
    <EveningSection>
      <Title color="EVENING" noncolor="SHOWS" />
      
      <Description>
        The evening shows at Aavartan are a spectacle to behold, featuring 
        captivating dance performances by "Nrityam," the dance club of NIT Raipur, 
        grooving music performances by "Raaga," the music club of NIT Raipur, 
        and an electrifying DJ night/EDM night.
      </Description>
      
      <CarouselContainer>
        {images.map((img, index) => {
          const cardStyles = getCardStyles(index);
          return (
            <CardWrapper key={index} {...cardStyles}>
              <LeafFrame index={index}>
                <EventImage src={img} alt={`Evening Show ${index + 1}`} />
              </LeafFrame>
            </CardWrapper>
          );
        })}
      </CarouselContainer>

      <Controls>
        <NavBtn onClick={handlePrev}>
          <img src={leftArrow} alt="Previous" />
        </NavBtn>
        <NavBtn onClick={handleNext}>
          <img src={rightArrow} alt="Next" />
        </NavBtn>
      </Controls>
    </EveningSection>
  );
};

export default EveningShow;