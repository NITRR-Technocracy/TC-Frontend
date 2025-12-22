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