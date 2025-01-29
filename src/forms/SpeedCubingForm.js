import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/terrainTreader.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

//const axios = require("axios");
const backend = keys.backend;

const SpeedCubingForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("speedCubingForm")) || {
    username: "",
    leader_email: "",
    whatsapp_number: "",
    branch: "",
    gender: "",
    program_of_study: "",
    curr_semester: "",
  };

  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("speedCubingForm", JSON.stringify(update));
  };

  const validateForm = () => {
    let errors = {};

    // Validate whatsapp number
    if (!/^\d{10}$/.test(form.whatsapp_number)) {
      errors.whatsapp_number = "Enter a valid 10-digit phone number!!";
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.leader_email)) {
      errors.leader_email = "Enter a valid email address!!";
    }

    // Validate all required fields
    Object.keys(form).forEach((key) => {
      if (form[key] === "") {
        errors[key] = `${key.replace("_", " ")} is required!!`;
      }
    });

    // If any error, return false
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return false;
    }

    setFormErrors({});
    return true;
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log("Captcha verified");
    }
  }, [token]);

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);

    if (validateForm()) {
      try {
        const res = await axios.post(
          `${backend}/register?event=SpeedCubing`,
          form,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert(res.data.message);
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "An error occurred during submission!!");
      }
    } else {
      alert("Please fix the errors and try again!!");
      setSubmit(false);
      return;
    }
    setSubmit(false);
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"SPEED"} noncolor={"CUBING"} />
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
                    name="username"
                    id="participantName"
                    type="text"
                    placeholder="Name Of Participant"
                    onChange={(e) => handle(e)}
                    value={form.username}
                  />
                  {formErrors.username && <p style={{ color: "red" }}>{formErrors.username}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="gender"
                    id="gender"
                    type="text"
                    placeholder="Gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
                  {formErrors.gender && <p style={{ color: "red" }}>{formErrors.gender}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="emailId"
                    type="text"
                    name="leader_email"
                    placeholder="Email Id"
                    onChange={(e) => handle(e)}
                    value={form.leader_email}
                  />
                  {formErrors.leader_email && <p style={{ color: "red" }}>{formErrors.leader_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="whatsappNumber"
                    type="text"
                    name="whatsapp_number"
                    placeholder="Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.whatsapp_number}
                  />
                  <span style={{ fontSize: "0.7rem" ,color:"white" }}>
                    * Don't include +91 or 0.
                  </span>
                  {formErrors.whatsapp_number && (
                    <p style={{ color: "red" }}>{formErrors.whatsapp_number}</p>
                  )}
                 {
                    form.whatsapp_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    id="program_of_study"
                    type="text"
                    placeholder="Program of study"
                    onChange={(e) => handle(e)}
                    value={form.program_of_study}
                  />
                   {formErrors.program_of_study && <p style={{ color: "red" }}>{formErrors.program_of_study}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="branch"
                    id="branch"
                    type="text"
                    placeholder="Branch"
                    onChange={(e) => handle(e)}
                    value={form.branch}
                  />
                  {formErrors.branch && <p style={{ color: "red" }}>{formErrors.branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="curr_semester"
                    id="sem"
                    type="text"
                    placeholder="Semester"
                    onChange={(e) => handle(e)}
                    value={form.curr_semester}
                  />
                  {formErrors.curr_semester && <p style={{ color: "red" }}>{formErrors.curr_semester}</p>}
                </li>
              </ul>
            </div>
            <HCaptcha
              sitekey={keys.hcaptcha}
              onClick={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
            {/* <div style={{ fontSize: "17px",color:"white" }}>
              Don't forget to join the WhatsApp Group after registration!
            </div> */}
            <div className="mint_desc" style={{ paddingTop: "2rem",color:"white" }}>
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
              {/* <div>
                {isSubmitted && (
                  <div>
                    <div>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://chat.whatsapp.com/LhuUE4GCgnhGy5nYrJ9S3q"
                      >
                        <span className="metaportal_fn_button_4">
                          Join WA Group
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div> */}
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Speed Cubing</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>• Individual participants.</p>
                <p>
                  • According to number of participants we’ll divide all
                  participants in group of 6 people.
                </p>
                <p>• For each group we’ll conduct the competition.</p>
                <p>• There will be a time-based winner for each group.</p>
                <p>
                  • In second match all the winners from first match will be
                  competing against each other.
                </p>
              </div>
              <a style={{ textDecoration: "none" }} href={docs}>
                {/* <span className="metaportal_fn_button_4">Download PDF</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedCubingForm;