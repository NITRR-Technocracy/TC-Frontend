import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/aavartanbg.webp";

const rocketAnimation = keyframes`
    0%,
    100% {
        bottom: 3rem;
    }

    50% {
        bottom: 6rem;
    }
`;

const rocketAnimation2 = keyframes`
    0%,
    100% {
        left: 3rem;
    }

    50% {
        left: 6rem;
    }
`;

const AavartanStyleWrapper = styled.section`
  position: relative;
  // background: url(${bannerBG});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
  height: 100vh;
  padding: 250px 0;
  overflow: hidden;

  .btncontainer{
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

  // .cta{
  //   position:absolute;
  //   top:70%;
  //   left:40%;
  // }

  .colmd {
    width: 85%;
    margin: 0;
  }

  .colmd2 {
    width: 35%;
    margin: 0;
  }

  .gamfi_v2_hero_left {
    h2 {
      font-family: angora;
      font-size: 8rem;
      color: #ffffff;
      text-shadow: 3px 3px 10px black;
      line-height: 70px;
      text-transform: uppercase;
      position: absolute;
      top: 25vh;
      img {
        margin: 0 15px;
      }
      z-index:2;
    }

    p {
      color: rgba(255, 255, 255, 0.937);
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      margin-top: 60px;
      text-shadow: 1px 1px 1px black;
      font-family: "kanit";
      position: absolute;
      top: 35vh;
      width: 50vw;
      z-index:2;
    }
  }

  .gamfi_v2_hero_right {
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
      justify-content: center;
      align-items: center;

      .rocket_thumb {
        position: absolute;
        right: 1rem;
        animation: ${rocketAnimation} 5s infinite;
        z-index: 0;
        height: 400px;
        
      }

      .rocket_thumb2 {
        position: absolute;
        bottom: 1rem;
        animation: ${rocketAnimation2} 5s infinite;
        z-index: 0;
        left: 100px;
        height: 250px;
      }
    }

    .coin_cap_list {
      display: flex;
      justify-content: space-between;

      li {
        width: 33%;

        h5 {
          line-height: 40px;
          color: #ffffff;
          margin-bottom: 0px;
          font-size: 16px;
        }

        .counter-number {
          font-family: "Russo One";
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 40px;
          text-transform: uppercase;
          color: #6d4afe;
        }
      }
    }
  }

  @media only screen and (max-width: 1441px) {
    .gamfi_v2_hero_left h2 {
      font-size: 8rem; /* Adjust font size for 1440px */
    }
    .gamfi_v2_hero_right{
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
           height: 400px ;
          }
  
         .rocket_thumb2 {
           height: 280px ;
          }
      }
    }
    
  }

  @media only screen and (max-width: 1025px) {
    .gamfi_v2_hero_left{
      h2 {
        font-size: 6rem; /* Adjust font size for 1024px */
      }
    } 
    .gamfi_v2_hero_right{
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
           height: 300px ;
          }
  
         .rocket_thumb2 {
           height: 160px ;
          }
      }
    }
  }
  @media only screen and (max-width: 861px) {
    .btncontainer{
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
     }
  }
 
  @media only screen and (max-width: 769px) {
    .btncontainer{
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
     }
    .gamfi_v2_hero_left {
    h2 {
      font-size: 4rem; /* Adjust font size for 768px */
      top: 15vh;
    }
    p {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      margin-top: 30px;
      text-shadow: 1px 1px 1px black;
      font-family: "kanit";
      position: absolute;
      top: 25vh;
      width: 70vw;
    }
    
  }
    .gamfi_v2_hero_right{
      .metaportal_fn_button_3 {
        position: absolute;
        bottom: 20vh;
        left: 35%;
        width: 250px;
      }
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
           height: 200px ;
          }
  
         .rocket_thumb2 {
           height: 100px ;
          }
      }
    }
  
  }
  @media only screen and (max-width: 571px) {
    .gamfi_v2_hero_left {
      h2 {
        font-size: 3rem; /* Adjust font size for 768px */
        top: 15vh;
      }
    }
    .btncontainer{
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
     }
     .gamfi_v2_hero_right{
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
           height: 100px ;
           right: 0px;
          }
  
         .rocket_thumb2 {
           height: 80px ;
           bottom: 0rem;
          }
      }
    }
  }

  @media only screen and (max-width: 426px) {
    .gamfi_v2_hero_left {
      h2 {
      font-size: 3rem; /* Adjust font size for 425px */
      color: #ffffff;
      text-shadow: 3px 3px 10px black;
      line-height: 70px;
      text-transform: uppercase;
      position: absolute;
      top: 15vh;
      img {
        margin: 0 15px;
      }
    }
    p {
      color: #ffffff;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      margin-top: 30px;
      text-shadow: 1px 1px 1px black;
      font-family: "kanit";
      position: absolute;
      top: 25vh;
      width: 90%;
    }
  }
    .gamfi_v2_hero_right{
      .metaportal_fn_button_3 {
        position: absolute;
        bottom: 20vh;
        left: 25%;
        width: 200px;
      }
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
           height: 100px ;
           right: 0px;
          }
  
         .rocket_thumb2 {
           height: 80px ;
           bottom: 0rem;
          }
      }
    }
  }

  @media only screen and (max-width: 376px) {
    .gamfi_v2_hero_left h2 {
      font-size: 2.5rem; /* Adjust font size for 375px */
    }
    .gamfi_v2_hero_right{
      .metaportal_fn_button_3 {
        position: absolute;
        bottom: 18vh;
        left: 25%;
        width: 200px;
      }
      .gamfi_v2_hero_thumb {
        .rocket_thumb {
           height: 100px ;
           right: 0px;
          }
  
         .rocket_thumb2 {
           height: 80px ;
           bottom: 0px;
          }
      }
    }
  }
    @media only screen and (max-width: 321px) {
      .gamfi_v2_hero_left h2 {
        font-size: 2rem;
      }
    .gamfi_v2_hero_right{
      .metaportal_fn_button_3 {
        position: absolute;
        bottom: 16vh;
        left: 10%;
        width: 200px;
      }
    }
    @media only screen and (max-width: 301px) {
      .btncontainer{
        top: 90%;
        width:90%;
       }
       .cta {
        font-size: 10px;
      }
      .gamfi_v2_hero_right{
        .gamfi_v2_hero_thumb {
          .rocket_thumb {
             height: 100px ;
             right: 0px;
            }
    
           .rocket_thumb2 {
             height: 80px ;
             bottom: 5rem;
            }
        }
      }
    }
    @media only screen and (max-width: 261px) {
      .btncontainer{
        top: 95%;
        width:90%;
       }
       .gamfi_v2_hero_left {
        h2 {
        font-size: 1rem;
        }
        p{
          font-size: 0.8rem;
        }
    }
 
    }

  }
`;

export default AavartanStyleWrapper;
