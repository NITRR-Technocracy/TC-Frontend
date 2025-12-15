import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/Mech.pdf"
import ScrollButton from '../ScrollButton'

const Mechanical = () => {
  return (
    <div className="sidebar_left">
    <div className="single_title">
      <Title color="MECHANICAL" />
      <br />
    </div>
    <ScrollButton destinationId="downloadPDF"/>
    <div className="single_desc">
      <p>
        <h3>MECH01:  UAV surveillance drone  </h3>
        A UAV surveillance drone is an unmanned aerial vehicle equipped with cameras and 
sensors to gather information from the air for surveillance purposes. It can be used for 
monitoring and mapping traffic, wildlife, crops, disaster areas, and more. These drones 
are used to gather information in areas that are difficult or dangerous to access by 
ground, such as disaster zones, dense forests, or high-security areas. They can help in 
identifying threats, monitoring wildlife, assessing crop health, and providing situational 
awareness in various scenarios. 
      </p>
      <p>
        <h3>MECH02:  Design and fabrication of a 3-D printing machine </h3>
        A 3D printing machine, also known as a 3D printer, is a type of additive manufacturing 
 technology that creates three-dimensional objects layer by layer from a digital model. 3D 
 printing machines vary in size, cost, and complexity, with desktop models suitable for 
 hobbyists and professionals, as well as industrial-scale machines used in manufacturing 
 and prototyping.                </p>
      <p>
        <h3> MECH03: Writing machine for physically disabled </h3>
        A writing machine for physically disabled individuals is a specialized device designed to 
 assist people with limited mobility or dexterity in writing and communication tasks. This 
 machine typically features a user-friendly interface and customizable settings to 
 accommodate a variety of needs and preferences. The machine's design focuses on 
 accessibility, with large, easy-to-press buttons or switches that can be operated using 
 minimal physical effort.
      </p>
      <p>
        <h3>MECH04:  A portable uroflowmeter  </h3>
        A uroflowmeter is a medical device used to measure and analyse urine flow rate. It 
typically consists of a container into which the patient urinates, connected to sensors or 
other measuring devices that record the flow of urine. Uroflowmetry, the procedure 
performed using a uroflowmeter, is commonly used in urology to diagnose conditions 
such as urinary obstruction, overactive bladder, and other urinary tract issues. The data 
collected by the uroflowmeter can provide valuable information about the patient's 
urinary function.     </p>
      <p>
        <h3> MECH05: :  Plastic recycling system </h3>
        Plastic recycling machinery is essential for converting plastic waste into reusable 
materials, contributing to environmental sustainability. This machinery typically involves 
shredding or granulating the plastic waste to increase surface area, sorting it based on 
type and colour, washing to remove contaminants, and drying to eliminate moisture. The 
plastic is then melted and extruded into pellets or flakes, which can be used as raw 
material for manufacturing new plastic products. This process helps reduce the need for 
virgin plastic production and minimizes plastic pollution in landfills and oceans, making it 
a critical component of the circular economy. 
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

export default Mechanical