import React from 'react'
import Title from '../Title'

const CsItMca = () => {
  return (
    <div className="sidebar_left">
            <div className="single_title">
              <Title color="CS / IT / MCA" />
              <br />
            </div>
            <div className="single_desc">
              <p>
                <h3>MCSIT01:  Real-Time Performance Analysis Application for Athletes and Coaches </h3>
Build an application that uses computer vision to analyze an athlete's performance in real time and provide feedback. The application would benefit both athletes and coaches. Athletes would be able to get immediate feedback on their performance, and coaches would be able to track their athletes' progress over time. The following datasets can be referred to train the model <br /> 1. <a href="https://www.kaggle.com/datasets/imbikramsaha/cricket-football-baseball">https://www.kaggle.com/datasets/imbikramsaha/cricket-football-baseball</a> <br /> 2. <a href="https://universe.roboflow.com/anna-gaming/golfball ">https://universe.roboflow.com/anna-gaming/golfball </a> <br />
3. <a href="https://universe.roboflow.com/pawel-brzozowski/cyclists_database">https://universe.roboflow.com/pawel-brzozowski/cyclists_database</a>
              </p>
              <p>
                <h3>MCSIT02 : Ensuring Nocturnal Animal Safety and Accountability with the help of IoT-enabled devices. </h3>
The practice of releasing domestic animals, such as cattle and livestock, during the night has posed a significant challenge, leading to potential accidents, property damage, and public safety concerns. To address this issue and promote responsible animal ownership, a comprehensive solution is proposed that leverages modern technology and accountability measures. Wearable collars could be attached to domestic animals, containing a QR code or a unique identification mechanism, which would serve as a link between the animal and its owner’s information. Build an application that integrates IoT-enabled devices and Computer Vision. The Iot devices (could be wearables or any hardware chip) should contain a unique identification marker(for example a QR code) for the animal containing important information about its owner. This would thus serve as a link between the animal and its owner’s information. When the animal is detected along with the QR code, the system should be able to track it to its owner. This transfer of data from collar to a central system can be implemented using messaging protocols like MQTT (Message Queuing Telemetry Transport). In the prototype's implementation, the system possesses the functionality to transmit the scanned QR code's data to a centralized repository. In real-world application, this data transmission would correspondingly extend to relevant authorities or organizations. In practical terms, the system would alert authorities like Animal Control or local bodies upon animal identification. Authorities can then use the information extracted to contact the owner and request immediate retrieval of the animal. In cases where owners consistently fail to contain their animals, appropriate fines or penalties can be enforced, incentivizing responsible behavior.
              </p>
              <p>
                <h3>MCSIT03: Build a Custom QR Vehicle Info Generator </h3>
                The QR Code Generator for Vehicles is intended to be a user-friendly platform, accessible as either a web application or a mobile app. Its primary purpose is to allow vehicle owners to generate QR codes containing their vehicle information. Users should have the flexibility to select the specific details they want to include in the QR code, such as vehicle make, model, year, registration number, owner's name, and contact information. To address privacy concerns, the application needs to implement a mechanism to segregate sensitive information from public information. This security layer can be added using cryptography or any other mechanism. This ensures that only relevant and non-sensitive details are available for sharing with other stakeholders, while sensitive information remains private to the user. For assistance with QR Code generation, refer the ZXing library offered by Google( <a href="https://zxing.github.io/">https://zxing.github.io/</a>)
              </p>
              <p>
                <h3>MCSIT04: Designing an Integrated Care App for Alzheimer’s and Dementia Patients</h3>
                Dharavi is the biggest slum cluster of Asia that lies on prime
                property right in the middle of Mumbai. Design a plan and model
                for a new Settlement at low cost.
              </p>
              <p>
                <h3>
                  MCSIT05: Develop a chatbot specifically tailored for addressing doubts related to agricultural schemes in India.
                </h3>
                The chatbot will serve as an interactive platform to provide information about government agricultural schemes and services, including details about eligibility criteria, application processes, and benefits. Its primary purpose is to assist Indian citizens, especially farmers and agricultural stakeholders, in understanding the various agricultural schemes and services available to them. Following resources can be referred: <br /> 1. Ministry of Agriculture & Farmers Welfare, Government of India : <a href="https://agricoop.nic.in/">https://agricoop.nic.in/</a> <br />2. Data.gov.in: <a href="https://data.gov.in/">https://data.gov.in/</a>
              </p>
              <p>
                <h3>MCSIT06: Real-Time Fire and Smoke Detection System for Enhanced Emergency Response </h3>
Develop an efficient and accurate computer vision system that utilizes deep learning models, such as YOLO, Faster R-CNN, or MobileNet, to detect and classify fire and smoke in real-time. The system should process image and video data from surveillance cameras, drones, or wearable devices in firefighting scenarios. The goal is to enhance the situational awareness of firefighters, incident commanders, and emergency responders, enabling them to identify and respond to fire incidents swiftly and effectively. The objective should be to optimize the model for real-time processing, ensuring low-latency and high accuracy, suitable for integration with existing surveillance systems or wearables used by firefighters. Following resources can be referred: <br /> 1. <a href="https://github.com/gaiasd/DFireDataset">https://github.com/gaiasd/DFireDataset</a> <br /> 2. <a href="https://www.kaggle.com/datasets/dataclusterlabs/fire-and-smoke-dataset">https://www.kaggle.com/datasets/dataclusterlabs/fire-and-smoke-dataset </a> <br />For the purpose of demonstration, teams need to show the working of their model on synthetic images highlighting defects and other important information.
              </p>
              <p>
                <h3>MCSIT07: Enhancing Road Safety with IoT and Data Analytics </h3>
                Develop an IoT-based road safety and driving assistance system to enhance road safety, reduce accidents, and promote responsible driving behavior. The system should leverage sensor technologies and data analytics to collect real time information about the road conditions. This information could be distributed to the people using the road and provide road suggestions accordingly. For the scope of the project, participants should be able to employ IoT to collect meaningful road information from the passing vehicles.
              </p>
              <p>
                <h3>MCSIT08: Enhancing Food Traceability in the Supply Chain through Blockchain Technology</h3>
                   The food supply chain faces significant challenges related to traceability, accountability, and food safety, leading to public health risks, foodborne illness outbreaks, and a lack of consumer confidence. Traditional supply chain systems often rely on centralized databases and paper-based records, making it challenging to track the movement of food products from farm to fork accurately. These limitations result in difficulties in identifying the source of contamination or spoilage promptly and lead to widespread food recalls, financial losses for businesses, and potential harm to consumers. 
The problem statement aims to investigate the application of blockchain technology to address these issues and improve food traceability in the supply chain.
 For the scope of the prototype, teams need to work on smart contracts development, implementing mechanisms to feed data (by integrating IoT devices), simulate a decentralized blockchain network and demonstrate traceability by registering a food product on the blockchain and tracking its journey through the supply chain.
              </p>
              <p>
                <h3>MCSIT09: Develop an Automated Track Inspection Application for Early Detection of Track Defects in the Railways </h3>
                Railway track maintenance is a critical aspect of ensuring the safety and efficiency of train operations. Regular inspection and timely repair of track defects are essential to prevent accidents and ensure smooth train movements. However, manual track inspections can be time-consuming, costly, and may miss subtle issues, leading to potential safety hazards. Computer Vision offers a transformative solution to enhance track maintenance and accident prevention.
 Build an automated track inspection software that utilizes advanced technologies such as computer vision and machine learning to detect track defects early and efficiently within the railways network. Several machine learning models can be implemented to detect various track defects, including cracks, fractures, misalignments, and deteriorations, from the processed images. Integrate an alerting system to notify maintenance crews and railway authorities about identified track defects for prompt action and resolution. Store and analyze track inspection data to track defect trends, monitor track condition over time, and identify areas requiring regular maintenance.
 Following dataset can be referred: 
1. <a href="https://www.kaggle.com/datasets/salmaneunus/railway-track-fault-detection">https://www.kaggle.com/datasets/salmaneunus/railway-track-fault-detection</a> 
              </p>
              <p>
                <h3>MCSIT10: IoT-based solution for real-time water leakage identification </h3>
            Efficient management of water resources and prevention of property damage are critical concerns in both residential and commercial contexts. Water leakage, if left undetected, can lead to substantial water wastage and potential structural damage. Current methods for identifying and localizing water leaks often rely on manual inspection, resulting in delayed detection and response times. Develop an IoT-based water leakage identification system. The system will consist of sensors placed throughout a plumbing network. For the scope of the prototype, teams will have to create a simplified mock plumbing system using tubes, containers, and water sources. One can set up a scenario where water is flowing through the system, and simulate leaks by manually releasing water from specific points. Simulate data inputs that mimic real-world conditions. Mock data should simulate water flow rates, pressure changes, and anomalies that would be indicative of leaks. Then, use this data to showcase how your prototype would analyze and respond to different situations. The system should give alerts in situations of leakage. Bonus points will be given to a team for building a user interface (app or website) to display real-time sensor data, showcase leak detection alerts, and provide an interactive platform for users to monitor their water usage and take immediate action in case of any anomalies or leaks.
              </p>
              <p>
                <h3>MCSIT11: Developing a Text-to-Audio Conversion Model to bridge the gap between Written Content and Auditory Accessibility  </h3>
                In today's digital age, access to information comes in various forms, but not all individuals have equal access to written content due to visual impairments, learning disabilities, or busy lifestyles. While text-to-speech technology exists, current solutions often lack naturalness, coherence, and customization, limiting their effectiveness in conveying complex ideas and maintaining engagement. 
Build a model that should go beyond simple text-to-speech conversion and incorporate advanced natural language processing (NLP) techniques to produce high-quality audio content that captures the essence and context of the original text. It should be capable of accurately inferring punctuation, emphasis, tone, and pacing, mirroring the way humans naturally read and convey meaning. 
The proposed model must incorporate deep learning architectures, such as recurrent neural networks (RNNs) or transformer models, to comprehend the linguistic cues embedded in written text. These models should be trained on diverse datasets to grasp grammar, semantics, and enabling accurate text understanding. The model should also accommodate customizable parameters, allowing users to modify attributes like voice characteristics, speech rate, and accent, enhancing user engagement and satisfaction.
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

export default CsItMca