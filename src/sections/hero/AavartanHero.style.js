import styled, { keyframes } from "styled-components";
import bannerBG from "../../assets/images/aavartanbg.webp";

const rocketAnimation = keyframes`
    0%,
    100% {
        bottom: 20px;
    }

    50% {
        bottom: 80px;
    }
`;

const rocketAnimation2 = keyframes`
    0%,
    100% {
        left: 20px;
    }

    50% {
        left: 80px;
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

  .ufo_shape {
    position: absolute;
    top: 2%;
    left: 10%;
    z-index: 1;
  }

  .row {
    display: flex;
  }

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
      
    }

    p {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      margin-top: 60px;
      text-shadow: 3px 3px 5px black;
      font-family: Inter;
      position: absolute;
      top: 35vh;
      width: 50vw;
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
        right: 10px;
        animation: ${rocketAnimation} 5s infinite;
        z-index: 1;
        height: 500px;
        
      }

      .rocket_thumb2 {
        position: absolute;
        bottom: 5px;
        animation: ${rocketAnimation2} 5s infinite;
        z-index: 1;
        left: 100px;
        height: 280px;
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
    .gamfi_v2_hero_left h2 {
      font-size: 6rem; /* Adjust font size for 1024px */
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

  @media only screen and (max-width: 769px) {
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
      text-shadow: 3px 3px 5px black;
      font-family: Inter;
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
           height: 200px ;
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
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      margin-top: 30px;
      text-shadow: 3px 3px 5px black;
      font-family: Inter;
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
           height: 120px ;
          }
  
         .rocket_thumb2 {
           height: 120px ;
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
          }
  
         .rocket_thumb2 {
           height: 100px ;
          }
      }
    }
  }
    @media only screen and (max-width: 321px) {
    .gamfi_v2_hero_right{
      .metaportal_fn_button_3 {
        position: absolute;
        bottom: 16vh;
        left: 10%;
        width: 200px;
      }
    }
  }
`;

export default AavartanStyleWrapper;
