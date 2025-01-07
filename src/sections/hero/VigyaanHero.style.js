import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/vighero/vig_bg.webp";

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
    right: 5%;
  }
  50% {
    right: 15%;
  }
  100% {
    right: 5%;
  }
`;

const quarterCircle = keyframes`
  0% {
    bottom: 0;
  }
  50% {
    bottom: 30%;
  }
  100% {
    bottom: 0;
  }
`;

const Circle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: translate(80px, -80px);
    transform: rotate(30deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;
const popIn = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  70% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

const VigyaanStyleWrapper = styled.section`

  position: relative;
  // min-height: 100vh;
  padding: 0;
  overflow: hidden;
  animation: ${popIn} 2s ease forwards; 
   
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }
  .asto {
    position: absolute;
    top: 110vh;
    left: 5vw;
    height: 400px;
  }

  .planet1 {
    position: absolute;
    top: 10vh;
    right: 0%;
    height: 10vmax;
    animation: ${rotate360} 15s linear infinite;
  }

  .planet2 {
    animation: ${quarterCircle} 4s linear infinite;
    left: 0%;
    height: 10vmax;
  }

  .planet3 {
    position: absolute;
    top: 30vh;
    left: 2vw;
    height: 10vmax;
    animation: ${Circle} 6s linear infinite;
  }

  .vigyaan-planet {
    position: relative;
    width: 35vw;
    z-index: 1;
    margin-top: 100px;
  }
  .vigyaan-planet>img{
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  .vigyaan-font img {
     width:max(40vw,35vh);
     max-height:22vw;
  }

  .vigyaan-font {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: 25%;
    font-size: 5.5rem;
    color: black;
    font-family:;
    z-index: 2;
    font-weight: 900;
    text-shadow: 2px 2px 5px #fe7be5d1;
  }

  .vigyaan-desc {
    // position: absolute;
    // top: 52vh; left:50%;
    // transform: translateX(-50%);
    text-align:center;
    z-index: 2;
    font-family: 'VigyaanFont';
    font-weight:700;
    font-size:1rem;
    line-height:2rem;
    color: white;
    z-index: 2;
    width:80%;
    letter-spacing:2px;
    background: rgba(75, 0, 130, 0.3); /* Slightly transparent black */
    color: #fff; /* White text for contrast */
    padding: 10px; /* Space around the content */
    border-radius: 5px; /* Smooth rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 130, 0.5);
  }

  .vigyaan-ring {
    animation: ring-animation 3s;
    animation-iteration-count: 1;
    left: 50%;
    position: absolute;
    top: 58vh;
    transform: translateX(-50%);
    width: 70vw;
    z-index: 2;
  }

  .btncontainer2 {
    margin-top: 50px;
  }


  .cta2 {
    // height: 100px;
    // // width: calc(var(--btn-size) * 10);
    min-width: 30vw;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
    background: #999 url("https://i.ibb.co/rb2TWXL/bgbtn.png") center/cover;
    image-rendering: pixelated;
    border: 2px solid #000;
    font-family: 'Minecraftia';
  }


  .cta2:hover span {
  background-color: rgba(100, 100, 255, 0.45);
  text-shadow: 2px 2px #202013CC;
  color: #FFFFA0;
}

  .cta2:active span {
  box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
}

  .cta2 span {
    width: 100%;
    height: 100%;
    padding: .5rem 1rem;
    padding-bottom: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #DDD;
    text-shadow: 2px 2px #000A;
    box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;
  }

  .cta2 span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  @keyframes color_anim {
    0% {
      fill: white;
    }
    50% {
      fill: #fbc638;
    }
    100% {
      fill: white;
    }
  }
    

  

  // Add remaining media queries and other styles

`;

export default VigyaanStyleWrapper;
