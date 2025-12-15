import React from "react";
import Title from "../Title";
import pdf from "../../assets/problem_statements/Mining.pdf";
import ScrollButton from "../ScrollButton";

const Mining = () => {
  return (
    <div className="sidebar_left">
      <div className="single_title">
        <Title color="MINING" />
        <br />
      </div>
      <ScrollButton destinationId="downloadPDF"/>
      <div className="single_desc">
        <p>
          <h3> MIN01 :  Dynamic Route Planning and Optimization for Truck Haulage </h3>
          Truck  haulage  plays  a  crucial  role  in  the  transportation  of  coal  within  mining  operations. 
However,  the  dynamic  nature  of  mine  environments,  changing  operational  conditions,  and 
varying  demands  necessitate  the  development  of  intelligent  systems  for  dynamic  route 
planning  and  optimization.  The  challenge  is  to  create  adaptive  systems  that  can  optimize 
truck  routes  in  real  time,  improving  efficiency,  reducing  congestion,  and  enhancing  overall 
transportation effectiveness. 
        </p>

        <p>
          <h3> MIN02 :  Ventilation Survey Protocol at High Altitudes </h3>
          Develop  a  ventilation  survey  protocol  for  a  mining  facility  operating  at  high  altitudes, 
addressing  the  reduced  oxygen  levels  and  unique  atmospheric  conditions  to  safeguard  the 
health  and  well-being  of  workers  and  optimize  equipment  performance.  Mining  operations  at 
high  altitudes  present  unique  challenges  in  terms  of  air  quality,  safety,  and  health  for 
underground workers
        </p>

        <p>
          <h3> MIN03 : Integration  of  Drones  and  Unmanned  Aerial  Vehicles  (UAVs)  in 
          Rescue  Operations </h3>
          Develop  UAVs  capable  of  rapid  exploration  of  inaccessible  mine  areas,  delivering  essential 
supplies,  and  providing  real-time  video  feeds  to  enhance  situational  awareness  and  support 
decision-making during emergencies. 
        </p>

        <p>
          <h3> MIN04 :   Impact of Varying seam thickness on high wall mining productivity. </h3>
          Develop  a  predictive  model  incorporating  geological  data  to  optimise  the  selection  of 
mining  equipment  and  cutting  parameters  for  different  seam  profiles  and  investigate  the 
impact of varying seam thickness on high wall mining productivity.
        </p>

        <p>
          <h3> MIN05 : Innovative Grouting Techniques for Strata Consolidation </h3>
          Develop  novel  grouting  techniques  that  not  only  consolidate  strata  but  also  address 
environmental  concerns  associated  with  conventional  methods.  Investigate  environmentally 
friendly  grouting  materials  and  methods  that  improve  the  long-term  stability  of  strata  and 
minimise ecological impact. 
        </p>

        <p>
          <h3> MIN06 : Stoping strategy for ore bodies with variable dip angles </h3>
          Develop  a  stoping  strategy  for  orebodies  with  variable  dip  angles,  taking  into  account 
geological  variations  to  optimise  ore  recovery  and  minimise  operational  challenges  in 
underground mining. 
        </p>

        <p>
          <h3> MIN07 :Minimizing  Material  Spillage  and  Contamination  on  Underground 
          Conveyors </h3>
          ransportation  process  on  underground  mine  conveyors,  focusing  on  maintaining  a  clean  and 
efficient material flow. 
        </p>

        <p>
          <h3> MIN08 :  Improving  Blast  Design  for  Selective  Ore  Fragmentation  in  Surface 
          Mining  </h3>
          Develop  blast  design  techniques  that  enable  selective  ore  fragmentation,  ensuring  efficient 
separation of ore and waste materials during surface mining operations. 
        </p>

        <p>
          <h3> MIN09 : Enhancing Grid Resilience Against Power Surges and Faults </h3>
          The  challenge  addressed  by  this  problem  statement  is  to  develop  measures  that 
enhance  the  resilience  of  electrical  power  transmission  grids  in  mining  operations 
against power surges and faults. A  resilient  grid  is  crucial  for  maintaining  a  stable  and  reliable  power  supply, 
minimizing the risk of disruptions and equipment damage. 
        </p>

        <p>
          <h3> MIN10 : Optimising dewatering strategies for flooded mines  </h3>
          Develop  efficient  and  cost-effective  dewatering  strategies  to  rapidly  remove  water  from 
flooded  mines,  considering  factors  such  as  pump  selection,  water  inflow  rates,  and  geological 
conditions  to  expedite  recovery.  The  recovery  process  heavily  relies  on  effective  dewatering, 
and optimising the strategies for this operation is crucial. 
        </p>

        <p>
          <h3> MIN11 : Innovative Techniques for Precise Mineral Recovery in Hydraulic Mining </h3>
          Develop  and  implement  novel  techniques  and  technologies  to  achieve  more  precise  mineral 
recovery in hydraulic mining operations, minimising waste and optimising resource utilisation. 
        </p>

        <p>
          <h3> MIN12 :   Eco-friendly Reclamation of Acid Mine Drainage </h3>
          Investigate  and  implement  innovative,  environmentally  sustainable  methods  for  the 
reclamation  of  acid  mine  drainage,  integrating  biological  treatments,  passive  systems,  and 
geochemical stabilisation during mine closure. 
        </p>

        <p>
          <h3> MIN13 :  Ambient air quality improvement system for open-pit mines  </h3>
          Develop  an  ambient  air  quality  improvement  system  for  open-pit  mines,  integrating  green 
infrastructure  and  innovative  landscaping  techniques  to  naturally  enhance  air  purification  and 
reduce particulate matter dispersion. 
        </p>

        <p>
          <h3> MIN14 :  Automated drone fleet to continuously monitor mine atmosphere  </h3>
          Create  an  automated  drone  fleet  equipped  with  air  sampling  devices  to  continuously  monitor 
the  mine  atmosphere,  providing  real-time  data  for  early  detection  of  pollutant  sources  and 
enabling rapid response to environmental concerns. 
        </p>

        <p>
          <h3> MIN15 :  Mine  lighting  solution  with  integrated  environmental  sensors  to  detect 
          hazardous gases  </h3>
          Design  a  mine  lighting  solution  with  integrated  environmental  sensors  to  detect  hazardous 
gases,  providing  real-time  feedback  to  miners  through  colour-coded  illumination,  ensuring 
their safety and well-being.
        </p>
      </div>
      <div
      id="downloadPDF"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0rem",
        }}
      >
        <a href={pdf} target="_blank" style={{ textDecoration: "none" }}>
          <div className="goodbtn">DOWNLOAD PDF</div>
        </a>
      </div>
    </div>
  );
};

export default Mining;
