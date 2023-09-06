import { Link, useParams, useNavigate  } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Arch from "../components/branches/Arch";
import BioMed from "../components/branches/BioMed";
import CsItMca from "../components/branches/CsItMca";
import Civil from "../components/branches/Civil";
import Biotech from "../components/branches/Biotech";
import Mech from "../components/branches/Mechanical";
import Mining from "../components/branches/Mining";
import Meta from "../components/branches/Meta";
import EE from "../components/branches/EE";
import ECE from "../components/branches/ECE";
import Chem from "../components/branches/Chem";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import PageBanner from "../layout/PageBanner";
import ProblemStatement from "../sections/ProblemStatement";
import StarFieldAnimation from "../layout/StarFieldAnimation";

const ProblemStatements = (props) => {
  const { branch } = useParams();
  const navigate = useNavigate ();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
    if (window.scrollY > 0) {
        setScrolled(true); // User has scrolled down
    } else {
        setScrolled(false); // User is at the top
    }
};

  const handleCategoryClick = (newBranch) => {
    navigate(`/vigyaan/statements/${newBranch}`);
  };

  const renderSelectedBranch = () => {
    switch (branch) {
      case 'Arch':
        return <Arch />;
      case 'BioMed':
        return <BioMed />;
      case 'Biotech':
        return <Biotech />;
      case 'Chem':
        return <Chem />;
      case 'Civil':
        return <Civil />;
      case 'CsItMca':
        return <CsItMca />;
      case 'ECE':
        return <ECE />;
      case 'EE':
        return <EE />;
      case 'Mech':
        return <Mech />;
      case 'Meta':
        return <Meta />;
      case 'Mining':
        return <Mining />;
      default:
        return <Arch />;
    }
  };
  const isActive = (category) => branch === category;
  return (
    <div className={scrolled ? "Vigyaanscrolled" : "Vigyaannotscrolled"}>
      <div className="dark-overlay2" style={{zIndex:"1"}}></div>
          <StarFieldAnimation/>

    <div className="metaportal_fn_blog_single" style={{position:"relative",zIndex:"2"}}>
      <PageBanner pageName={"statements"} prePageLink={"/vigyaan"} prePageName={"vigyaan"} />
      <div className="container small">
        <div className="metaportal_fn_wsidebar">
          {renderSelectedBranch()}
          {/* !Left Sidebar */}
          {/* Right Sidebar */}
          <div className="sidebar_right">
            {/* Widget (Custom Categories) */}
            <div className="widget widget-custom-categories">
              <div className="wid-title">
                <span className="text">Categories</span>
                <span className="icon" />
              </div>
              <div
                className="metaportal_fn_categories"
                data-more="Show More"
                data-less="Show Less"
                data-count={4}
              >
                <ul>
                  <li>
                    <a onClick={() => handleCategoryClick('Arch')} className={isActive('Arch') ? 'activa' : ''}>
                      <span>Architecture</span>
                    </a>
                    <span className="count">11</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('BioMed')} className={isActive('BioMed') ? 'activa' : ''}>
                      <span>Biomedical</span>
                    </a>
                    <span className="count">8</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('Biotech')} className={isActive('Biotech') ? 'activa' : ''}>
                      <span>Biotechnology</span>
                    </a>
                    <span className="count">12</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('Civil')} className={isActive('Civil') ? 'activa' : ''}>
                      <span>Civil</span>
                    </a>
                    <span className="count">14</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('CsItMca')} className={isActive('CsItMca') ? 'activa' : ''}>
                      <span>CSE / IT / MCA</span>
                    </a>
                    <span className="count">11</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('ECE')} className={isActive('ECE') ? 'activa' : ''}>
                      <span>Electronics & Communications</span>
                    </a>
                    <span className="count">11</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('EE')} className={isActive('EE') ? 'activa' : ''}>
                      <span>Electrical</span>
                    </a>
                    <span className="count">10</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('Mech')} className={isActive('Mech') ? 'activa' : ''}>
                      <span>Mechanical</span>
                    </a>
                    <span className="count">8</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('Meta')} className={isActive('Meta') ? 'activa' : ''}>
                      <span>Metallurgy</span>
                    </a>
                    <span className="count">7</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('Mining')} className={isActive('Mining') ? 'activa' : ''}>
                      <span>Mining</span>
                    </a>
                    <span className="count">16</span>
                  </li>
                  <li>
                    <a onClick={() => handleCategoryClick('Chem')} className={isActive('Chem') ? 'activa' : ''}>
                      <span>Chemical</span>
                    </a>
                    <span className="count">9</span>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
            </div>
            {/* !Widget (Custom Categories) */}
          </div>
          {/* !Right Sidebar */}
        </div>
        {/* !Sidebar */}
      </div>
      <style jsx>
      </style>
    </div>
    </div>
  );
};
export default ProblemStatements;
