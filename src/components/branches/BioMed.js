import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/BME.pdf"
import ScrollButton from '../ScrollButton'

const BioMed = () => {
    return (
        <div className="sidebar_left">
            <div className="single_title">
                <Title color="BIOMEDICAL" />
                <br />
            </div>
            <ScrollButton destinationId="downloadPDF"/>
            <div className="single_desc">
                <p>
                    <h3>BME01:  Developing easy to use portable radiological device(X-RAY)  </h3>
                    The doctor asks the patient to go for an X-ray and wait until the results are available.This delay 
can be 2-4 hours for the same hospital Radiology Lab if not then In remote areas it can take 1-2 
days. The patient has to suffer by that time.
                </p>
                <p>
                    <h3>BME02: AI-powered microscope to check cancer margins.  </h3>
                    Tumours are removed with some extra margin to avoid regrowth and future complications. But 
deciding the cutting depth is a challenge for(especially, oncology) surgeons. Hence marking the 
region before operating becomes essential for ensuring a curative resection, accurate 
prognostication, and for sparing of healthy tissues. .
                </p>
                <p>
                    <h3>BME03: Develop low-cost ABG machines that utilize generic chemicals. "  </h3>
                    By creating an affordable and sustainable ABG analysis solution, healthcare providers can 
enhance patient care and diagnosis while ensuring equitable access to vital medical testing in 
diverse healthcare settings without compromising the accuracy and reliability of the test results.
                </p>
                <p>
                    <h3>BME04: Develop specific ECG electrodes for Pulmonary Edema  </h3>
                    Pulmonary oedema is a condition caused by excess fluid in the lungs. This fluid collects in the 
numerous air sacs in the lungs, making it difficult to breathe. 
                </p>
                <p>
                    <h3>BME05: Develop a hospital-specific EHR      </h3>
                    EHR(Electronic Health Record) can be used for securely sharing electronic information with 
patients and other clinicians, as paper files can easily get lost or misplaced, causing serious 
problems for the patient down the line.             </p>
                <p>
                    <h3>BME06 : Develop infusion & feeding pumps carrying multiple syringes and feeding 
                    bags </h3>
                    Using a higher number of infusion & feeding pumps (generally more than 5) on a single patient 
leads to several problems for nursing staff monitoring all at certain intervals, regulating the flow 
rate, reinjection when the patient pulls out and noting down the data manually on ICU chart 
sheet. 
                </p>
                <p>
                    <h3>BME07:  Develop affordable, bedside exercising tools for post-surgery (knee)  </h3>
                    Regular exercise to restore strength and mobility to your knee and a gradual return to everyday 
activities are important for your full recovery after  total knee replacement . Your orthopaedic 
surgeon and physical therapist may recommend that you exercise for 20 to 30 minutes. 
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

export default BioMed