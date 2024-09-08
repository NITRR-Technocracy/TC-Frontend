import { Fragment} from "react";
// import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
import { Link } from "react-router-dom";
// import TechTeam from "./pages/TechTeam";
import Tcfavicon from "../assets/TCfavicon.jpg"
import fb from "../assets/svgs/facebook.svg"
import insta from "../assets/svgs/insta.svg"
import linkedin from "../assets/svgs/linkedin.svg"
import x from "../assets/svgs/x.svg"
import yt from "../assets/svgs/youtube.svg"
// import {BsInstagram, BsFacebook} from 'react-icons/bs';
import '../App.css'
const Navigation = ({ navigation, navigationToggle }) => {
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <button
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </button>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a
                    href="https://www.instagram.com/nitrr.aavartan/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img
                      src={Tcfavicon}
                      alt="aavartan_logo"
                      width={100}
                    />
                  </span>
                  <span className="text">INSTAGRAM</span>
                </div>
              </li>
              {/* <li>
                <div className="item">
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/discord.png" alt="" />
                  </span>
                  <span className="text">Discord</span>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul>
                            <li>
                <Link to="/">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/events">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Events</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/aavartan">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Aavartan</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/vigyaan">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Vigyaan</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/ignite">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Ignite</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/aavartan">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Merchandise</span>
                  </div>
                </Link>
              </li>
              <li>
              <Link to="/team">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Team</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/sponsors">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Sponsors</span>
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link href="/blog-single">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Our Journey</span>
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Made With MAGIC by <br />
                <Link to="/tech-team">
                  <div onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Tech Team</span>
                  </div>
                </Link>
                {/* <div
                  target="_blank"
                  rel="noreferrer"
                  Tech Team
                </div> */}

              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/tc.nitrr">
                    {/* <BsFacebook/> */}
                    <img src={fb} width={22} alt="" />
                  </a>
                </li>
                {/* <li>
                  <a href="">
                  <SiGmail/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/nitrr.aavartan/">
                    {/* <BsInstagram/> */}
                    <img src={insta} width={22} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/aavartan/">
                    {/* <BsInstagram/> */}
                    <img src={linkedin} width={22} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/nitrr_aavartan">
                    {/* <BsInstagram/> */}
                    <img src={x} width={24} alt="" />
                  </a>
                </li>
                {/* <li>
                  <a href="">
                    <BsTelegram/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.youtube.com/@AAVARTANNITRAIPUR">
                    {/* <BsInstagram/> */}
                    <img src={yt} width={24} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
