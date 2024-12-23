import React from "react";
import title from "../../assets/images/HomePage/title.png";
import po from "../../assets/images/HomePage/po.png";
import { useNavigate } from "react-router-dom";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="Home-sec1">
      <div className="title-cont">
        <div className="title-cont-inn">
          <img className="home-title" src={title} alt=""/>
        </div>
        <div className="img-cont">
          <img className="po-img title-comp" src={po} alt="" />
        </div>
        <div className="btn-cont">
          <button className="stone btn-sec1" onClick={(e) => {
            navigate('/vigyaan')
          }}>VIGYAAN</button>
          <button className="stone btn-sec1" onClick={(e) => {
            navigate('/ignite')
          }}>igNITe</button>
        </div>
      </div>
    </div>
  );
}
