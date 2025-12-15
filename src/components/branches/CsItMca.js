import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/MCSIT.pdf"
import ScrollButton from '../ScrollButton'

const CsItMca = () => {
  return (
    <div className="sidebar_left">
            <div className="single_title">
              <Title color="CS / IT / MCA" />
              <br />
            </div>
            <ScrollButton destinationId="downloadPDF"/>
            <div className="single_desc">
              <p>
                <h3>MCSIT01:  Real-time Enemy Detection and Localization</h3>
                Navigating the chaos of a modern battlefield is a constant struggle. Traditional methods like radar and visual scouting are often limited, leaving soldiers vulnerable to hidden threats. The ability to accurately and instantly identify enemy locations and distances in real-time would be a game changer, offering a critical tactical advantage.
              </p>
              <p>
                <h3>MCSIT02 : Deep Image to 3D Reconstruction </h3>
                The world around us is three-dimensional, yet most of our digital content exists as flat images. Reconstructing 3D models from single images has numerous applications in fields like robotics, virtual reality, and cultural preservation. However, creating accurate 3D models traditionally requires specialized equipment or multi-view images.
              </p>
              <p>
                <h3>MCSIT03: Developing an AI-based solution to transform images and textual descriptions of national heritage sites into a fully interactive VR experience</h3>
                ● History at Your Fingertips: National heritage sites whisper tales of our ancestors, but static images and videos leave you longing for a deeper connection. You want to touch the weathered stones, explore hidden corners, and unravel the mysteries within.
● Limited Engagement: Traditional media presents history as a spectator sport, leaving you as a passive observer. You crave interactivity, the ability to shape your journey and forge a personal connection with the past.
              </p>
              <p>
                <h3>MCSIT04: AI-powered Anomaly Detection System for Secure Police Stations</h3>
                Police stations are hubs of vital activity, serving as gateways to justice and safety. Yet, within these bustling environments, potential threats can lurk unseen, jeopardizing officer and public safety. Traditional security measures often struggle to adapt to the dynamic nature of police stations, leaving blind spots and vulnerabilities.
                
              </p>
              <p>
                <h3>
                  MCSIT05: Empowering Young Minds - by creating A gaming platform for Children with Cognitive Disabilities
                </h3>
                Millions of children face the daily battles of developmental disabilities, where everyday cognitive functions like attention, memory, and reasoning become daunting challenges. Traditional therapy, while crucial, often relies on manual exercises and lacks engaging experiences, leading to low adherence and hindering progress.

              </p>
              <p>
                <h3>MCSIT06: Build an IOT system for predictive irrigation of the farm.</h3>
                Across our planet's vibrant tapestry, landscapes crack with the strain of water scarcity. Traditional irrigation methods, like blindfolded gardeners in a rainstorm, offer little precision, leaving precious resources wasted and crops yearning for life. In the face of growing populations and shifting climates, sustainable agriculture demands a new strategy – one with foresight and finesse.
              </p>
              <p>
                <h3>MCSIT07: Ai-powered system for tracking illegal activities in the wild </h3>
                Our planet's vibrant tapestry, woven with breathtaking ecosystems and diverse life forms, faces the relentless unravelling of illegal activities. Poachers stalk endangered creatures, loggers carve scars across pristine forests, and traffickers exploit precious resources, leaving a trail of devastation in their wake. Traditional conservation methods often struggle to keep pace, leaving nature's treasures vulnerable and precious lives hanging in the balance.
              </p>
              <p>
                <h3>MCSIT08: Adaptive and Active Play Through AI-powered Body Movement Games</h3>
                Childhood should be a symphony of giggles, leaps, and boundless imagination. Yet, screens often act as siren calls, luring kids into a sedentary world where real-world adventures fade into the background. Traditional active play games, while valuable, lack the personalized touch that keeps children engaged and challenged over time.
              </p>
              <p>
                <h3>MCSIT09: Real-Time, Resource-Efficient Speech-to-Speech Translation for a Global Stage</h3>
               
Our world is a vibrant tapestry of languages and cultures, yet communication across these borders often stumbles at the hurdle of translation. Traditional methods like written text or human interpreters lag behind the rhythm of conversation, leaving us lost in translation and yearning for true connection.
              </p>
              <p>
                <h3>MCSIT10: Future of Drones- Gesture Control Drones</h3>
                Trapped in the confines of joysticks and screens, drone control today feels robotic and detached. We imagine soaring through the skies, commanding our drone as an extension of ourselves, but current methods limit us to clunky interfaces and brittle connections.
              </p>
              <p>
                <h3>MCSIT11: Secure AI developing an AI solution to find threads in the network</h3>
                The Evolving Shadows: Our world runs on the invisible currents of digital infrastructure, powering vital systems from healthcare to finance. But in the shadows, agile adversaries weave ever-shifting attack patterns, exploiting unknown vulnerabilities and leaving a trail of disruption in their wake. Traditional security methods, armed with static defences, stand vulnerable to the chameleon-like agility of these threats.
              </p>
              <p>
                <h3>MCSIT12: Blockchain Technology for KYC : The solution to inefficient KYC process</h3>
                
The current Know Your Customer (KYC) landscape is a tedious labyrinth of paperwork, redundant checks, and siloed data. For individuals, it means enduring slow onboarding, frustrating duplication of efforts, and limited financial inclusion. For financial institutions, it translates to high costs, operational inefficiencies, and increased vulnerability to fraud and money laundering.
              </p>
              <p>
                <h3>MCSIT13: Smart Parking with Real-Time Detection and Reservation</h3>
                Finding a parking spot in a crowded city can be a frustrating and time-consuming experience. Traditional parking management systems often lack real-time data on available spots, leading to wasted time and increased traffic congestion.
              </p>
              <p>
                <h3>MCSIT14: Automated Electrolyte Bottle Level Monitoring with IoT</h3>
                In hospitals, timely monitoring of fluid and electrolyte levels is crucial for patient recovery. However, busy schedules can lead to missed or delayed checks of electrolyte bottles, potentially leading to complications.
              </p>
              <p>
                <h3>MCSIT15: "See the World" - Wearable Assistant for the Blind with Real-Time
Object Recognition</h3>
Navigating the world can be a challenge for blind individuals. While assistive technologies exist, many lack real-time environmental understanding.

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

export default CsItMca
