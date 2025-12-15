import React from "react";
import Title from "../Title";
import pdf from "../../assets/problem_statements/MME.pdf";
import ScrollButton from "../ScrollButton";

const Meta = () => {
  return (
    <div className="sidebar_left">
      <div className="single_title">
        <Title color="METALLURGY" />
        <br />
      </div>
      <ScrollButton destinationId="downloadPDF"/>
      <div className="single_desc">
        <p>
          <h3>
            {" "}
            MME01 : Dust-Repellent Thin-Film Coating for Solar Cells{" "}
          </h3>
          Solar cell efficiency can be significantly reduced by dust and dirt accumulation on their surface. Frequent cleaning can be expensive and impractical in remote locations. The goal is to create a surface coating for solar cells that repels dust and dirt particles, minimizing maintenance and maximizing energy output.
        </p>

        <p>
          <h3>
            {" "}
            MME02 : Green Iron and Steel Production{" "}
          </h3>
          The Steel industry is a significant contributor to global carbon emissions. Traditional methods of steel production rely heavily on coal as a reductant, which results in greenhouse gas emissions and environmental pollution. With increasing environmental regulations and the urgent need to combat climate change, there is a pressing need to develop more sustainable methods of iron and steel production.
        </p>

        <p>
          <h3>
            {" "}
            MME03 : E-Waste Metal Extraction{" "}
          </h3>
          Electronic waste is one of the fastest-growing waste streams globally, driven by rapid technological advancements and high demand for electronic products. E-waste contains a variety of valuable metals such as gold, silver, copper, and rare earth elements, which can be recovered and recycled. However, existing extraction methods are often inefficient, environmentally hazardous, and expensive.
        </p>

        <p>
          <h3>
            {" "}
            MME04 : Advanced Battery System Design for High-Performance EVs{" "}
          </h3>
          Electric vehicles (EVs) are playing a crucial role in the transition towards sustainable transportation. However, battery technology remains a key challenge, limiting factors like range, charging speed, and overall cost. There is a need to develop a next-generation battery system that addresses the limitations of current EV batteries.
        </p>

        <p>
          <h3>
            {" "}
            MME05 : Recover Aluminium from Dross{" "}
          </h3>
          Aluminium dross, a by-product of aluminium smelting and casting processes, poses significant environmental and economic challenges. It consists of a mixture of aluminium metal and oxides, along with other impurities such as aluminium nitride, aluminium carbide, and aluminium oxide. The efficient recovery of aluminium from dross is essential to minimize waste generation, promote resource sustainability, and alleviate environmental concerns associated with its disposal.
        </p>

        <p>
          <h3>
            {" "}
            MME06 : Innovative Waste Management System for Iron and Steel Production{" "}
          </h3>
          The iron and steel industry is fundamental to modern infrastructure and manufacturing, providing essential materials for construction, transportation, and various industrial applications. However, this industry is also a major producer of waste, generating substantial amounts of solid, liquid, and gaseous byproducts. Efficient and sustainable waste management is crucial to mitigate the environmental impact, comply with regulatory standards, and enhance the overall efficiency of production processes. Innovations in waste management can significantly contribute to the sustainability and economic viability of the iron and steel industry.
        </p>

        <p>
          <h3>
            {" "}
            META07 : Advanced Biocompatible Material for Enhanced Biofluid Diagnostics{" "}
          </h3>
          Accurate detection and analysis of biomarkers in biofluids such as blood, saliva, and cerebrospinal fluid (CSF) are essential for early disease diagnosis and effective monitoring. However, these biomarkers often face degradation and interference within biofluids, leading to unreliable diagnostic results. There is an urgent need for innovative materials that can protect these biomarkers from degradation, selectively capture them, and possess antimicrobial properties. Such materials would significantly enhance diagnostic precision and efficiency across a range of biofluids, paving the way for improved healthcare outcomes.
        </p>
        <p>
          <h3>
            {" "}
            META08 : AI-Powered Refractory Monitoring and Optimization{" "}
          </h3>
          The efficient operation of high-temperature industrial furnaces is crucial for various manufacturing processes across multiple industries, including steel, cement, glass, and ceramics. Central to the functionality of these furnaces is the integrity of their refractory linings, which protect the furnace walls from extreme temperatures, chemical corrosion, and mechanical stress. However, the maintenance and management of refractory linings present significant challenges due to the harsh operating conditions and the complex nature of degradation mechanisms.
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

export default Meta;
