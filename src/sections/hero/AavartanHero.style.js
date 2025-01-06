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
       user-select: none;
       top:-8vh;
       left:30%;
       height: 22vh;
       width: 35vw;
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
    font-size:3vh;
    line-height: 35px;
    margin-top: 60px;
    width:80vw;
    user-select: none;
    text-align: center;
    text-shadow: 1px 0px 3px black;
    font-family: "AavartanFont";
    position: absolute;
    top: 47vh;
    left: 10%; /* Syncs with background's left */
    right: 10%; /* Syncs with background's right */
    z-index: 2;
    border-radius:20px;
    background: rgba(96, 31, 19, 0.6); /* Slightly transparent black with more opacity */
    backdrop-filter: blur(5px); /* Increased blur effect */
    padding:; /* Space around the content */
    border-radius: 5px; /* Smooth rounded corners */
    // box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5); /* Slightly visible shadow */
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
   .btncontainer{
       top:85% !important;
       left:50% !important;
       translate:transform(-50%,-50%);
    }
    .decrp {
      font-size:max(1.2vh,1.5rem) !important;
      line-height:3rem !important;
      padding:0 5px !important;
      top:58% !important;
      left:10% !important;
      width:95vw;
    }
    .aavartan-font{
      top:5% !important;
      left:20% !important;
      width:60vw !important;
      height:20vh !important;
    }
  }

  @media only screen and (max-width: 1025px) {
    .btncontainer{
      top:90% !important;
      left:10%;
      transform:translate(-50%,-50%);
    }

    .aavartan-font {
     top:10% !important;
    height: 18vh !important;
    width: 60vw !important;
    left: 18% !important;
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
  font-size:1vh rem !important;
  line-height: 3rem !important;
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
  font-weight: 300;
  line-height: 3rem !important;
  margin-top: 10px;
  text-align: center;
  position: absolute;
  top: 60% !important;
  left:4% !important;
  width: 90vw !important;
  z-index: 2;
  }
}

  @media only screen and (max-width: 769px) {

    .btncontainer {
      top:90% !important;
      left:10%;
    }

    .aavartan-font {
    top: 10% !important;
    height: 19vh !important;
    width: 68vw !important;
    left: 18% !important;
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
    position:absolute;
    top:58% !important;
    left:4% !important;
  }
  }

  @media only screen and (max-width: 571px) {
    .btncontainer{
       top:90% !important;
       left:43% !important;
    }
    .decrp {
      // font-size:1.4rem !important;
      line-height:2.2rem !important;
      padding:0 5px !important;
      top:60% !important;
      left:5% !important;
      width:100vw;
    }
    .aavartan-font{
      // top:10% !important;
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
       top:90% !important;
       left:43% !important;
    }
    .decrp {
      line-height:2rem !important;
      padding-bottom:2px !important;
      padding:0 5px !important;
      bottom:13% !important;
      left:5% !important;
      width:100vw;
    }

    .aavartan-font{
      // top:3% !important;
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

  .aavartan-font {
       height: 15vh;
    //  top:0.8% !important;
     width: 70vw;
}

      .decrp{
        bottom:18% !important;
        font-size:1rem !important;
        line-height:1.5rem !important;
        margin-left:-2px !important;
        padding:10px 5px !important;
         text-align:center;
      }
         .btncontainer{
            top:90% !important;
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
