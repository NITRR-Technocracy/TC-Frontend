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
  align-items: center; 
  justify-content: center; 
  background: transparent;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 100%;
  }

  // .title-container {
  //   display: flex;
  //   position: relative; 
  //   align-items: center;
  //   justify-content: center;
  //   width: 100%;
  //   margin-bottom: 40px;
  // }

  // .chameleon {
  //   position: absolute;
  //   left: -25px; 
  //   top:10%;
  //   height: 250px; /* Desktop Size */
  //   z-index: 10; 
  //   animation: ${float} 5s ease-in-out infinite;
  //   pointer-events: none; 
  //   filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.2));
  // }

  // .main-title-img {
  //   width: 420px;
  //   align-self: flex-center;
  //   max-width: 75vw;
  //   z-index: 5;
  // }
  .title-container {
    display: flex;
    position: relative; 
    align-items: center;
    justify-content: center;
    width: 100%;
    /* Increase margin-top to push the whole block down */
    margin-top: 60px; 
    /* Decrease margin-bottom to bring it closer to the text */
    margin-bottom: 20px; 
  }

  .main-title-img {
    width: 420px;
    align-self: flex-center;
    max-width: 75vw;
    z-index: 5;
    /* Explicitly move the image slightly downward */
    transform: translateY(10px); 
  }

  .chameleon {
    position: absolute;
    left: -25px; 
    /* Adjusted top to keep snail aligned with the new title position */
    top: 15%; 
    height: 250px; 
    z-index: 10; 
    animation: ${float} 5s ease-in-out infinite;
    pointer-events: none; 
    filter: drop-shadow(0 0 15px rgba(255, 140, 0, 0.3));
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

  .vigyaan-desc {
    background: rgba(138, 122, 163, 0.15); 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px; 
    padding: 35px 50px;
    color: white;
    font-family: 'VigyaanFont';
    font-weight: 100;
    max-width: 900px;
    width: 90%;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 90px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  }
//   .vigyaan-desc {
//     /* KEEPING YOUR ORIGINAL BG SETTINGS */
//     background: rgba(138, 122, 163, 0.15); 
//     backdrop-filter: blur(10px);
//     -webkit-backdrop-filter: blur(10px);
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     border-radius: 40px; 
//     padding: 35px 50px;
//     max-width: 900px;
//     width: 90%;
//     font-family: 'VigyaanFont';
//     font-weight: 100;
//     font-size: 1.5rem;
//     line-height: 1.5;
//     margin-bottom: 90px;
//     box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);

//     /* 1. High-Saturation Gradient (matches the snail's core colors) */
//     background: linear-gradient(to right, #e29cff, #ffbd7a, #ff8c3b);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;

//     /* 2. Tightened Glow Effect */
//     /* Reduced radius from 15px to 4px/8px for a crisp neon look */
//     filter: drop-shadow(0 0 3px rgba(255, 189, 122, 0.5)) 
//             drop-shadow(0 0 6px rgba(255, 140, 59, 0.3));

//     /* 3. Improved Readability */
//     /* Bold weight is necessary for the color to hold its ground */
//     font-weight: 600; 
//     letter-spacing: 0.5px;
//     text-align: center;
// }

  .register-btn {
    position: relative;
    /* stronger, more solid look */
    background: linear-gradient(90deg, #00c77b 0%, #0098f0 100%);
    color: #ffffff;
    padding: 14px 48px;
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 2px;
    border-radius: 40px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease;
    box-shadow: 0 10px 30px rgba(0, 199, 123, 0.35);
    overflow: hidden;

    /* remove shimmer overlay to avoid transparency */
    &::after { opacity: 0; }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 40px rgba(0, 160, 100, 0.45);
      filter: brightness(0.98);
      letter-spacing: 2.6px;
    }
  }

  /* Bio-Tech button (replaces .register-btn) */
  .button {
  margin-top: 40px;
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

  /* Keyframes used by the button */
  @keyframes bioFlow { 100% { transform: translateX(120%); } }
  @keyframes idle { 0% { filter: url(#handDrawnNoise); } 50% { rotate: 2deg; filter: url(#handDrawnNoise2);} 100% { filter: url(#handDrawnNoise); } }
  @keyframes hover { 0% { transform: translate(0,0);} 25% { transform: translate(0,-2px);} 50% { transform: translate(0,2px);} 75% { transform: translate(0,-2px);} 100% { transform: translate(0,0);} }
  @keyframes active { 0% { transform: translateY(-1px);} 50% { transform: translateY(1px);} 100% { transform: translateY(-1px);} }
  @keyframes highlight { 0% { stroke-dashoffset: 0;} 25% { stroke-dashoffset: 1000;} 50% { stroke-dashoffset: 1000;} 100% { stroke-dashoffset: 0;} }
  @keyframes col { 0% { stroke: rgba(0,120,100,0.5);} 100% { stroke: rgba(0,160,255,0.6);} }

  /* MOBILE VIEW MODIFICATIONS */
  @media (max-width: 768px) {
    .title-container {
      margin-top: 30px; /* Balanced spacing from the top */
      margin-bottom: 0px; /* Minimal gap to bring text box higher */
      height: auto; 
      width: 100%;
      display: flex;
      flex-direction: row; 
      justify-content: center; /* Centers the combined unit */
      align-items: center;
      position: relative;
      /* Shifts the entire group slightly left to counteract the title's weight */
      transform: translateX(-50px); 
    }

    .chameleon {
      position: static; 
      height: 120px; /* Increased size as requested */
      width: auto;
      transform: rotate(-10deg); /* Dynamic tilt */
      z-index: 10;
      animation: ${float} 6s ease-in-out infinite;
      filter: drop-shadow(0 0 10px rgba(255, 140, 0, 0.4));
      order: 1; 
      flex-shrink: 0;
      /* Pulls the title closer so they overlap slightly */
      margin-right: -60px; 
    }

    .main-title-img {
      width: 180px; /* Optimal size for mobile centering */
      max-width: 55vw;
      margin: 0;
      padding: 0;
      z-index: 5;
      transform: none;
      order: 2; 
    }

    .vigyaan-desc {
      font-size: 0.95rem;
      padding: 15px;
      width: 90%;
      margin-top: 5px; /* Pulls text up toward title */
      margin-bottom: 40px; /* Reduced vertical gap */
      line-height: 1.4;
      /* Resets any webkit-text-fill colors that might cause invisibility */
      -webkit-text-fill-color: white; 
    }

    .btncontainer2 {
       margin-top: -10px; /* Pulls Register button closer to description */
       transform: scale(0.9); /* Prevents button from being too bulky on small screens */
    }
  }
`;

export default VigyaanStyleWrapper;