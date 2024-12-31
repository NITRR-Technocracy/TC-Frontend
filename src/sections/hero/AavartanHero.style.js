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
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  height: 100vh;
  padding: 250px 0;
  overflow: hidden;
  animation: ${popIn} 2s ease forwards; 

  .btncontainer {
    position: absolute;
    top: 75%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: 600;
  }

  .container{
    z-index:100;
    height:100vh !important;
    widht:100vw;
    margin:0;
    position:relative;
    top:-20vh;
  }
   
  .ufo_shape {
    position: absolute;
    top: 2%;
    left: 10%;
    z-index: 0;
  }
  .moving-cloud-container {
    position: absolute; /* Ensure it's positioned explicitly */
  top: -18vh;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  user-select: none;
}

.moving-cloud {
  position: absolute;
  animation: moveCloud 200s linear infinite;
  repeat:infinite;
  z-index: 400;
}


@keyframes moveCloud {
  0% {
    transform: translateX(-80%); 
  }
  50% {
    transform: translateX(5vw); 
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
       top:-8vh;
       left:30%;
       height: 28vh;
       width: 40vw;
       z-index: -400;
    }


      .font{
         height:100%;
         width:100%;
      }

      .rocket_thumb {
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
      }
  
.decrp {
    color: white; /* White text for contrast */
    font-weight: 300;
    font-size: 25px;
    line-height: 35px;
    margin-top: 60px;
    width:80vw;
    text-align: center;
    text-shadow: 1px 0px 3px black;
    font-family: "AavartanFont";
    position: absolute;
    top: 43vh;
    left: 10%; /* Syncs with background's left */
    right: 10%; /* Syncs with background's right */
    z-index: 2;
    background: rgba(61, 3, 22, 0.6); /* Slightly transparent black with more opacity */
    backdrop-filter: blur(5px); /* Increased blur effect */
    padding: 10px; /* Space around the content */
    border-radius: 5px; /* Smooth rounded corners */
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5); /* Slightly visible shadow */
}

  
    
  }

  @media only screen and (max-width: 1441px) {
    .gamfi_v2_hero_left h2 {
      font-size: 8rem; /* Adjust font size for 1440px */
    }

    .gamfi_v2_hero_right {
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
          height: 400px;
        }
        .rocket_thumb2 {
          height: 280px;
        }
      }
    }
  }

  @media only screen and (max-width: 1025px) {
    .btncontainer {
      top:95% !important;
      left:10%;
    }

    .aavartan-font {
    top: 15% !important;
    height: 19vh !important;
    width: 65vw !important;
    left: 17% !important;
    }
  .gamfi_v2_hero_left .gamfi_v2_hero_thumb .rocket_thumb2 {
  position: absolute;
  top: 30%;
  left: 1rem;
  animation: jxHqgd 5s infinite;
  z-index: 0;
  height: 25vw;
   } 
.decrp {
  color: black;
  font-weight: 300;
  font-size: 2.1rem !important;
  line-height: 3.5rem !important;
  margin-top: 10px;
  text-align: center;
  text-shadow: 1px 1px 5pxrgb(73, 6, 6);
  font-family: "AavartanFont";
  position: absolute;
  background: rgba(149, 8, 8, 0.6);
  top: 60% !important;
  left:3.5vw !important;
  width: 90vw !important;
  z-index: 2;
  }
     }

  @media only screen and (max-width: 861px) {
    .btncontainer {
      top:90% !important;
      left:10%;
    }

    .aavartan-font {
    top: 10% !important;
    height: 19vh !important;
    width: 65vw !important;
    left: 15% !important;
    }
  .gamfi_v2_hero_left .gamfi_v2_hero_thumb .rocket_thumb2 {
  position: absolute;
  top: 30%;
  left: 1rem;
  animation: jxHqgd 5s infinite;
  z-index: 0;
  height: 25vw;
   } 
.decrp {
  color: black;
  font-weight: 300;
  font-size: 1.8rem !important;
  line-height: 3rem !important;
  margin-top: 10px;
  text-align: center;
  text-shadow: 1px 1px 5pxrgb(73, 6, 6);
  font-family: "AavartanFont";
  position: absolute;
  background: rgba(149, 8, 8, 0.6);
  top: 55% !important;
  left:3vw !important;
  width: 90vw !important;
  z-index: 2;
  }
}

  @media only screen and (max-width: 769px) {

    .btncontainer {
      top:88% !important;
      left:10%;
    }

    .aavartan-font {
    top: 10% !important;
    height: 19vh !important;
    width: 65vw !important;
    left: 15% !important;
    }
  .gamfi_v2_hero_left .gamfi_v2_hero_thumb .rocket_thumb2 {
  position: absolute;
  top: 30%;
  left: 1rem;
  animation: jxHqgd 5s infinite;
  z-index: 0;
  height: 25vw;
   } 
.decrp {
  color: black;
  font-weight: 300;
  font-size: 1.8rem !important;
  line-height: 3rem !important;
   padding:0 5px !important;
  margin-top: 10px;
  text-align: center;
  text-shadow: 1px 1px 5pxrgb(73, 6, 6);
  font-family: "AavartanFont";
  position: absolute;
  background: rgba(149, 8, 8, 0.6);
  top: 51% !important;
  left:4vw !important;
  width: 90vw !important;
  z-index: 2;
  }
  }

  @media only screen and (max-width: 571px) {
    .btncontainer{
       top:80vh !important;
       left:43% !important;
    }
    .decrp {
      font-size:1.5rem !important;
      line-height:2.2rem !important;
      padding:0 5px !important;
      top:35% !important;
      left:5% !important;
      width:100vw;
    }
    .aavartan-font{
      top:3% !important;
      left:12% !important;
      width:80vw !important;
      height:20vh !important;
    }
    .gamfi_v2_hero_left .rocket_thumb {
      height: 80px !important;
    }

    .rocket_thumb2 {
      height: 80px;
    }
    
    .colmd2{
      width:100vw;
    }
  }

  @media (max-width: 426px) {

    .btncontainer{
       top:80vh !important;
       left:43% !important;
    }
    .decrp {
      font-size:1.5rem !important;
      line-height:2.2rem !important;
      padding:0 5px !important;
      top:25% !important;
      left:5% !important;
      width:100vw;
    }
    .aavartan-font{
      top:5% !important;
      left:12% !important;
      width:80vw !important;
      height:20vh !important;
    }
    .gamfi_v2_hero_left .rocket_thumb {
      height: 80px !important;
    }

    .rocket_thumb2 {
      height: 80px;
    }
    
    .colmd2{
      width:100vw;
    }
  }

  @media only screen and (max-width: 376px) {
    .gamfi_v2_hero_left h2 {
      font-size: 2.5rem;
    }


  .aavartan-font {
  height: 15vh;
  top: 3%;
  width: 70vw;
}
  .btncontainer{
    top:80% !important:
  }

 
      .decrp{
        top: 30% !important;
        font-size:1.2rem !important;
        line-height:1.8rem !important;
        margin-left:-2px !important;
         text-align:center
      }
         .btncontainer{
            top:75% !important;
            left:43% !important;
         }
}
    


  @media only screen and (max-width: 321px) {
    .gamfi_v2_hero_left h2 {
      font-size: 2rem;
    }

    .metaportal_fn_button_3 {
      bottom: 16vh;
      left: 10%;
    }
  }

  @media only screen and (max-width: 301px) {
    .btncontainer {
      top: 90%;
      width: 90%;
    }

    .gamfi_v2_hero_thumb .rocket_thumb {
      height: 100px;
    }

    .rocket_thumb2 {
      height: 80px;
      bottom: 5rem;
    }
  }

  @media only screen and (max-width: 261px) {
    .btncontainer {
      top: 95%;
    }

    .gamfi_v2_hero_left h2 {
      font-size: 1rem;
    }

    .decrp{
      font-size: 0.8rem;
    }
  }
`;

export default AavartanStyleWrapper;
