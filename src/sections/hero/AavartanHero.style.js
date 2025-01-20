import styled, { keyframes } from "styled-components";

const rocketAnimation = keyframes`
    0%,
    100% {
        bottom: 1rem;
    }

    50% {
        bottom: 3rem;
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
const rocketAnimation2 = keyframes`
    0%,
    100% {
        left:0.5rem;
    }

    50% {
        left:2rem;
    }
`;

const AavartanStyleWrapper = styled.section`
  position: relative;
  height: 100vh;
  background-repeat:no-repeat;
  overflow: hidden;
  background-size: cover;

  .moving-cloud-container {
    position: absolute;
    top: -18vh;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .moving-cloud {
    animation: moveCloud 300s linear infinite;
    z-index: 4;
  }

  .container {
    z-index: 1000;
    position: relative;
    height: 100vh;
    width: 100vw;
  }

  .aavartan-font {
    position: absolute;
    top: 6% !important;
    left: 30%;
    width: 40%;
    z-index: 2;
  }

  .decrp {
    position: absolute;
    top: 63% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
    background: rgba(96, 42, 33, 0.6);
    backdrop-filter: blur(5px);
    color: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 5;
  }

  .btncontainer {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
  }

  @keyframes moveCloud {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

.plants{
  position:relative;

}

  .colmd2 {
    width: 100%;
    position:relative;
    margin: 0;
    z-index:-1;
  }

    .metaportal_fn_button_3 {
      position: absolute;
      bottom: 20vh;
      left: 40%;
      width: 300px;
    }

   .aavartan-font { 
       position:absolute;
       user-select: none;
       top:-2.5%;
       left:30%;
       height: 22vh;
       width: 35vw;
       z-index: -400;
    }


      .font{
         height:100%;
         width:100%;
      }

      /* .rocket_thumb {
        position: absolute;
        bottom: 0.5rem;
        right: 2rem;
        animation: ${rocketAnimation} 5s infinite;
        z-index: 0;
        height: 9vw;
      }

      .rocket_thumb2 {
        position: absolute;
        top: 8rem;
        left: 1rem;
        animation: ${rocketAnimation2} 5s infinite;
        z-index: 0;
        height: 25vw;
      } */
  
  .decrp {
  color: white;
  font-weight: 300;
  font-size: 3vh;
  line-height: 35px;
  margin-top: 60px;
  width: 80vw;
  user-select: none;
  text-align: center;
  text-shadow: 1px 0px 3px black;
  font-family: "AavartanFont";
  position: absolute;
  top: 50vh;
  left: 10%;
  right: 10%;
  z-index: 2;
  border-radius: 20px;
  background: rgba(96, 42, 33, 0.6);
  backdrop-filter: blur(10px);
  padding: 1rem;
  height: auto; /* Let it expand automatically */
  max-height: 90vh; /* Restrict to fit within the screen */
  overflow-y: auto; /* Enable scrolling for overflow */
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}

@media only screen and (min-width: 1921px) and (max-width: 2560px) {
  .decrp {
    font-size: 5rem;
    line-height: 2.5rem;
    padding: 2.5rem;
    width: 100%;
    position: absolute;
    top: 57%;
    left: 71%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    line-height: 6rem;
    padding:2rem;
  }
  .aavartan-font {
      width:70vw;
      position: absolute;
      top: 8%;
      left:23%;
    }
  
}
@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .decrp {
    font-size: 1.4rem;
    line-height: 1.8rem;
    width: 85%;
    top: 40vh; 
    height: auto;
    max-height: 50vh; 
    overflow-y: auto;
    padding: 1.5rem;
  }
}

  @media only screen and (max-width: 890px) {
    .aavartan-font {
      width:40vw;
    }
  }

  @media only screen and (max-width: 704px) {
    .aavartan-font {
      width:45vw;
    }
    .decrp{
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 592px){
    .decrp{
      width:85vw;
      position: absolute;
      left: 7.5%;
    }
     .aavartan-font {
      position: absolute;
      left: 28%;

    }
  }

  @media only screen and (max-width: 554px){
    .decrp{
      font-size:1.17rem;
    }
    .aavartan-font {
      width: 60vw;
      position: absolute;
      left: 22.5%;
    }
  }
  @media only screen and (max-width: 470px) {
  .decrp {
    font-size: 0.9rem;
    line-height: 1.3rem;
    padding: 1rem;
    height: auto;
    overflow-y: auto;
  }
  .aavartan-font {
      width: 90vw;
      position: absolute;
      left: 6.5%;
    }
}

@media only screen and (max-width: 399px) and (min-width: 350px) {
  .decrp {
    font-size: 0.95rem;
    padding: 0.8rem;
    line-height: 1.3rem;
    height: auto;
  }
}
@media only screen and (max-width: 360px) {
  .decrp {
    font-size: 0.9rem;
    padding: 0.5rem;
    line-height: 1.2rem;
    height: auto;
    max-height: 80vh;
    overflow-y: auto;
  }
}

@media only screen and (max-width: 349px) and (min-width: 300px) {
  .decrp {
    font-size: 0.85rem;
    padding: 0.6rem;
    line-height: 1.2rem;
    height: auto;
  }
}

@media only screen and (max-width: 300px) and (min-width: 262px) {
  .decrp {
    font-size: 0.8rem;
    padding: 0.5rem;
    line-height: 1.2rem;
    height: auto;
    overflow-y: auto;
  }
}


  @media only screen and (max-width: 261px) {
  .decrp {
    height: auto; 
    overflow-y: auto; 
    font-size: 0.8rem; 
    line-height: 1.2rem;
    padding: 0.5rem; 
  }
}

`;

export default AavartanStyleWrapper;

