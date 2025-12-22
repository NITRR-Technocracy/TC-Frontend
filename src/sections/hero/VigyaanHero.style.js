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

  .title-container {
    display: flex;
    position: relative; 
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
  }

  .chameleon {
    position: absolute;
    left: 25px; 
    height: 260px; /* Desktop Size */
    z-index: 10; 
    animation: ${float} 5s ease-in-out infinite;
    pointer-events: none; 
    filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.2));
  }

  .main-title-img {
    width: 550px;
    max-width: 80vw;
    z-index: 5;
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
    margin-bottom: 50px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  }

  .register-btn {
    position: relative;
    background: linear-gradient(135deg, #00ff88 0%, #00bdff 50%, #00ff88 100%);
    background-size: 200% auto;
    color: #0a1a12;
    padding: 10px 35px; 
    font-size: 0.95rem; 
    font-weight: 700;
    letter-spacing: 2.5px; 
    border-radius: 50px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
    animation: ${shimmer} 4s linear infinite;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255,255,255,0.2), transparent);
      opacity: 0.5;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 25px rgba(0, 255, 136, 0.6);
      background-position: right center;
      letter-spacing: 3.5px;
    }
  }

  /* Bio-Tech button (replaces .register-btn) */
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
      margin-top: 40px;
      margin-bottom: 20px;
      height: 140px; 
    }

    .chameleon {
      height: 110px; 
      position: absolute;
      /* MOVED FURTHER LEFT */
      left: -5%; 
      top: 40%; 
      transform: translateY(-40%);
      z-index: 10;
    }

    .main-title-img {
      width: 280px;
      max-width: 85vw;
      margin: 0 auto; 
      /* INCREASED RIGHT SHIFT TO BALANCE THE LEFT CHAMELEON */
      padding-left: 30px; 
    }

    .vigyaan-desc {
      font-size: 1rem;
      padding: 20px;
      width: 95%;
      margin-bottom: 30px;
    }
  }
`;

export default VigyaanStyleWrapper;