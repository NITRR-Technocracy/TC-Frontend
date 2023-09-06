import React from 'react'
import Title from '../Title'

const EE = () => {
  return (
    <div className="sidebar_left">
    <div className="single_title">
      <Title color="ELECTRICAL" />
      <br />
    </div>
    <div className="single_desc">

        
    <p>
        <h3> EE01 : IoT Enabled-Industrial Load Switcher Based On Touch Screen </h3>
        The project aims to improve industrial load control's efficiency, automation, and intelligence while addressing the drawbacks of traditional load switchers. The heart of this concept is the integration of an intuitive Touch Screen Interface with Internet of Things connectivity. The fast and user-friendly load management procedure is made possible by the intuitive touch screen interface, which enables operators to regulate and manage industrial loads with just a few taps and gestures. This project integrates IoT technology to enhance the load switcher's capabilities and enable real-time connectivity. Secure cloud communication allows remote access and control from anywhere via a web portal or mobile app, providing real_x0002_time insights on load status and energy consumption.
    </p>
    
    <p>
        <h3> EE02 : Intelligent Battery Charging Indicator </h3>
        The challenge is creating an effective and trustworthy signaling system for solar_x0002_powered battery charging. Many solar-powered systems now struggle to determine the battery's level of charge accurately, which results in inefficient charging and could harm the battery. A practical and affordable solution is required that can correctly track the battery's charge level and alert users when it needs to be recharged or fully charged. Challenges to fulfill : 
<br />1. Monitoring with precision 
<br />2. Indicator should consume minimal power from the battery its monitoring 
<br />3. Should be cost effective for widespread adaptation
<br />4. To enable remote monitoring and control of the battery charging system, incorporate IoT capabilities. In order to allow customers to check the battery condition from any location, this could involve delivering real-time data to a cloud platform or a mobile app.
    </p>
    
    <p>
        <h3> EE03 : Intelligent Driver Circuit for MOSFET and IGBT with PIC Microcontroller </h3>
        Thyristors are essential for controlling current flow. Traditional firing angle control devices, however, lack accuracy and flexibility in the moment. The issue is the thyristor's inability to dynamically alter the firing angle in response to changing load requirements. As a result, electrical systems function less than optimally and consume energy inefficiently.
    </p>
    
    <p>
        <h3> EE04 : Brake Guard Pro: Intelligent Brake Failure Prediction and Mitigation System </h3>
        The challenge is to create a comprehensive system that can accurately predict brake failure in advance and implement proactive measures to mitigate the risk. The system must continuously monitor various parameters related to brake performance, environmental conditions, and vehicle dynamics. When a potential brake failure is predicted, the system should take autonomous or semi_x0002_autonomous actions to prevent or minimize the impact of the failure.
    </p>
    
    <p>
        <h3> EE05 : Digital Sensor based Temperature Control for Energy efficient and Precise Thermal Management </h3>
        Problem :
<br />1. Temperature control is crucial for optimal performance , safety and energy efficiency. 
<br />2. Traditional temperature control system often lack precision and may lead to excessive energy consumption. 
<br />3. Based on analog sensors
<br />Solution :
<br />1. Implementing digital sensors (Analog with Digital sensors such as 
thermocouples ,RTD)
<br />2. IoT connectivity (Can transmit real time data to centralized server).
Like this system can be used in baby incubators where it is very important to 
maintain precise temperature.
<br />System display temp. in a LCD display as soon as temp exceed our set limit its 
automatically switch off the load . The system should uses a digital temp 
sensor in order to detect temp and pass on the datato the microcontroller
    </p>
    
    <p>
        <h3> EE06 : Industrial Equipment Condition Monitoring </h3>
        Develop an IoT-based condition monitoring system for industrial electrical equipment to detect early signs of malfunction or failure. The system should be capable of monitoring parameters like voltage, current, temperature, and vibration in real-time. It should also provide predictive maintenance alerts to prevent unplanned downtime and improve overall system reliability. It should be implemented on any home used electrical appliances.
    </p>
    
    <p>
        <h3> EE07 : Intelligent Battery management System </h3>
        Problem :
<br />1. High power factor is crucial to ensure efficient utilization of electrical power and tominimize power wastage 
<br />2. Low power factor not only leads to higher electricity bills for consumers but also puts apressure on power distribution system 
<br />3. Major problem in this field is inefficient utilization of power due to low power factor invarious loads such as inductive loads etc. 
<br />Solution :
<br />1. To improve the overall efficiency a Power factor controller can be implemented using a PIC controller 
<br />2. Through this we can implement a control algorithm that regulates the power factor and ensures it stays close to unity 
<br />3. Real time monitoring of voltage current and power factor
    </p>
    
    <p>
        <h3> EE08 : Automated Elevator With Overload Alert </h3>
        The system indicates the elevator's capacity using a 7 segment display. It employs infrared sensor pairs placed near the elevator door to detect when a person enters the elevator. Upon sensing someone, the door opens, and the counter for the number of people inside increments. The IR transmitter sends rays to the receiver, which feeds theinput to an 8051 Microcontroller.
    </p>
    
    <p>
        <h3> EE09 : Project Related to Home Automation </h3>
        Home automation system that allows user to efficiently control home appliances/machines over the internet. For demonstration of this system we use 3 loads as home appliances or machines and a motor to demonstrate as an industrial motor. Our system uses an Avr family microcontroller for processing all user commands. A wifi modem isused to connect to the internet and receive user commands. On sending commands through the internet they are first received by our wifi modem. The modem decodes information and passes it to the microcontroller for further processing. The microcontroller then switches loads and operates the motors as per receivers commands. Also it displays the system state on an LCD display.
    </p>
    
    <p>
        <h3> EE10 : Project Related to Industry Automation </h3>
        Industry automation system that allows user to efficiently control industry appliances/machines over the internet. For demonstration of this system we use 3 loads as industrial appliances or machines and a motor to demonstrate as an industrial motor. Our system uses an Avr family microcontroller for processing all user commands. A wifi modem isused to connect to the internet and receive user commands. On sending commands through the internet they are first received by our wifi modem. The modem decodes information and passes it to the microcontroller for further processing. The microcontroller then switches loads and operates the motors as per receivers commands. Also it displays the system state on an LCD display.
    </p>
    
    </div>
    <div style={{width:"100%", display:"flex", justifyContent:"center", padding:"1rem 0rem"}}>
      <div className="goodbtn" >
            DOWNLOAD PDF
          </div>
      </div>
</div>
  )
}

export default EE