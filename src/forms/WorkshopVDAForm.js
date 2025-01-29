import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const backend = keys.backend;

const WorkshopVDAForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("workshopsForm")) || {
    leader_name: "",
    email: "",
    whatsapp_number: "",
    program_of_study: "",
    leader_branch: "",
    leader_sem: "",
    gender:"",
    domain_of_Interest:""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("workshopsForm", JSON.stringify(update));
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log('Captcha verified')
    }
      // console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const submit = async () => {
    // const recaptchaValue = recaptchaRef.current.getValue();
    // Send the recaptchaValue along with the form data to your server for verification.
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition =
      form.Name !== "" &&
      form.email !== "" &&
      form.whatsapp_number !== "" &&
      form.leader_branch !== "" &&
      form.leader_sem !== "" &&
      form.gender !== "" && 
      form.program_of_study !== "" &&
      form.domain_of_Interest !== "" && 
      form.whatsapp_number.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=Workshops`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(res.data.message);
      } catch (err) {
        console.error(err);
        alert(err.response.data.message);
      }
    } else {
      alert("Please fill all the necessary details correctly");
    }
    setSubmit(false);
  };

  const onVerifyCaptcha = () => {

  }

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"WORKSHOP ON VEHICLE DATA AQUISITITION"} noncolor={""} />
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="leader_name"
                    placeholder="Full Name"
                    onChange={(e) => handle(e)}
                    value={form.leader_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="whatsapp_number"
                    placeholder="Contact Number"
                    onChange={(e) => handle(e)}
                    value={form.whatsapp_number}
                  />
                  <span style={{ fontSize: "0.7rem",color:"white" }}>
                    * Don't include +91 or 0.
                  </span>
                  {
                    form.whatsapp_number.length > 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderemail"
                    type="text"
                    name="email"
                    placeholder="email Address"
                    onChange={(e) => handle(e)}
                    value={form.email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    id="leaderProgramOfStudy"
                    type="text"
                    placeholder="Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="gender"
                    id="gender"
                    type="text"
                    placeholder="gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_branch"
                    id="leaderleader_branch"
                    type="text"
                    placeholder="branch"
                    onChange={(e) => handle(e)}
                    value={form.leader_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_sem"
                    id="leaderleader_sem"
                    type="text"
                    placeholder=" semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="domain_of_Interest"
                    id="domain_of_Interest"
                    type="text"
                    placeholder=" Domain of interest"
                    onChange={(e) => handle(e)}
                    value={form.domain_of_Interest}
                  />
                </li>
                
              </ul>
            </div>
            <HCaptcha
              sitekey={keys.hcaptcha}
              onClick={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
            <div className="mint_desc" style={{ paddingTop: "4rem",color:"white" }}>
              {/* <ReCAPTCHA
                sitekey="6LcIzaMoAAAAAHJK_7w8zc2WlllaZm4asH4POtWI"
                ref={recaptchaRef}
              /> */}
              {!isSubmitting ? (
                <div
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                  style={{ cursor: "pointer" }}
                  onClick={submit}
                  disabled={isSubmitting}
                >
                  <span>Submit</span>
                </div>
              ) : (
                <>Submitting...</>
              )}
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Workshop on Vehicle Data Acquisition</h4>
                <h3 className="metaportal_fn_countdown">
                DESCRIPTION
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                A Certified workshop on the basics of CAN (Controller Area Network) protocol, teaching participants to communicate with vehicle networks, collect data, and analyze it effectively. Gain hands-on experience in data logging and signal extraction, addressing real-world challenges.
                </p>
                <p>
                Total Duration: 5 hours
                </p>
                <p>
                Theory Session: 3 hours on CAN protocol basics and data analysis.
                </p>
                <p>
                Practical Session: 2 hours working with a vehicle to log and analyze data.
                </p>
              </div>
              
              {/* <a style={{ textDecoration: "none" }} href={docs}>
                <span className="metaportal_fn_button_4">Download PDF</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopVDAForm
