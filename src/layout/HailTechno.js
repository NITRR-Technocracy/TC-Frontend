import { useEffect } from "react";
import {holdSection} from '../utilits'
import { RxRocket } from "react-icons/rx";

const HailTechno = () => {
  useEffect(() => {
    holdSection();
  }, []);
  return (
    <div id="social" className="hold">
       <div className="social">
        <h4 className="title" style={{fontFamily:"font1", fontSize:"1.5rem", letterSpacing:"2px", display:"flex"}}>
          HAIL &nbsp;TECHNOCRACY &nbsp;<RxRocket size={40}/>
        </h4>
      </div>
    </div>
  );
};
export default HailTechno;
