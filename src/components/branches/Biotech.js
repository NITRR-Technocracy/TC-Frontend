import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/BioTech.pdf"
import ScrollButton from '../ScrollButton'

const Biotech = () => {
	return (
		<div className="sidebar_left">
			<div className="single_title">
				<Title color="BIOTECHNOLOGY" />
				<br />
			</div>
			<ScrollButton destinationId="downloadPDF"/>
			<div className="single_desc">
				<p>
					<h3>BIT 01: Enhance the expression and stability of therapeutic  proteins in microbial hosts for cost-effective pharmaceutical production.</h3>
					Design an innovative biotechnological strategy to improve both the expression and stability of therapeutic proteins within microbial hosts, with the ultimate goal of achieving cost-effective pharmaceutical production
				</p>

				<p>
					<h3>BIT 02: Address the challenges of microbial contamination  in large-scale fermentation processes.</h3>
					The task involves integrating technological innovations, stringent aseptic practices, and genetic enhancements to create a more resilient and contamination-resistant large-scale fermentation process.
				</p>

				<p>
					<h3>BIT 03: Tackling antibiotic resistance through innovative  biotechnological approaches.</h3>
					The problem statement underscores the importance of developing alternative strategies to combat infectious diseases. This could involve exploring non-traditional methods for treating infections, such as using bacteriophages, immune system modulators, or innovative drug delivery systems.
				</p>

				<p>
					<h3>BIT 04: Investigating the potential of synthetic biology in creating bioengineered organisms with specific functionalities.</h3>
					The task involves implementing rigorous safety protocols to prevent unintended consequences, such as environmental impact or unintended consequences in the organisms themselves.
				</p>

				<p>
					<h3>BIT 05: Develop advanced and accessible insulin pump solutions focusing on Type 1 diabetes patients.</h3>
					The task involves development of a pump that can give you the right amount of insulin at the times you need it.
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
	)
}

export default Biotech