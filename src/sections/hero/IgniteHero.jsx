// import planet from "../../assets/images/vighero/minecraft-png-13361.png";
// import VigyaanStyleWrapper from "./VigyaanHero.style";
// import font from '../../assets/Aavartan New/VIGYAAN-12-8-2024.png'
// import prop5 from "../../assets/minecraft-png-13354.png";
// import prop7 from "../../assets/minecraft-png-13357.png"
// // import RocketButton from "../../components/RocketButton";

// const VigyaanHero = () => {
//   const scrollToRegistration = () => {
//     const registrationElement = document.getElementById("registration");
//     if (registrationElement) {
//       registrationElement.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <>
//       <VigyaanStyleWrapper>
//         <div className="container">
//           <div className="vigyaan-planet">
//             <img src={planet} alt="" />
//             <div className="vigyaan-font">
//               <img src={font} alt="" />
//             </div>
//           </div>
//           {/* <img className="asto" src={prop8} alt="asto" /> */}
//           <img className="planet1" src={prop5} alt="pl1" />
//           <img className="planet3" src={prop7} alt="pl3" />
//           <div className="vigyaan-desc">
//             Vigyaan, the science exhibition organized during the tech fest,
//             showcases groundbreaking innovations, cutting-edge technologies, and
//             exciting projects, providing a platform for students to delve deeper
//             into the world of science and explore limitless possibilities.
//           </div>
//           {/* <img className="vigyaan-ring" src={ring} alt="name" /> */}

//           <div className="btncontainer2" style={{ display: "flex" }}>
//             {/* <a href="#" className="funkybtn">Click Here To Register</a> */}
//             <a className="cta2">
//               {/* <span>CLICK TO REGISTER</span> */}
//               <span >The Wait is Almost Over!
// </span>
//               {/* <span>Registrations open</span> */}
//             </a>
//           </div>

//           {/* <div className="row">
//             <div className="col-md-6">
//               <div className="gamfi_v2_hero_left">
//                 <h2>
//                   Welcome to Vigyaan
//                 </h2>
//                 <p>
//                   2023
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="gamfi_v2_hero_right">
//                 <div className="gamfi_v2_hero_thumb">
//                   <span className="rocket_thumb">
//                     <img height="200px"  src={rocketThumb} alt="Rocket thumb" />
//                   </span>

//                   {particles?.map((particle, i) => (
//                     <span
//                       key={i}
//                       className={`rocket_particle particle_${i + 1}`}
//                     >
//                       <img src={particle} alt="rocket particle" />
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </VigyaanStyleWrapper>
//     </>
//   );
// };

// export default VigyaanHero;



// ------------2026 -------------------------
import VigyaanStyleWrapper from "./IgniteHero.style";
import { useNavigate } from "react-router-dom";
import titleImg from "../../assets/images/vighero26/ignite_title-2.png";
import chameleonImg from "../../assets/images/vighero26/chameleon.webp";

const VigyaanHero = () => {
  const navigate = useNavigate();

  const goToRegistration = () => {
    const el = document.getElementById("registration");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Fallback: navigate to Ignite page then scroll to registration
    navigate("/ignite");
    setTimeout(() => {
      const e = document.getElementById("registration");
      if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <VigyaanStyleWrapper>
      <div className="container">
        <div className="title-container">
          <img className="chameleon" src={chameleonImg} alt="Chameleon" />
          <img src={titleImg} alt="IGNITE" className="main-title-img" />
        </div>

        <div className="hero-content">
          <div className="vigyaan-desc">
            Vigyaan, the science exhibition organized during the tech fest,
            showcases groundbreaking innovations, cutting-edge technologies, and
            exciting projects, providing a platform for students to delve deeper
            into the world of science and explore limitless possibilities.
          </div>

          <div className="btncontainer2">
            <div className="uiverse-play-btn">
              <style>{`
.uiverse-play-btn button {
  position: relative;
  width: 14em;
  height: 4.5em;
  outline: none;
  transition: 0.12s;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 800;
  color: #ddebf0;
}

.uiverse-play-btn #clip {
  --color: #2761c3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 6px double var(--color);
  box-shadow: inset 0px 0px 20px #195480;
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.uiverse-play-btn .arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 32%;
  width: 13%;
  height: 36%;
}

.uiverse-play-btn #leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

.uiverse-play-btn #rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
}

.uiverse-play-btn button:hover #rightArrow {
  background-color: #27c39f;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

.uiverse-play-btn button:hover #leftArrow {
  background-color: #27c39f;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.uiverse-play-btn .corner {
  position: absolute;
  width: 5em;
  height: 5em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 10px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

.uiverse-play-btn #rightTop {
  top: -2.6em;
  left: 92%;
}

.uiverse-play-btn #leftTop {
  top: -2.6em;
  left: -3.6em;
}

.uiverse-play-btn #leftBottom {
  top: 2.6em;
  left: -2.6em;
}

.uiverse-play-btn #rightBottom {
  top: 46%;
  left: 88%;
}

.uiverse-play-btn button:hover #leftTop {
  animation: 0.1s ease-in-out 0.05s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

.uiverse-play-btn button:hover #rightTop {
  animation: 0.1s ease-in-out 0.15s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

.uiverse-play-btn button:hover #rightBottom {
  animation: 0.1s ease-in-out 0.25s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

.uiverse-play-btn button:hover #leftBottom {
  animation: 0.1s ease-in-out 0.35s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

.uiverse-play-btn button:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

.uiverse-play-btn button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}

@keyframes changeColor8 {
  from { background-color: #2781c3; }
  to { background-color: #27c39f; }
}

@keyframes lightEffect8 {
  from { box-shadow: 1px 1px 5px #27c39f; }
  to { box-shadow: 0 0 2px #27c39f; }
}

@keyframes greenLight8 {
  from { }
  to { box-shadow: inset 0px 0px 32px #27c39f; }
}

@keyframes leftArrow8 {
  from { transform: translate(0px); }
  to { transform: translateX(10px); }
}

@keyframes rightArrow8 {
  from { transform: translate(0px); }
  to { transform: translateX(-10px); }
}
              `}</style>

              <button onClick={goToRegistration}>
                REGISTER NOW
                <div id="clip">
                  <div id="leftTop" className="corner"></div>
                  <div id="rightBottom" className="corner"></div>
                  <div id="rightTop" className="corner"></div>
                  <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </VigyaanStyleWrapper>
  );
};

export default VigyaanHero;

// Include SVG filters used by the button (hand-drawn noise)

// SVG filters appended so `filter: url(#handDrawnNoise)` works for the button
const SvgFilters = () => (
  <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden>
    <filter id="handDrawnNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="8" />
      <feDisplacementMap in="SourceGraphic" scale="3" />
    </filter>

    <filter id="handDrawnNoise2">
      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="8" seed="77" />
      <feDisplacementMap in="SourceGraphic" scale="3" />
    </filter>
  </svg>
);

// Insert filters into the DOM when this module is imported
if (typeof document !== 'undefined') {
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.width = '0';
  container.style.height = '0';
  container.setAttribute('aria-hidden', 'true');
  container.innerHTML = `
    <svg width="0" height="0">
      <filter id="handDrawnNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="8"/>
        <feDisplacementMap in="SourceGraphic" scale="3"/>
      </filter>
      <filter id="handDrawnNoise2">
        <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="8" seed="77"/>
        <feDisplacementMap in="SourceGraphic" scale="3"/>
      </filter>
    </svg>
  `;
  document.body.appendChild(container);
}

