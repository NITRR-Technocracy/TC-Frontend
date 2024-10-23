import styled, { keyframes } from "styled-components";
import stylebg from '../../assets/Aavartan New/AB2.webp';
import bannerBG from "../../assets/Aavartan New/aavartanbg.webp";

const rocketAnimation = keyframes`
    0%,
    100% {
        bottom: 1rem;
    }

    50% {
        bottom: 3rem;
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

  .btncontainer {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
   
  .ufo_shape {
    position: absolute;
    top: 2%;
    left: 10%;
    z-index: 0;
  }

  .row {
    display: flex;
  }

  .colmd, .colmd2 {
    width: 50%;
    margin: 0;
  }

  .gamfi_v2_hero_left {
    display: flex;
    flex-direction: column;

    .metaportal_fn_button_3 {
      position: absolute;
      bottom: 20vh;
      left: 40%;
      width: 300px;
    }

    .gamfi_v2_hero_thumb {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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
    }
  }

  .gamfi_v2_hero_right {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    .aavartan-font { 
       position:relative;
       height: 15vh;
      width: 30vw;
      .star{
        position:absolute;
        top:-52px;
        left:0;
        height:100%;
        width:100%;
      }
      // background-color: red;

      .font{
         height:100%;
         width:100%;
      }
}
  
  .decrp {
      color:#e6d0cb;
      font-weight: 300;
      font-size: 30px;
      line-height: 30px;
      margin-top: 60px;
      text-align: center;
      text-shadow: 1px 1px 5px #970000;
      font-family: "AavartanFont";
      position: absolute;
      top:45vh;
      right: 2vw;
      width: 50vw;
      z-index: 2;
  
    }

  
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
    .gamfi_v2_hero_left h2 {
      font-size: 6rem; /* Adjust font size for 1024px */
    }
    
    .gamfi_v2_hero_thumb .rocket_thumb2 {
  position: absolute;
  top: 30%;
  left: 1rem;
  animation: jxHqgd 5s infinite;
  z-index: 0;
  height: 25vw;

    .gamfi_v2_hero_left .gamfi_v2_hero_thumb {
      .rocket_thumb {
        height: 300px;
      }
      .rocket_thumb2 {
        height: 160px;
      }

    }
      .decrp{
        font-size:1rem !important;
      }
    .btncontainer{
      top:40% !important;
    }

  }
    // @media only screen and(max-width:460px){
    //    .row{
    //      flex-direction:column;
    //    }
    // }

  @media only screen and (max-width: 861px) {
    .btncontainer {
      top: 90%;
      left:10%;
    }
  .gamfi_v2_hero_left .gamfi_v2_hero_thumb .rocket_thumb2 {
  position: absolute;
  top: 30%;
  left: 1rem;
  animation: jxHqgd 5s infinite;
  z-index: 0;
  height: 25vw;
   } 
  .gamfi_v2_hero_right .decrp {
  color: black;
  font-weight: 300;
  font-size: 1.5rem !important;
  line-height: 30px;
  margin-top: 10px;
  text-align: center;
  text-shadow: 1px 1px 5px #970000;
  font-family: "AavartanFont";
  position: absolute;
  top: 30vh;
  right: 2vw;
  width: 50vw;
  z-index: 2;
  }
}

  @media only screen and (max-width: 769px) {

    // .row{
    //    dispaly:flex;
    //    flex-direction:column;
    // }
    .btncontainer {
      top: 75% !important;
    }
    .colmd{
       width:0 !important;
    }
    .colmd2{
       width:100vw !important;
    }

    .decrp{
      color:#e6d0cb ;
      font-weight: 600;
      padding-top:3rem  !important;
      margin-right:2rem !important;
      padding-bottom:6rem !important;
      font-size:28px !important;
      line-height: 28px !important;
      margin-top: 60px !important;
      text-shadow: 1px 1px 5px #970000;
      font-family: "AavartanFont";
      position: absolute;
      top:35% !important;
      width: 86vw !important;
    }

    .aavartan-font{
        width:50vw !important;
        display:flex;
        align-self:center;
        height:15vh !important;
    }

    .gamfi_v2_hero_right .metaportal_fn_button_3 {
      left: 35%;
      width: 250px;
    }

    .gamfi_v2_hero_thumb .rocket_thumb {
      height: 150px !important;
    }

    .rocket_thumb2 {
      bottom: vh !important;
      height: 200px !important;
    }
  }

  @media only screen and (max-width: 571px) {
    .btncontainer {
      top: 82% !important;
    }
    .decrp{
      font-size:1.3rem !important;
      padding-left:1.5rem !important;
    }

    .gamfi_v2_hero_right .rocket_thumb {
      height: 100px;
      right: 0px;
    }

    .rocket_thumb2 {
      top: 15rem;
      left:40%;
      height:30vh;
    }
  }

  @media only screen and (max-width: 426px) {

    .btncontainer{
       top:80vh !important;
       left:43% !important;
    }
    .colmd2 .gamfi_v2_hero_right .decrp {
      font-size:1.3rem !important;
      margin-top:10px;
      margin:0;
      // margin:2px !important;
      // margin-left:rem !important;
      top:20%;
      width:100vw;
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
 
    colmd2{
    width:100%;
    margin:0 !important;
    }

  .gamfi_v2_hero_right .aavartan-font {
  position: relative;
  height: 15vh;
  width: 77vw;
}
  .btncontainer{
    top:80% !important:
  }

    .metaportal_fn_button_3 {
      bottom: 15vh !important;
    }
      .decrp{
        font-size:5px !important;
        line-height:10px;
        margin-left:-2px !important;
         text-align:center
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
