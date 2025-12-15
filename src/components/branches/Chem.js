import React from "react";
import Title from "../Title";
import pdf from "../../assets/problem_statements/CHEM.pdf";
import ScrollButton from "../ScrollButton";

const Chem = () => {
  return (
    <div className="sidebar_left">
      <div className="single_title">
        <Title color="CHEMICAL" />
        <br />
      </div>
      <ScrollButton destinationId="downloadPDF"/>
      <div className="single_desc">
        <p>
          <h3>CHEM01 : Novel delivery systems for preservation agents</h3>
          Develop novel delivery systems for preservation agents to ensure controlled release and prolonged effectiveness. Traditional preservation methods often involve the direct addition of preservatives or antimicrobial agents to food matrices, which may result in uneven distribution or rapid depletion of the active compounds. To address these challenges, develop delivery systems that can ensure the controlled release of preservation agents over time, thereby prolonging their effectiveness.
        </p>

        <p>
          <h3>CHEM02 : Waste Heat Capture and Utilization in Chemical Processes</h3>
          Waste heat generated during chemical processes represents a significant untapped resource that, if harnessed effectively, could improve overall energy efficiency and reduce the environmental footprint of industrial operations. This problem statement aims to explore innovative strategies for capturing and utilizing waste heat in chemical processes. Investigate heat exchange technologies, energy storage methods, and process integration approaches to effectively recover and utilize waste heat, reducing environmental impact and increasing overall energy efficiency.
        </p>

        <p>
          <h3>CHEM03 : Greenhouse Gas Conversion to Value-Added Chemicals</h3>
          The increasing levels of greenhouse gases, particularly carbon dioxide (CO2) and methane (CH4), in the atmosphere pose a significant environmental challenge. This problem statement seeks to address this issue by exploring novel catalytic materials and reaction pathways for the conversion of greenhouse gases into valuable chemicals, aiming to both mitigate climate change and create economically viable processes. The project aims to develop sustainable processes with a focus on mitigating climate change and creating economically viable routes for utilizing carbon dioxide and methane as feedstocks for chemical synthesis.
        </p>

        <p>
          <h3>CHEM04 : Integration of Carbon Capture Technologies in Petrochemical Plants</h3>
          The petrochemical industry is a significant contributor to carbon dioxide (CO2) emissions, raising environmental concerns. This problem statement addresses the imperative to develop and implement innovative carbon capture technologies within petrochemical plants. The primary goal is to mitigate greenhouse gas emissions while exploring economically feasible and scalable solutions.
        </p>

        <p>
          <h3>CHEM05 : Efficiency Optimization in Biodiesel Production</h3>
          Design a single-flow reactor system that enhances the efficiency of biodiesel production by optimizing reaction conditions, catalyst usage, and feedstock composition.
        </p>

        <p>
          <h3>CHEM06 : Design of Green Catalysts and Reaction Conditions</h3>
          Develop green catalysts and environmentally benign reaction conditions for waste recycling processes, leveraging principles of green chemistry to minimize the use of hazardous reagents, reduce waste generation, and promote sustainable synthesis pathways.
        </p>

        <p>
          <h3>CHEM07 : Dual-ion battery system for electric vehicles</h3>
          Design a dual-ion battery system utilizing both cation and anion intercalation mechanisms to achieve high energy density and fast charging capabilities for electric vehicle applications.
        </p>

        <p>
          <h3>CHEM08 : Continuous Flow Separation Processes</h3>
          Develop continuous flow separation processes, including continuous chromatography, continuous crystallization, and continuous extraction, to achieve improved productivity, reduced solvent consumption, and enhanced process control compared to batch processes.
        </p>

        <p>
          <h3>CHEM09 : Extraction of essential oils from aromatic plants</h3>
          Develop a sustainable method for the extraction of essential oils from aromatic plants, exploring green solvent extraction techniques and process intensification methods to improve extraction efficiency and product quality.
        </p>

        <p>
          <h3>CHEM10 : Production of slow-release fertilizers using encapsulation techniques</h3>
          Design a process for the production of slow-release fertilizers using encapsulation techniques, such as coating nitrogen, phosphorus, and potassium (NPK) compounds with biodegradable polymers or nanostructured materials, to improve nutrient efficiency and reduce nutrient leaching. Traditional fertilizers often release nutrients rapidly upon application, leading to potential nutrient leaching, volatilization, and inefficient nutrient uptake by plants. Slow-release fertilizers offer a solution by releasing nutrients gradually over an extended period, matching plant nutrient demands and reducing environmental impacts.
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

export default Chem;
