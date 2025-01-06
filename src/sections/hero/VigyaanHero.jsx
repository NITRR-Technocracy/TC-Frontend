// import Button from "components/button";
// import BannerStyleWrapper from "./Banner.styl
import planet from "../../assets/images/vighero/minecraft-png-13361.png";
import ring from "../../assets/images/vighero/planet_orbit.webp";
import VigyaanStyleWrapper from "./VigyaanHero.style";
import font from '../../assets/Aavartan New/VIGYAAN-12-8-2024.png'
 import prop6 from "../../assets/prop6.webp";
//  import prop7 from "../../assets/prop7.webp";
import prop8 from "../../assets/prop8.webp";
import prop5 from "../../assets/minecraft-png-13354.png";
import prop7 from "../../assets/minecraft-png-13357.png"
// import RocketButton from "../../components/RocketButton";

const VigyaanHero = () => {
  const scrollToRegistration = () => {
    const registrationElement = document.getElementById("registration");
    if (registrationElement) {
      registrationElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <VigyaanStyleWrapper>
        <div className="container">
          <div className="vigyaan-planet">
            <img src={planet} alt="" />
            <div className="vigyaan-font">
              <img src={font} alt="" />
            </div>
          </div>
          <img className="asto" src={prop8} alt="asto" />
          <img className="planet1" src={prop5} alt="pl1" />
          <img className="planet3" src={prop7} alt="pl3" />
          <div className="vigyaan-desc">
            Vigyaan, the science exhibition organized during the tech fest,
            showcases groundbreaking innovations, cutting-edge technologies, and
            exciting projects, providing a platform for students to delve deeper
            into the world of science and explore limitless possibilities.
          </div>
          {/* <img className="vigyaan-ring" src={ring} alt="name" /> */}

          <div className="btncontainer2" style={{ display: "flex" }}>
            {/* <a href="#" className="funkybtn">Click Here To Register</a> */}
            <a className="cta2">
              <span>CLICK TO REGISTER</span>
              {/* <span >Registration Closed</span> */}
              {/* <span>Registrations open</span> */}
            </a>
          </div>

          {/* <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>
                  Welcome to Vigyaan
                </h2>
                <p>
                  2023
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    <img height="200px"  src={rocketThumb} alt="Rocket thumb" />
                  </span>

                  {particles?.map((particle, i) => (
                    <span
                      key={i}
                      className={`rocket_particle particle_${i + 1}`}
                    >
                      <img src={particle} alt="rocket particle" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </VigyaanStyleWrapper>
    </>
  );
};

export default VigyaanHero;
