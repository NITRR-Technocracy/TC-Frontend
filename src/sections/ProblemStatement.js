import React, { useEffect } from "react";

import styles from "./ProblemStatements.module.css";

import AOS from "aos";

import "aos/dist/aos.css";

import Title from "../components/Title";

import { Link } from "react-router-dom";

import arch from "../assets/problem_statements/Arch.pdf"

import biomed from "../assets/problem_statements/BME.pdf"

import biotech from "../assets/problem_statements/BioTech.pdf"

import chem from "../assets/problem_statements/CHEM.pdf"

import civil from "../assets/problem_statements/Civil.pdf"

import CsItMca from "../assets/problem_statements/MCSIT.pdf"

import ece from "../assets/problem_statements/ECE-mod.pdf"

import ee from "../assets/problem_statements/EE.pdf"

import mech from "../assets/problem_statements/Mech.pdf"

import meta from "../assets/problem_statements/MME.pdf"

import mining from "../assets/problem_statements/Mining.pdf"



const ProblemStatement = () => {

  useEffect(() => {

    AOS.init();

  }, []);

  return (

    <div id="problem-statements" className={styles.container}>

      <Title color={"PROBLEM"} noncolor={"STATEMENTS"} />

      <div className={`${styles.ProblemStatements} ${styles.container}`}>

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/tatements/${'Arch'}`}> */}

          

          {/* <a href={arch}  target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white" }}><div data-aos="flip-up" className={styles.branch}>ARCH</div></a> */}

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'BioMed'}`}> */}

          

          <a href={biomed} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}><div data-aos="flip-up" className={styles.branch}>BIO-MED</div></a>

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Biotech'}`}> */}

          

          <a href={biotech} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}><div data-aos="flip-up" className={styles.branch}>BIOTECH</div></a>

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Chem'}`}> */}

          

          <a href={chem} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}> <div data-aos="flip-up" className={styles.branch}>CHEMICAL</div> </a>

           

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Civil'}`}> */}

          

          <a href={civil} target="_blank"rel="noreferrer" style={{ textDecoration: "none", color:"white"}}><div data-aos="flip-up" className={styles.branch}> CIVIL</div></a>

            

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'CsItMca'}`}> */}

          

          <a href={CsItMca} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}><div data-aos="flip-up" className={styles.branch}>CSE / IT / MCA</div></a>

            

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'ECE'}`}> */}

          

          <a href={ece} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}><div data-aos="flip-up" className={styles.branch}>ECE</div></a>

            

          

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'EE'}`}> */}

         

          <a href={ee} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}> <div data-aos="flip-up" className={styles.branch}>EE </div></a>

            

         

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Mech'}`}> */}

          

          <a href={mech} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}><div data-aos="flip-up" className={styles.branch}>MECH  </div></a>

        

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Meta'}`}> */}

          

          <a href={meta} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}> <div data-aos="flip-up" className={styles.branch}>META</div></a>

        {/* </Link> */}

        {/* <Link style={{ textDecoration: "none" }} to={`/vigyaan/statements/${'Mining'}`}> */}

         

          <a href={mining} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color:"white"}}> <div data-aos="flip-up" className={styles.branch}>MINING </div></a>

         

        {/* </Link> */}



        



      </div>

    </div>

  );

};



export default ProblemStatement;