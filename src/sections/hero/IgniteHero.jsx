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
import snail_head_or from "../../assets/ignite_images/snail_head.webp";
import snail_head_pur from "../../assets/ignite_images/snail_shell_purple.webp";
import snail_head_ye from "../../assets/ignite_images/snail_head_yellow.webp";
import snail_head_gr from "../../assets/ignite_images/snail_head_2.webp";

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
      <img className="chameleon" src={snail_head_or} alt="Chameleon" />
      <img src={titleImg} alt="IGNITE" className="main-title-img" />
    </div>

    <div className="hero-content">
      <div className="vigyaan-desc">
        Vigyaan, the science exhibition organized during the tech fest,
        showcases groundbreaking innovations, cutting-edge technologies, and
        exciting projects, providing a platform for students to delve deeper
        into the world of science and explore limitless possibilities.
      </div>

<div className="closed-status-container">
  <style>{`
    .closed-status-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 40px 10px;
      background: transparent; /* The outer area remains transparent */
      box-sizing: border-box;
    }

    .closed-label-solid {
      /* Fluid typography for responsiveness */
      font-size: clamp(1rem, 4.5vw, 1.8rem); 
      font-weight: 900;
      color: #ff0000;
      
      /* Pure Black Background for the label box */
      background-color: #000000;
      
      /* Neon Border */
      border: 2px solid #ff0000;
      padding: clamp(10px, 2.5vw, 18px) clamp(25px, 6vw, 50px);
      
      text-transform: uppercase;
      letter-spacing: clamp(2px, 1.2vw, 6px);
      border-radius: 4px;
      text-align: center;
      
      /* Strong Neon Glows */
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 10px rgba(255, 0, 0, 0.2);
      
      width: fit-content;
      max-width: 90%;
      user-select: none;
      line-height: 1.2;
      
      /* Animation to keep that 'Vigyaan' tech energy */
      animation: neonPulse 3s infinite alternate;
    }

    @keyframes neonPulse {
      0% { box-shadow: 0 0 15px rgba(255, 0, 0, 0.4); transform: scale(1); }
      100% { box-shadow: 0 0 25px rgba(255, 0, 0, 0.7); transform: scale(1.02); }
    }
  `}</style>
  
  <div className="closed-label-solid">
    REGISTRATION CLOSED!
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

