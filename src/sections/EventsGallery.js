
// import { useEffect } from "react";
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// import sqrimg from '../assets/images/1x1-min.webp'
// import a1 from "../assets/images/aavartan/a1.webp"
// import a2 from "../assets/images/aavartan/a2.webp"
// import a3 from "../assets/images/aavartan/a3.webp"
// import a4 from "../assets/images/aavartan/a4.webp"
// import a5 from "../assets/images/aavartan/a5.webp"
// import a6 from "../assets/images/aavartan/a6.webp"
// import a7 from "../assets/images/aavartan/a7.webp"
// import a8 from "../assets/images/aavartan/a8.webp"
// import Title from "../components/Title";
// import { Link } from "react-router-dom";

// const EventsGallery = () => {
//   // useEffect(() => {
//   //   AOS.init();
//   // }, [])
//   useEffect(() => {
//     // const collection = document.querySelector(".fn_cs_collection");
//     // var items = collection.querySelectorAll(".item");
//     // var itemsLength = items.length;
//     // setInterval(function () {
//     //   var numberOne = Math.floor(Math.random() * itemsLength);
//     //   var numberTwo = Math.floor(Math.random() * itemsLength);

//     //   while (numberTwo === numberOne) {
//     //     numberTwo = Math.floor(Math.random() * itemsLength);
//     //   }
//     //   var firstDiv = items[numberOne];
//     //   var secondDiv = items[numberTwo];
//     //   firstDiv.classList.add("ready");
//     //   secondDiv.classList.add("ready");
//     //   setTimeout(function () {

//     //     firstDiv.classList.remove("ready");
//     //     secondDiv.classList.remove("ready");
//     //   }, 500);
//     // }, 2000);
//   }, []);


//   const color="EVENTS";
//   const noncolor="GALLERY"

//   return (
//     <section id="collection">
//       <div className="container collectionContainer">
//       <Title color={color} noncolor={noncolor}/>
//       <div  className="fn_cs_desc">
//           <p>
//           The festivity of Aavartan starts with some Pre Aavartan events such as sky gazing and scribble followed by a whole series of breathtaking events such as treasure hunt, circuitrix, robotrek, Blind coding, Open Mic, Hydrolift and many more engaging the whole crowd and making their each and every bit getting involved in this festivism.
//           </p>
//         </div>
//         <div className="fn_cs_collection">
//           <div className="collection_top">
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a2})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/1.webp" />
//             </div>
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a1})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/2.webp" />
//             </div>
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a3})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/3.webp" />
//             </div>
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a8})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/4.webp" />
//             </div>
//           </div>
//           <div className="collection_bottom">
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a6})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/5.webp" />
//             </div>
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a7})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/6.webp" />
//             </div>
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a4})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/7.webp" />
//             </div>
//             <div className="item">
//               <div  className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${a5})`,
//                       backgroundSize: 'cover', // Adjust this as needed
//                       backgroundPosition: 'center', // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/8.webp" />
//             </div>
//           </div>
//         </div>
//         <div className="fn_cs_desc">
//           <Link style={{textDecoration:"none", color:"white"}} to="/aavartan/gallery">
//         <div
//             className="goodbtn"
//             target="_blank"
//             rel="noreferrer"
//             style={{margin:"2rem 0", position:"relative", zIndex:"1"}}
//           > <span>
//             Show More
//             </span>
//           </div>
//             </Link>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default EventsGallery;

// --------------------------------------------------2026------------------------------------------
import React, { useState, useCallback, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Title from "../components/Title";
import { Link } from "react-router-dom";

import leftArrow from "../assets/svgs/leftarrow.svg";
import rightArrow from "../assets/svgs/rightarrow.svg";

// Event Images
import a1 from "../assets/images/aavartan/a1.webp";
import a2 from "../assets/images/aavartan/a2.webp";
import a3 from "../assets/images/aavartan/a3.webp";
import a4 from "../assets/images/aavartan/a4.webp";
import a5 from "../assets/images/aavartan/a5.webp";
import a6 from "../assets/images/aavartan/a6.webp";
import a7 from "../assets/images/aavartan/a7.webp";
import a8 from "../assets/images/aavartan/a8.webp";

const float = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50% { transform: translate(-50%, -50%) translateY(-15px); }
`;

const GallerySection = styled.section`
  position: relative;
  width: 100%;
  padding: 8rem 0; /* More breathing room between sections */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 500px; /* Increased height to prevent clipping */
  margin-top: 3rem; 
  perspective: 1200px; 
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 260px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(126, 217, 87, 0.6);
  border-radius: 15px;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.transform};

  ${(props) => props.isActive && css`
    border-color: #6be862;
    box-shadow: 0 0 35px rgba(107, 232, 98, 0.4);
    animation: ${float} 4s ease-in-out infinite;
  `}

  @media (max-width: 768px) {
    width: 280px;
    height: 200px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13px;
  filter: ${(props) => (props.isActive ? "brightness(1.1)" : "brightness(0.4) grayscale(50%)")};
  transition: filter 0.4s ease;
`;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(21, 91, 4, 0.7); 
  border: 2px solid #6be862;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) => (props.left ? "left: 2%;" : "right: 2%;")}

  &:hover {
    background: #6be862;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 20px #6be862;
  }

  img {
    width: 24px;
    filter: brightness(0) invert(1);
  }
`;

const StyledButton = styled.div`
  position: relative;
  display: inline-flex;
  padding: 16px 50px;
  background: transparent;
  border: 2px solid #6be862;
  border-radius: 50px;
  color: #6be862;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    color: #000;
    background: #6be862;
    box-shadow: 0 0 30px rgba(107, 232, 98, 0.6);
  }
`;

const EventsGallery = () => {
  const images = [a1, a2, a3, a4, a5, a6, a7, a8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const getStyles = (index) => {
    const total = images.length;
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;
    const absDiff = Math.abs(diff);
    const xSpacing = isMobile ? 150 : 300;
    const transform = `translate(-50%, -50%) translateX(${diff * xSpacing}px) translateZ(${absDiff * -200}px) rotateY(${diff * -25}deg) scale(${1 - absDiff * 0.15})`;

    return {
      zIndex: 10 - absDiff, 
      opacity: absDiff > 2 ? 0 : 1, 
      transform,
      isActive: diff === 0
    };
  };

  return (
    <GallerySection id="collection">
      <Title color="EVENTS" noncolor="GALLERY" />
      
      <SliderContainer>
        <NavBtn left onClick={prevSlide}><img src={leftArrow} alt="Prev" /></NavBtn>
        <NavBtn onClick={nextSlide}><img src={rightArrow} alt="Next" /></NavBtn>

        {images.map((img, index) => {
          const style = getStyles(index);
          return (
            <Card key={index} {...style} onClick={() => index !== currentIndex && setCurrentIndex(index)}>
              <CardImage src={img} alt={`Event ${index}`} isActive={style.isActive} />
            </Card>
          );
        })}
      </SliderContainer>

      <div style={{ marginTop: "4rem" }}>
        <Link style={{ textDecoration: "none" }} to="/aavartan/gallery">
          <StyledButton>Explore All</StyledButton>
        </Link>
      </div>
    </GallerySection>
  );
};

export default EventsGallery;