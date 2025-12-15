import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/ECE-mod.pdf"
import ScrollButton from '../ScrollButton'

const ECE = () => {
	return (
		<div className="sidebar_left">
			<div className="single_title">
				<Title color="ELECTRONICS & COMMUNICATION" />
				<br />
			</div>
			<ScrollButton destinationId="downloadPDF"/>
			<div className="single_desc">
				<p>
					<h3> ECE 01.Smart Frequency Detection and Jamming System </h3>
					Develop an innovative prototype for a Smart Frequency Detection and Jamming System designed specifically for classroom or similar environments.
					<br />• <b>Frequency Detection and Jamming :</b> The primary functionality of the prototype will be to detect and jam unauthorized electronic devices.
					<br />• <b>Real-time Data Provision :</b> The system will provide real-time data related to detected frequencies and signals to the user interface.
				</p>
				
				<p>
					<h3> ECE 02. Monitoring through Al Based Remote Access Vehicle  </h3>
					Develop an AI-based Remote Access Vehicle (RAV) equipped with advanced sensors and communication systems for efficient, non-disruptive submerged inspections and maintenance of Head Race Tunnels (HRTs) in hydroelectric projects.
				</p>
				
				<p>
					<h3> ECE03. Gesture-Based Human-Computer Interaction </h3>
					Design and implement a sophisticated hardware-based system integrating sensor and camera technology to robustly capture and interpret diverse hand gestures with exceptional precision.
				</p>
				
				<p>
					<h3> ECE04. Smart Home Automation and Security with IOT integration </h3>
					Develop an integrated Smart Home Automation, Security, and IoT System that seamlessly manages and controls diverse electronic devices within a household, leveraging IoT technologies. This system should encompass lighting, door locks, appliances, and other IoT-enabled devices, ensuring interoperability and unified control through a centralized interface
				</p>
				
				<p>
					<h3> ECE05. Integrated Crop Monitoring Drone System </h3>
					Create a prototype of an integrated crop monitoring drone system that addresses the challenges of efficient crop management faced by farmers. The prototype aims to leverage drone technology equipped with multispectral imaging capabilities to provide real-time crop health assessment,enabling precision agriculture practices.
				</p>
				
				<p>
					<h3> ECE06. Personalized Environmental Exposure Monitoring Device (PEEMD) </h3>
					Develop a portable and accurate Personalized Environmental Exposure Monitoring Device (PEEMD) to empower individuals with real-time data, fostering informed decisions for minimizing personal exposure to pollutants and advocating for healthier environments. 
				</p>
				
				<p>
					<h3> ECE07. MediMate: Smart Medication Adherence System for Elderly Care </h3>
					Design and develop a portable, user-friendly electronic pillbox prototype equipped with a dispensing mechanism, programmable scheduling interface, and reminder system.
				</p>
				
				<p>
					<h3> ECE08. Portable Water Quality Assessment Device </h3>
					Develop a Portable Water Quality Tester equipped with advanced sensors to enable real-time assessment of water quality. Incorporate technologies such as spectrophotometry and microbial sensors to detect pollutants, bacteria, and various contaminants swiftly.</p>
				
				<p>
					<h3> ECE09. Intelligent Security Framework: AI-Powered Multi-Sector Solution  </h3>
					Develop a prototype for an Intelligent Security Framework integrating different technologies applicable across sectors, with real-time data capture, automated alerts, and comprehensive oversight for enhanced security measures. 

				</p>
				
				<p>
					<h3> ECE10. Robotics Arm with Computer Vision for Object Recognition </h3>
					Design and develop a robotic arm integrated with computer vision for precise object recognition and manipulation in industrial automation and assistive technology applications. 

				</p>
				
				<p>
					<h3> ECE11. Smart Energy Meter with Real-Time Monitoring </h3>
					Design a user-friendly Smart Energy Meter with real-time monitoring capabilities to track electricity consumption, offer insights for energy-saving opportunities, and integrate seamlessly with existing home or business systems.
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

export default ECE