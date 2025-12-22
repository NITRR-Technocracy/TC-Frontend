// import styled, { keyframes } from "styled-components";
// import bannerBG from "../../assets/images/vighero/vig_bg.webp";

// const rotate360 = keyframes`
//   0% {
//     transform: rotate(0deg);
//     right: 5%;
//   }
//   50% {
//     right: 15%;
//   }
//   100% {
//     right: 5%;
//   }
// `;

// const quarterCircle = keyframes`
//   0% {
//     bottom: 0;
//   }
//   50% {
//     bottom: 30%;
//   }
//   100% {
//     bottom: 0;
//   }
// `;

// const Circle = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   50% {
//     transform: translate(80px, -80px);
//     transform: rotate(30deg);
//   }
//   100%{
//     transform: rotate(0deg);
//   }
// `;
// const popIn = keyframes`
//   0% {
//     transform: scale(0.5);
//     opacity: 0;
//   }
//   70% {
//     transform: scale(1.05);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1);
//   }
// `;

// const VigyaanStyleWrapper = styled.section`

//   position: relative;
//   // min-height: 100vh;
//   padding: 0;
//   overflow: hidden;
//   animation: ${popIn} 2s ease forwards; 
   
//   .container{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//   }
//   .asto {
//     position: absolute;
//     top: 110vh;
//     left: 5vw;
//     height: 400px;
//   }

//   .planet1 {
//     position: absolute;
//     top: 10vh;
//     right: 0%;
//     height: 10vmax;
//     animation: ${rotate360} 15s linear infinite;
//   }

//   .planet2 {
//     animation: ${quarterCircle} 4s linear infinite;
//     left: 0%;
//     height: 10vmax;
//   }

//   .planet3 {
//     position: absolute;
//     top: 30vh;
//     left: 2vw;
//     height: 10vmax;
//     animation: ${Circle} 6s linear infinite;
//   }

//   .vigyaan-planet {
//     position: relative;
//     width: 35vw;
//     z-index: 1;
//     margin-top: 100px;
//     margin-bottom: 20px;
//   }
//   .vigyaan-planet>img{
//     object-fit: contain;
//     object-position: center;
//     width: 100%;
//     height: 100%;
//   }

//   .vigyaan-font img {
//      max-height:25vmin;
//      max-width: 80vw;
//   }

//   .vigyaan-font {
//     left: 50%;
//     position: absolute;
//     transform: translateX(-50%);
//     top: 25%;
//     font-size: 5.5rem;
//     color: black;
//     font-family:;
//     z-index: 2;
//     font-weight: 900;
//     text-shadow: 2px 2px 5px #fe7be5d1;
//   }

//   .vigyaan-desc {
//     // position: absolute;
//     // top: 52vh; left:50%;
//     // transform: translateX(-50%);
//     text-align:center;
//     z-index: 2;
//     font-family: 'VigyaanFont';
//     font-weight:700;
//     font-size:1rem;
//     color: white;
//     z-index: 2;
//     width:70%;
//     letter-spacing:2px;
//     background: rgba(75, 0, 130, 0.3); /* Slightly transparent black */
//     color: #fff; /* White text for contrast */
//     padding: 10px; /* Space around the content */
//     border-radius: 5px; /* Smooth rounded corners */
//     box-shadow: 0 4px 10px rgba(0, 0, 130, 0.5);
//   }

//   .vigyaan-ring {
//     animation: ring-animation 3s;
//     animation-iteration-count: 1;
//     left: 50%;
//     position: absolute;
//     top: 58vh;
//     transform: translateX(-50%);
//     width: 70vw;
//     z-index: 2;
//   }

//   .btncontainer2 {
//     margin-top: 50px;
//   }


//   .cta2 {
//     // height: 100px;
//     // // width: calc(var(--btn-size) * 10);
//     min-width: 30vw;
//     cursor: pointer;
//     overflow: hidden;
//     white-space: nowrap;
//     user-select: none;
//     background: #999 url("https://i.ibb.co/rb2TWXL/bgbtn.png") center/cover;
//     image-rendering: pixelated;
//     border: 2px solid #000;
//     font-family: 'Minecraftia';
//   }


//   .cta2:hover span {
//   background-color: rgba(100, 100, 255, 0.45);
//   text-shadow: 2px 2px #202013CC;
//   color: #FFFFA0;
// }

//   .cta2:active span {
//   box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
// }

//   .cta2 span {
//     width: 100%;
//     height: 100%;
//     padding: .5rem 1rem;
//     padding-bottom: .8rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #DDD;
//     text-shadow: 2px 2px #000A;
//     box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;
//   }

//   .cta2 span:nth-child(2) {
//     width: 20px;
//     margin-left: 30px;
//     position: relative;
//     top: 12%;
//   }

//   @keyframes color_anim {
//     0% {
//       fill: white;
//     }
//     50% {
//       fill: #fbc638;
//     }
//     100% {
//       fill: white;
//     }
//   }

  

//   // Add remaining media queries and other styles

// `;

// export default VigyaanStyleWrapper;




// ---------------------2026----------------------
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const VigyaanStyleWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center; /* Vertical Center */
  justify-content: center; /* Horizontal Center */
  background: transparent;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 100%;
  }

  .chameleon {
    position: absolute;
    left: 25px; 
    top: 15%;
    height: 350px;
    z-index: 5;
    animation: ${float} 5s ease-in-out infinite;
    pointer-events: none; 
    filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.2));
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    z-index: 2;
    width: 100%;
  }

  .main-title-img {
    width: 550px;
    max-width: 80vw;
    margin-bottom: 60px;
  }

  .vigyaan-desc {
    background: rgba(138, 122, 163, 0.15); 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px; 
    padding: 35px 50px;
    color: white;
    font-family: 'VigyaanFont';
    font-weight:100;
    max-width: 900px;
    width: 90%;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 50px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  }

  .btncontainer2 {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* Replaced register button with Bio-Tech stylized button */
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 1rem;

    padding: 1.2em 1.8em;
    border: 0;
    border-radius: 2rem;

    background: linear-gradient(135deg, #0fd9b3, #5cffc9);
    color: #053b33;

    font-family: "JetBrains Mono", "Courier New", monospace;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.22rem;
    text-transform: uppercase;

    cursor: pointer;
    user-select: none;
    overflow: hidden;

    filter: url(#handDrawnNoise);

    box-shadow: rgba(0, 255, 200, 0.45) 5px 5px 0 1px, inset 0 0 0 1px rgba(255,255,255,0.4);

    animation: idle 1.4s infinite ease-in-out;
    transition: 0.35s ease;
  }

  .button:hover {
    rotate: -2deg;
    box-shadow: rgba(0, 255, 200, 0.7) 7px 7px 0 1px, inset 0 0 0 1px rgba(0,255,200,0.6);
    animation: hover 2.5s infinite ease-in-out;
  }

  .button:active {
    box-shadow: inset rgba(0,200,180,0.9) 4px 4px 0 1px;
    animation: active 1s infinite ease-in-out;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45) 45%, transparent 60%);
    transform: translateX(-120%);
    animation: bioFlow 3.2s infinite linear;
    pointer-events: none;
  }

  .button::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 6px, transparent 12px);
    opacity: 0.15;
    pointer-events: none;
  }

  .button-cosm {
    fill: #0a5c4f;
    width: 44px;
    height: 44px;

    position: absolute;
    left: -16px;
    top: 50%;
    transform: translateY(-50%) scale(0.6);
    transition: 0.3s ease-out;
  }

  .button:hover .button-cosm { rotate: -25deg; fill: #007e6a; }
  .button:active .button-cosm { rotate: -140deg; fill: #004d41; }

  .highlight {
    position: absolute;
    inset: 0;
    fill: none;
    stroke: rgba(0, 120, 100, 0.45);
    stroke-width: 12;
    stroke-linecap: round;
    pointer-events: none;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 0.5s ease-in-out;
  }

  .button:hover .highlight { stroke-dashoffset: 0; }
  .button:active .highlight { animation: highlight 5s infinite, col 0.5s forwards; }

  @media (max-width: 1100px) {
    .chameleon {
      height: 220px;
      top: 10%;
      left: 10px;
    }
    .vigyaan-desc {
        padding: 25px;
        font-size: 1rem;
        margin-bottom: 35px;
    }
    .register-btn {
      font-size: 0.85rem;
      padding: 8px 25px;
    }
  }

  @media (max-width: 768px) {
    .chameleon {
      display: none; 
    }
    .main-title-img {
      margin-top: 50px;
    }
  }
`;

export default VigyaanStyleWrapper;