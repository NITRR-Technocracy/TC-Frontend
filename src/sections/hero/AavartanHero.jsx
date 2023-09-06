// import Counter from "components/counter";
// import Button from "components/button";

import prop1 from "../../assets/prop1.webp";
import prop2 from "../../assets/prop2.webp";
import dollorIcon from "../../assets/images/tcLogo.png"
import rocketIcon from "../../assets/images/tcLogo.png"
import ufoShape from "../../assets/images/tcLogo.png"

import AavartanStyleWrapper from "./AavartanHero.style";
import { NavLink } from "react-router-dom";
const AavartanHero = () => {
  return (
    <>
      <AavartanStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="colmd">
              <div className="gamfi_v2_hero_left">
                <h2>AAVARTAN
                </h2>
                <p>
                Team Technocracy organizes a wide range of events, including hackathons, coding competitions, technical workshops, seminars, and technical talks by industry experts all under the banner of our annual Tech-Fest “Aavartan” . We also undertake technical projects and research initiatives.
                </p>
              </div>
            </div>
            <div className="colmd2">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <img className="rocket_thumb" src={prop1} alt="Rocket thumb" />
                  <img className="rocket_thumb2" src={prop2} alt="Rocket thumb" />
                </div>
                <NavLink to="/vigyaan">  <span className="metaportal_fn_button_3">Go To VIGYAAN</span></NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* <img height={20} src={ufoShape} alt="ufo shape" className="ufo_shape" /> */}
      </AavartanStyleWrapper>
    </>
  );
};

export default AavartanHero;
