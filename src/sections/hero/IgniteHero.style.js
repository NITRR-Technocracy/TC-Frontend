import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/vighero/vig_bg.webp";

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


const IgniteStyleWrapper = styled.section`
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
  left: 19%;
  position: absolute;
  top: 35vh;
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

  .btncontainer2{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
 }

 .cta2 {
  display: flex;
  padding: 5px 45px;
  text-decoration: none;
  font-family: 'kanit', sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: white;
  background: #6225E6;
  transition: 0.5s;
  box-shadow: 6px 6px 0 black;
  transform: skewX(-15deg);
  justify-content: center;
  align-items: center;
}

.cta2:focus {
  outline: none;
}

.cta2:hover {
  transition: 0.5s;
  box-shadow: 10px 10px 0 #FBC638;
}

.cta2 span:nth-child(2) {
  transition: 0.5s;
  margin-right: 0px;
}

.cta2:hover span:nth-child(2) {
  transition: 0.5s;
  margin-right: 45px;
}

.cta2 span {
  transform: skewX(15deg)
}

.cta2 span:nth-child(2) {
  width: 20px;
  margin-left: 30px;
  position: relative;
  top: 12%;
}

/**************SVG****************/

path.one {
  transition: 0.4s;
  transform: translateX(-60%);
}

path.two {
  transition: 0.5s;
  transform: translateX(-30%);
}

.cta2:hover path.three {
  animation: color_anim 1s infinite 0.2s;
}

.cta2:hover path.one {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.6s;
}

.cta2:hover path.two {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.4s;
}

/* SVG animations */

@keyframes color_anim {
  0% {
    fill: white;
  }

  50% {
    fill: #FBC638;
  }

  100% {
    fill: white;
  }
}

 @media (max-width: 1232px) {
  .vigyaan-font {
    font-size: 4rem; 
  }

  .vigyaan-desc {
    padding: 0 5rem 0 5rem; 
  }

  .btncontainer2{
    top: 75%;
  }
  @media (max-width: 1025px) {
    .vigyaan-font 
    { top:25vh;
      left: 30%;
    }
    .btncontainer2{
      top: 75%;
    }
  }
  @media (max-width: 981px) {
    .vigyaan-font {
      font-size: 3rem; 
      left: 30%;
      top: 30vh;
    }
  
    .vigyaan-desc {
      font-size: 1rem;
      top: 45vh;
      padding: 0 7rem 0 7rem; 
    }
  
    .btncontainer2{
      top: 80%;
    }
    .vigyaan-ring {
      left: 50%;
      top: 40vw;
      top: 50vh;
      width: 70vw;
    }
  }
  @media (max-width: 923px) {
    .btncontainer2{
      top: 65%;
    }
    .vigyaan-ring {
      display:none;
    }
    .cta2 {
      font-size: 18px;
    }
  }
  @media (max-width: 890px) {
    height:100vh;
  
    .vigyaan-font {
      font-size: 3rem; 
      top: 25vh;
      left:20%;
    }
  
    .vigyaan-desc {
      padding: 0 5rem 0 5rem;
      font-size: 1rem;
      top: 50vh;
    }
  
    .btncontainer2{
      top: 70%;
    }
}
@media (max-width: 800px) {
  .vigyaan-font{
    left:20%;
  }
  .planet1{
    height: 50px ;
  }
  .planet2{
     height: 100px ;
  }
  .planet3{
    height: 100px ;
  }
}
@media (max-width: 769px) {
  
  .vigyaan-font {
    font-size: 2.5rem; 
    top: 25vh;
  }

  .vigyaan-desc {
    padding: 0 5rem 0 5rem;
    font-size: 1rem;
    top: 40vh;
  }
  .vigyaan-planet{
    margin-top: 50px;
  }
  .btncontainer2{
    top: 60%;
  }
  .cta2 {
    font-size: 18px;
  }
}
@media (max-width: 661px) {
  .vigyaan-font {
    left: 30%;
  }
  .btncontainer2{
    top: 65%;
  }
}
@media (max-width: 591px) {
  .vigyaan-font {
    left: 30%;
  }
  .btncontainer2{
    top: 70%;
    width: 60%;
  }
}
@media (max-width: 515px) {
  .vigyaan-font {
    font-size: 2rem; 
    top: 20vh;
  }
  .vigyaan-desc {
    padding: 0 5rem 0 5rem;
    font-size: 1rem;
    top: 32vh;
  }
  .btncontainer2{
    top: 75%;
  }
}
@media (max-width: 491px) {
  .btncontainer2{
    width: 70%;
  }
}
@media (max-width: 441px) {
  .btncontainer2{
    top: 90%;
    width: 80%;
  }
}
@media (max-width: 426px) {
  .vigyaan-font {
    font-size: 1.8rem; 
    top: 22vh;
    left: 28%;
  }
  .vigyaan-desc {
    padding: 0 1rem 0 1rem;
    font-size: 1rem;
    top: 35vh;
  }
  .planet1{
    height: 40px ;
  }
  .planet2{
     height: 70px ;
  }
  .planet3{
    height: 70px ;
  }
  .btncontainer2{
    top: 85%;
    width: 90%;
  }
}
@media (max-width: 331px) {
  .vigyaan-font {
    font-size: 1.6rem; 
    top: 20vh;
    left: 26%;
  }
  .vigyaan-desc {
    padding: 0 1rem 0 1rem;
    font-size: 1rem;
    top: 35vh;
  }
  .cta2 {
    font-size: 14px;
  }
}
@media (max-width: 280px) {
  .btncontainer2{
    top: 90%;
  }
}
@media (max-width: 251px) {
  .vigyaan-font {
    font-size: 1rem; 
    top: 18vh;
    left: 28%;
  }
}
@media (max-width: 222px) {
  .cta2 {
    font-size: 10px;
  }
}
}

`;

export default IgniteStyleWrapper;
