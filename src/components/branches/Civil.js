import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/Civil.pdf"
import ScrollButton from '../ScrollButton'

const Civil = () => {
	return (
		<div className="sidebar_left">
			<div className="single_title">
				<Title color="CIVIL" />
				<br />
			</div>
			<ScrollButton destinationId="downloadPDF"/>
			<div className="single_desc">
				<p>
					<h3>CIV01. Investigating Structural Integrity and Accessibility Challenges in Urban Skywalk Projects : </h3>
					Develop a comprehensive framework to address structural integrity and accessibility  challenges in urban skywalk projects across Indian cities. Analyze past failures such as  the Raipur Skywalk, examining root causes including design flaws, foundation issues,  and inadequate accessibility features.
				</p>

				<p>
					<h3>CIV02. Low-carbon Cement alternatives</h3>
					Investigate the environmental impact of traditional concrete production and explore solutions to reduce the industry's carbon footprint, focusing on innovative alternatives like carbon-negative CalMag cement from desalination waste.
				</p>

				<p>
					<h3>CIV0 3. Sustainable Solutions for the Effective Disposal and Recycling of Plastic Waste through Innovative Composite Tiles</h3>
					Explore a solution involving the unique combination of LDPE plastic, fly ash, and a flame retardant to create composite tiles. The proposed solution should address the limitations of current plastic recycling practices and provide a multi-faceted approach,
				</p>

				<p>
					<h3>CIV0 4. Real-time In-situ Concrete Strength Assessment</h3>
					Develop a non-invasive technology-driven solution that enables real-time determination of concrete strength directly at the construction site, that reduces reliance on specialized instruments, ensuring practicality and accessibility in diverse construction settings. 
				</p>

				<p>
					<h3>CIV 05. Designing a Responsive Suspension Bridge</h3>
					Develop a  suspension bridge model that incorporates dynamically adaptive technologies to adjust its shape and distribute loads in real-time, optimizing performance and ensuring safety under varying external forces
				</p>

				<p>
					<h3>CIV 06. Engineering a Resilient and Adaptable Shelter for Disaster Relief</h3>
					Design and develop a prototype for a portable, rapidly deployable, and highly adaptable shelter system that overcomes the limitations of existing solutions and addresses the unique challenges of disaster relief in diverse conditions.
				</p>

				<p>
					<h3>CIV 07. Predicting and Mitigating Rockfall Hazards on Transportation Infrastructure</h3>
					Develop an innovative and integrated system that can predict, prevent, and mitigate rockfall hazards on transportation infrastructure in mountainous regions. 
				</p>

				<p>
					<h3>CIV 08. Designing an Integrated Traffic Management Strategy for Sustainable Urban Mobility</h3>
					Create a comprehensive traffic management plan for a growing city to minimize congestion, optimize traffic flow, and improve overall transportation efficiency, considering the integration of smart technologies and sustainable practices.
				</p>

				<p>
					<h3>CIV 09. Transportation  system for a coastal city prone to rising sea levels</h3>
					Design a resilient and energy-efficient transportation system for a coastal city prone to rising sea levels and extreme weather events, considering the potential impacts of climate change on infrastructure.
				</p>

				<p>
					<h3>CIV 10. Urban planning strategy to address the challenges of urbanization</h3>
					Develop an urban planning strategy that promotes mixed-use development, green spaces, and sustainable infrastructure to address the challenges of urbanization while maintaining a high quality of life for residents. 
				</p>

				<p>
					<h3>CIV 11. Create an energy-efficient and sustainable bridge design that incorporates innovative materials and construction methods, ensuring durability, reduced maintenance costs, and minimal environmental impact over the bridge's lifecycle.</h3>
				</p>

				<p>
					<h3>CIV 12. Implement Sustainable Urban Drainage Systems to manage stormwater runoff</h3>
					Design and Implement Sustainable Urban Drainage Systems (SUDS) for a rapidly growing city to manage stormwater runoff and mitigate the impact of urbanization on local water bodies, considering climate change and increasing impervious surfaces. 
				</p>

				<p>
					<h3>CIV 13. Optimizing Hospital Layout for Efficient Patient Flow</h3>
					Design a detailed hospital layout plan that optimizes patient flow and enhances operational efficiency. Improved patient satisfaction scores and reduced wait times.
				</p>
	
				<p>
					<h3>CIV 14. Structural Health Monitoring of Aging Infrastructure</h3>
					develop a state-of-the-art Structural Health Monitoring (SHM) system that seamlessly integrates advanced sensor technologies, data analytics, and real-time monitoring. The system should be capable of continuously collecting data on structural parameters such as vibrations, strains, and material conditions.
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

export default Civil