import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const DimensionsForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("dimensionsform")) || {
    leader_name: "",
    email: "",
    whatsapp_number: "",
    leader_sem: "",
    leader_branch: "",
    gender: "",
    program_of_study :""
    
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("dimensionsform", JSON.stringify(update));
  };

  const validateForm = () => {
    let errors = {};

    // Validate whatsapp number
    if (!/^\d{10}$/.test(form.whatsapp_number)) {
      errors.whatsapp_number = "Enter a valid 10-digit phone number!!";
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Enter a valid email address!!";
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
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log("Captcha verified");
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
    
    if (validateForm()) {
      try {
        const res = await axios.post(`${backend}/register?event=Dimensions`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      <Title color={"DIMENSIONS (AUTOCAD)"} noncolor={""} />
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
                   {formErrors.leader_name && <p style={{ color: "red" }}>{formErrors.leader_name}</p>}
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
                    id="leaderName"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handle(e)}
                    value={form.email}
                  />
                  {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="whatsapp_number"
                    placeholder="Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.whatsapp_number}
                  />
                  <span style={{ fontSize: "0.7rem",color:"white" }}>
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
                    name="leader_branch"
                    id="leaderleader_branch"
                    type="text"
                    placeholder="branch"
                    onChange={(e) => handle(e)}
                    value={form.leader_branch}
                  />
                  {formErrors.leader_branch && <p style={{ color: "red" }}>{formErrors.leader_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_sem"
                    id="leader_sem"
                    type="text"
                    placeholder="semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
                  {formErrors.leader_sem && <p style={{ color: "red" }}>{formErrors.leader_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    id="program_of_Study"
                    type="text"
                    placeholder="program of Study"
                    onChange={(e) => handle(e)}
                    value={form.program_of_study}
                  />
                  {formErrors.program_of_study && <p style={{ color: "red" }}>{formErrors.program_of_study}</p>}
                </li>
              </ul>
            </div>
            <HCaptcha
              sitekey={keys.hcaptcha}
              onClick={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
            <div className="mint_desc" style={{ paddingTop: "4rem", color:"white" }}>
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
                <h4>DIMENSIONS (AUTOCAD)</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  AUTOCAD enthusiasts can showcase their talent by creating
                  designs.
                </p>
                <p>Individual Participation</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Dimensions (AUTOCAD)</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Candidates must bring their own laptops with AUTOCAD
                  software installed.
                </p>
                <p>2. Two Drawings will be provided to all the students</p>
                <p>
                  3. First drawing is Mandatory for all (Time Limit 20 Minutes)
                </p>
                <p>
                  4. Second Drawing will be for shortlisted Participants (Time
                  Limit 60 Minutes)
                </p>
                <p>
                  5. Judgment will be done considering the technical details and
                  speed of completion of the task
                </p>
              </div>
              {/* <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <a style={{ textDecoration: "none" }} href={docs}>
                  <span className="metaportal_fn_button_4">Download PDF</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionsForm;
