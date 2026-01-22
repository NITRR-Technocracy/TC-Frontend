// import styled, { keyframes } from "styled-components";

// const rocketAnimation = keyframes`
//     0%,
//     100% {
//         bottom: 1rem;
//         bottom: 1rem;
//     }

//     50% {
//         bottom: 3rem;
//         bottom: 3rem;
//     }
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
// const rocketAnimation2 = keyframes`
//     0%,
//     100% {
//         left:0.5rem;
//         left:0.5rem;
//     }

//     50% {
//         left:2rem;
//         left:2rem;
//     }
// `;

// const AavartanStyleWrapper = styled.section`
//   position: relative;
//   height: 100vh;
//   background-repeat:no-repeat;
//   overflow: hidden;
//   background-size: cover;

//   .moving-cloud-container {
//     position: absolute;
//     top: -18vh;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//   }

//   .moving-cloud {
//     animation: moveCloud 300s linear infinite;
//     z-index: 4;
//   }

//   .container {
//     z-index: 1000;
//     position: relative;
//     height: 100vh;
//     width: 100vw;
//   }

//   .aavartan-font {
//     position: absolute;
//     top: 6% !important;
//     left: 30%;
//     width: 40%;
//     z-index: 2;
//   }

//   .decrp {
//     position: absolute;
//     top: 63% !important;
//     left: 50% !important;
//     transform: translate(-50%, -50%);
//     width: 80%;
//     text-align: center;
//     background: rgba(96, 42, 33, 0.6);
//     backdrop-filter: blur(5px);
//     color: white;
//     padding: 20px;
//     border-radius: 10px;
//     z-index: 5;
//   }

//   .btncontainer {
//     position: absolute;
//     bottom: 7%;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: 6;
//   }

//   @keyframes moveCloud {
//     0% {
//       transform: translateX(-80%);
//     }
//     100% {
//       transform: translateX(90%);
//     }
//   }

// .plants{
//   position:relative;

// }

//   .colmd2 {
//     width: 100%;
//     position:relative;
//     margin: 0;
//     z-index:-1;
//   }

//     .metaportal_fn_button_3 {
//       position: absolute;
//       bottom: 20vh;
//       left: 40%;
//       width: 300px;
//     }

//    .aavartan-font { 
//        position:absolute;
//        user-select: none;
//        top:-2.5%;
//        left:30%;
//        height: 22vh;
//        width: 35vw;
//        z-index: -400;
//     }


//       .font{
//          height:100%;
//          width:100%;
//       }

//       /* .rocket_thumb {
//         position: absolute;
//         bottom: 0.5rem;
//         right: 2rem;
//         bottom: 0.5rem;
//         right: 2rem;
//         animation: ${rocketAnimation} 5s infinite;
//         z-index: 0;
//         height: 9vw;
//         height: 9vw;
//       }

//       .rocket_thumb2 {
//         position: absolute;
//         top: 8rem;
//         left: 1rem;
//         top: 8rem;
//         left: 1rem;
//         animation: ${rocketAnimation2} 5s infinite;
//         z-index: 0;
//         height: 25vw;
//       } */

//   .decrp {
//   color: white;
//   font-weight: 300;
//   font-size: 3vh;
//   line-height: 35px;
//   margin-top: 60px;
//   width: 80vw;
//   user-select: none;
//   text-align: center;
//   text-shadow: 1px 0px 3px black;
//   font-family: "AavartanFont";
//   position: absolute;
//   top: 50vh;
//   left: 10%;
//   right: 10%;
//   z-index: 2;
//   border-radius: 20px;
//   background: rgba(96, 42, 33, 0.6);
//   backdrop-filter: blur(10px);
//   padding: 1rem;
//   height: auto; /* Let it expand automatically */
//   max-height: 90vh; /* Restrict to fit within the screen */
//   overflow-y: auto; /* Enable scrolling for overflow */
//   box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
// }

// @media only screen and (min-width: 1921px) and (max-width: 2560px) {
//   .decrp {
//     font-size: 5rem;
//     line-height: 2.5rem;
//     padding: 2.5rem;
//     width: 100%;
//     position: absolute;
//     top: 57%;
//     left: 71%;
//     transform: translate(-50%, -50%);
//     overflow-y: auto;
//     line-height: 6rem;
//     padding:2rem;
//   }
//   .aavartan-font {
//       width:70vw;
//       position: absolute;
//       top: 8%;
//       left:23%;
//     }

// }
// @media only screen and (min-width: 600px) and (max-width: 1024px) {
//   .decrp {
//     font-size: 1.4rem;
//     line-height: 1.8rem;
//     width: 85%;
//     top: 40vh; 
//     height: auto;
//     max-height: 50vh; 
//     overflow-y: auto;
//     padding: 1.5rem;
//   }
// }

//   @media only screen and (max-width: 890px) {
//     .aavartan-font {
//       width:40vw;
//     }
//   }

//   @media only screen and (max-width: 704px) {
//     .aavartan-font {
//       width:45vw;
//     }
//     .decrp{
//       padding: 1rem;
//       font-size: 1.2rem;
//     }
//   }
//   @media only screen and (max-width: 592px){
//     .decrp{
//       width:85vw;
//       position: absolute;
//       left: 7.5%;
//     }
//      .aavartan-font {
//       position: absolute;
//       left: 28%;

//     }
//   }

//   @media only screen and (max-width: 554px){
//     .decrp{
//       font-size:1.17rem;
//     }
//     .aavartan-font {
//       width: 60vw;
//       position: absolute;
//       left: 22.5%;
//     }
//   }
//   @media only screen and (max-width: 470px) {
//   .decrp {
//     font-size: 0.9rem;
//     line-height: 1.3rem;
//     padding: 1rem;
//     height: auto;
//     overflow-y: auto;
//   }
//   .aavartan-font {
//       width: 90vw;
//       position: absolute;
//       left: 6.5%;
//     }
// }

// @media only screen and (max-width: 399px) and (min-width: 350px) {
//   .decrp {
//     font-size: 0.95rem;
//     padding: 0.8rem;
//     line-height: 1.3rem;
//     height: auto;
//   }
// }
// @media only screen and (max-width: 360px) {
//   .decrp {
//     font-size: 0.9rem;
//     padding: 0.5rem;
//     line-height: 1.2rem;
//     height: auto;
//     max-height: 80vh;
//     overflow-y: auto;
//   }
// }

// @media only screen and (max-width: 349px) and (min-width: 300px) {
//   .decrp {
//     font-size: 0.85rem;
//     padding: 0.6rem;
//     line-height: 1.2rem;
//     height: auto;
//   }
// }

// @media only screen and (max-width: 300px) and (min-width: 262px) {
//   .decrp {
//     font-size: 0.8rem;
//     padding: 0.5rem;
//     line-height: 1.2rem;
//     height: auto;
//     overflow-y: auto;
//   }
// }


//   @media only screen and (max-width: 261px) {
//   .decrp {
//     height: auto; 
//     overflow-y: auto; 
//     font-size: 0.8rem; 
//     line-height: 1.2rem;
//     padding: 0.5rem; 
//   }
// }

// `;

// export default AavartanStyleWrapper;



import styled, { keyframes } from "styled-components";

// 1. Snappy Background Glow Pulse
const snappyGlow = keyframes`
  0% { filter: brightness(0.5) contrast(1.2); }
  50% { filter: brightness(1.4) contrast(2.0) saturate(1.8); }
  100% { filter: brightness(0.7) contrast(1.4); }
`;

// 2. Snappy Unified Entrance
const snappyFadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: scale(0.98) translateY(15px); 
    filter: blur(8px); 
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
    filter: blur(0px); 
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
`;

const AavartanStyleWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* Faster background pulse (0.8s) */
  animation: ${snappyGlow} 0.8s ease-out forwards;

  .container {
    z-index: 10;
    position: relative;
    margin-top:-30px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    padding: 8vh 0; 
  }

  /* --- AAVARTAN TITLE --- */
  .aavartan-font {
    position: relative; 
    width: 85vw; 
    max-width: 1250px;
    z-index: 1;
    pointer-events: none;
    user-select: none;
    display: flex;
    justify-content: center;
    
    /* Content hidden initially, snaps in right as pulse ends */
    opacity: 0;
    animation: ${snappyFadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s forwards;

    .font {
      width: 100%;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5)); 
    }
  }

  /* --- CONTENT BOX --- */
  .content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    /* Desktop layout preserved: narrower width for increased height */
    max-width: 1050px; 
    z-index: 5;
    position: relative;
    
    /* Synchronized entrance with title */
    opacity: 0;
    animation: ${snappyFadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s forwards;
  }

  .decrp {
    width: 100%;
    text-align: center;
     font-family: 'VigyaanFont';
     color: white;
    background: rgba(18, 10, 25, 0.75); 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 2.5rem 3rem; 
    border-radius: 30px; 
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.7);
    font-size: 1.45rem;
    line-height: 1.6;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .btncontainer {
    position: relative;
    margin-top: 10px; 
    z-index: 10;
    
    .cta {
      display: flex;
      align-items: center;
      gap: 15px;
      text-decoration: none;
      color: white;
      font-weight: 700;
      padding: 14px 55px; 
      background: linear-gradient(90deg, #155b04 0%, #6be862 100%);
      clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover { 
        transform: scale(1.05); 
        box-shadow: 0 0 20px rgba(107, 232, 98, 0.4);
      }
      
      span { font-size: 1.25rem; }
    }
  }

  .bird-prop {
    position: absolute;
    bottom: 18%; 
    right: 6%;
    width: 12vw;
    max-width: 160px;
    z-index: 15;
    pointer-events: none;
    
    opacity: 0;
    animation: ${snappyFadeIn} 0.5s ease-out 0.7s forwards, ${float} 6s ease-in-out infinite;
  }

  /* --- RESPONSIVENESS REFINEMENTS (UNSPOILED) --- */
  @media only screen and (max-width: 1200px) {
    .container { padding: 10vh 0; }
    .content-box { max-width: 750px; }
    .aavartan-font { width: 75vw; max-width: 1100px; }
  }

  @media only screen and (max-width: 900px) {
    .container { justify-content: center; gap: 4vh; }
    .content-box { max-width: 850px; width: 80vw; }
    .decrp { font-size: 1.1rem; padding: 1.8rem 2rem; }
    .bird-prop { bottom: 15%; width: 18vw; }
  }

  @media only screen and (max-width: 600px) {
    .container { justify-content: center; gap: 3vh; padding-bottom: 10vh; }
    .aavartan-font { width: 90vw; transform: scale(1.1); }
    .content-box { width: 92vw; }
    .decrp { font-size: 1rem; padding: 1.5rem 1.2rem; }
    .bird-prop { bottom: 10%; width: 22vw; right: 4%; }
  }

  @media only screen and (max-width: 480px) {
    .container { padding-bottom: 5vh; }
    .aavartan-font { width: 120vw; transform: scale(1.9); }
    .bird-prop { bottom: 8%; width: 25vw; }
    .btncontainer .cta { padding: 12px 40px; span { font-size: 1.1rem; } }
  }
`;

export default AavartanStyleWrapper;