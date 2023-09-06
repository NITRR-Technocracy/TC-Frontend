import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { MdClear } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';

import tc2 from "../assets/images/tcLogo.png";
import "./Navbar.css";

const Navbar = ({ walletToggle, navigationToggle }) => {
    const [toggler, setToggler] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const closeNavbar = () => {
        if (window.innerWidth <= 768) {
            setToggler(false);
        }
    };

    useEffect(() => {
        setActiveLink(location.pathname);
                        // Add event listener for scroll
                        window.addEventListener("scroll", handleScroll);

                        // Cleanup the event listener on unmount
                        return () => {
                            window.removeEventListener("scroll", handleScroll);
                        };
    }, [location.pathname]);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setScrolled(true); // User has scrolled down
        } else {
            setScrolled(false); // User is at the top
        }
    };

    return (
        <div>
             <div className={scrolled ? "scrolled" : "notscrolled"}>

</div>
            <nav>
                <a href="#" onClick={() => navigationToggle(true)}>
                    <img className="navlogo" src={tc2} alt="#jpg" />
                </a>
                <div>
                    <ul id="navbar" className={toggler ? "navbar active" : "navbar"}>
                        <li className={activeLink === "/" ? "active-link" : ""}>
                            <NavLink to="/" exact activeClassName="active-link" onClick={closeNavbar}>
                                HOME
                            </NavLink>
                        </li>
                        <li className={activeLink === "/aavartan" ? "active-link" : ""}>
                            <NavLink to="/aavartan" activeClassName="active-link" onClick={closeNavbar}>
                                AAVARTAN
                            </NavLink>
                        </li>
                        <li className={activeLink === "/vigyaan" ? "active-link" : ""}>
                            <NavLink to="/vigyaan" activeClassName="active-link" onClick={closeNavbar}>
                                VIGYAAN
                            </NavLink>
                        </li>
                        <li className={activeLink === "/sponsors" ? "active-link" : ""}>
                            <NavLink to="/sponsors" activeClassName="active-link" onClick={closeNavbar}>
                                SPONSORS
                            </NavLink>
                        </li>
                        <li className={activeLink === "/team" ? "active-link" : ""}>
                            <NavLink to="/team" activeClassName="active-link" onClick={closeNavbar}>
                                TEAM
                            </NavLink>
                        </li>
                        <li>
                            <div onClick={closeNavbar} >
                            <a onClick={(e) => { e.preventDefault(); walletToggle(true); }}>LOGIN</a>
                            </div>
                            
                        </li>
                        <div className="responsive-close" onClick={() => navigationToggle(true)}><MdClear id='bars' /></div>
                    </ul>
                </div>
                <div className="responsive-open" onClick={() => navigationToggle(true)}>
                    <AiOutlineMenu id='bars' />
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(Navbar);
