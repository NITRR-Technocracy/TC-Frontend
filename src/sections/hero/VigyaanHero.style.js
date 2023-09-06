import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/vighero/vig_bg.webp";

const rocketAnimation = keyframes`
        0%,
        100% {
            bottom: 0;
        }

        50% {
            bottom: 30px;
        } 
`;

const rocketParticleAnimation = (start, end) => {
  return keyframes`
        from {top: ${start}; opacity: 1}
        to {top: ${end}; opacity: 0}
    `;
};

const rotate360 = keyframes`
0% {
  transform: rotate(0deg);
  right : 5%;
}
50% {
  right : 15%
}
100% {
  transform: rotate(360deg);
  right : 5%
}
`;
const quarterCircle = keyframes`
0% {
  bottom : 0;
}
50% {
 bottom 30%;
}
100% {
  bottom : 0;
}
}
`;
const Circle = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
`;


const VigyaanStyleWrapper = styled.section`
  position: relative; 
  // background: url(${bannerBG});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
  // height: 100vh;
  padding: 0px 0px;
  overflow: hidden;

  .asto{
    position: absolute ;
    top: 110vh ;
    left: 5vw;
    height: 400px ;
  }

  .planet1{
    position: absolute;
    top: 10vh;
    right: 0%;
    height: 100px ;
    animation: ${rotate360} 15s linear infinite;
  }
  .planet2{
     animation: ${quarterCircle} 4s linear infinite;
     left: 0%;
     height: 200px ;
  }
  .planet3{
    position: absolute;
    top: 30vh; 
    left: 2vw;
    height: 200px ;
    animation: ${Circle} 15s linear infinite;
  }

  .vigyaan-planet {
    left: 50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 70vw;
    z-index: 1;
}
.vigyaan-font p{
  font-family: angora;
}
.vigyaan-font {
  
  // -webkit-animation: cosmos-animation 3s;
  // animation: cosmos-animation 3s;
  left: 32%;
  // opacity: .5;
  position: absolute;
  top: 35vh;
  // -webkit-transform: translateX(-50%);
  // transform: translateX(-50%);
  // width: 45vw;
  font-size: 5.5rem;
  color:white;
  z-index: 2;
  font-weight: 900;
  text-shadow: 2px 2px 5px #FE7BE5D1;
}

.vigyaan-desc{
  position:absolute;
  top: 53vh;
  z-index:2;
  padding: 0 13rem 0 10rem;
  color:white;
  z-index: 2;
}
.vigyaan-ring {
  -webkit-animation: ring-animation 3s;
  animation: ring-animation 3s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  left: 50%;
  position: absolute;
  top: 40vw;
  top: 58vh;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 90vw;
  width: 70vw;
  z-index: 2;
}

.btncontainer{
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: 3;
}




  @media only screen and (max-width: 1441px) {
    .asto{
      position: absolute ;
      top: 110vh ;
      left: 5vw;
      height: 400px ;
    }
  
    .planet1{
      position: absolute;
      top: 10vh;
      right: 0%;
      height: 100px ;
      animation: ${rotate360} 15s linear infinite;
    }
    .planet2{
       animation: ${quarterCircle} 4s linear infinite;
       left: 0%;
       height: 200px ;
    }
    .planet3{
      position: absolute;
      top: 30vh; 
      left: 2vw;
      height: 200px ;
      animation: ${Circle} 15s linear infinite;
    }
  
    .vigyaan-planet {
      left: 50%;
      position: relative;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 70vw;
      z-index: 1;
  }
  .vigyaan-font {
    // -webkit-animation: cosmos-animation 3s;
    // animation: cosmos-animation 3s;
    left: 32%;
    // opacity: .5;
    position: absolute;
    top: 35vh;
    // -webkit-transform: translateX(-50%);
    // transform: translateX(-50%);
    // width: 45vw;
    font-size: 5.5rem;
    color:white;
    z-index: 2;
    font-weight: 900;
    text-shadow: 2px 2px 5px #FE7BE5D1;
  }
  .vigyaan-desc{
    position:absolute;
    top: 53vh;
    z-index:2;
    padding: 0 13rem 0 10rem;
    color:white;
    z-index: 2;
  }
  .vigyaan-ring {
    -webkit-animation: ring-animation 3s;
    animation: ring-animation 3s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    left: 50%;
    position: absolute;
    top: 40vw;
    top: 58vh;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 90vw;
    width: 70vw;
    z-index: 2;
  }
  
  .btncontainer{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    z-index: 3;
  }
  }
  @media only screen and (max-width: 1025px) {
    .asto{
      position: absolute ;
      top: 90vh ;
      left: 5vw;
      height: 300px ;
    }
  
    .planet1{
      position: absolute;
      top: 10vh;
      right: 0%;
      height: 80px ;
      animation: ${rotate360} 15s linear infinite;
    }
    .planet2{
       animation: ${quarterCircle} 4s linear infinite;
       left: 0%;
       height: 180px ;
    }
    .planet3{
      position: absolute;
      top: 30vh; 
      left: 2vw;
      height: 180px ;
      animation: ${Circle} 15s linear infinite;
    }
  
    .vigyaan-planet {
      left: 50%;
      position: relative;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 70vw;
      z-index: 1;
  }
  .vigyaan-font {
    // -webkit-animation: cosmos-animation 3s;
    // animation: cosmos-animation 3s;
    left: 26%;
    // opacity: .5;
    position: absolute;
    top: 35vh;
    // -webkit-transform: translateX(-50%);
    // transform: translateX(-50%);
    // width: 45vw;
    font-size: 4.8rem;
    color:white;
    z-index: 2;
    font-weight: 900;
    text-shadow: 2px 2px 5px #FE7BE5D1;
  }
  .vigyaan-desc{
    position:absolute;
    top: 53vh;
    z-index:2;
    padding: 0 12rem 0 12rem;
    color:white;
    z-index: 2;
  }
  .vigyaan-ring {
    -webkit-animation: ring-animation 3s;
    animation: ring-animation 3s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    left: 50%;
    position: absolute;
    top: 65vh;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 70vw;
    z-index: 2;
  }
  
  .btncontainer{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    z-index: 3;
  }
  }

  @media only screen and (max-width: 769px) {
    .vigyaan-font {
      left: 32%;
      position: absolute;
      top: 22vh;
      font-size: 2.8rem;
      color:white;
      z-index: 2;
      font-weight: 900;
      text-shadow: 2px 2px 5px #FE7BE5D1;
    }
    .vigyaan-desc{
      position:absolute;
      top: 35vh;
      color:white;
      z-index: 2;
      padding: 0 10rem 0 10rem;
    }
    .btncontainer{
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5px;
      z-index: 3;
      font-size: 18px;
    }
    .asto{
      position: absolute ;
      top: 70vh ;
      left: 5vw;
      height: 200px ;
    }
    .planet1{
      position: absolute;
      top: 10vh;
      right: 0%;
      height: 70px ;
      animation: ${rotate360} 15s linear infinite;
    }
    .planet2{
      animation: ${quarterCircle} 4s linear infinite;
      left: 0%;
      height: 160px ;
   }
   .planet3{
     position: absolute;
     top: 30vh; 
     left: 2vw;
     height: 160px ;
     animation: ${Circle} 15s linear infinite;
   }
   .vigyaan-ring {
     display: none;
   }
  
  }

  @media only screen and (max-width: 426px) {
     height: 100vh;

    .vigyaan-planet {
      top: 8vh;
      left: 50%;
      position: relative;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 70vw;
      z-index: 1;
  }
    .vigyaan-font {
      left: 28%;
      position: absolute;
      top: 28vh;
      font-size: 1.8rem;
      color:white;
      z-index: 2;
      font-weight: 900;
      text-shadow: 2px 2px 5px #FE7BE5D1;
    }
    .vigyaan-desc{
      position:absolute;
      top: 40vh;
      color:white;
      z-index: 2;
      padding: 0 1rem 0 1rem;
    }
    .btncontainer{
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5px;
      z-index: 3;
    }
    .metaportal_fn_button_3{
      font-size: 15px;
    }
    .asto{
      display: none;
      position: absolute ;
      top: 70vh ;
      left: 5vw;
      height: 100px ;
    }
    .planet1{
      position: absolute;
      top: 10vh;
      right: 0%;
      height: 60px ;
      animation: ${rotate360} 15s linear infinite;
    }
    .planet2{
      animation: ${quarterCircle} 4s linear infinite;
      left: 0%;
      height: 80px ;
   }
   .planet3{
     position: absolute;
     top: 30vh; 
     left: 2vw;
     height: 80px ;
     animation: ${Circle} 15s linear infinite;
   }
   .vigyaan-ring {
     display: none;
   }
  }
  @media only screen and (max-width: 376px) {
    height: 100vh;

    .vigyaan-planet {
      top: 8vh;
      left: 50%;
      position: relative;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 70vw;
      z-index: 1;
  }
    .vigyaan-font {
      left: 29%;
      position: absolute;
      top: 25vh;
      font-size: 1.6rem;
      color:white;
      z-index: 2;
      font-weight: 900;
      text-shadow: 2px 2px 5px #FE7BE5D1;
    }
    .vigyaan-desc{
      position:absolute;
      top: 40vh;
      color:white;
      z-index: 2;
      padding: 0 1rem 0 1rem;
    }
    .btncontainer{
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5px;
      z-index: 3;
      width: 70%;
    }
    .metaportal_fn_button_3{
      font-size: 18px;

    }
    .asto{
      display: none;
      position: absolute ;
      top: 70vh ;
      left: 5vw;
      height: 100px ;
    }
    .planet1{
      position: absolute;
      top: 10vh;
      right: 0%;
      height: 50px ;
      animation: ${rotate360} 15s linear infinite;
    }
    .planet2{
      animation: ${quarterCircle} 4s linear infinite;
      left: 0%;
      height: 70px ;
   }
   .planet3{
     position: absolute;
     top: 30vh; 
     left: 2vw;
     height: 70px ;
     animation: ${Circle} 15s linear infinite;
   }
   .vigyaan-ring {
     display: none;
   }
   @media only screen and (max-width: 321px) {
    .vigyaan-font {
      left: 28%;
      position: absolute;
      top: 22vh;
      font-size: 1.4rem;
      color:white;
      z-index: 2;
      font-weight: 900;
      text-shadow: 2px 2px 5px #FE7BE5D1;
    }
    .btncontainer{
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5px;
      z-index: 3;
      width: 80%;
    }
   }
  }
`;

export default VigyaanStyleWrapper;
