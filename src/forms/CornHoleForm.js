import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const CornholeGameForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("cornholegame")) || {
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_yog: "",
    P2_name: "",
    P2_branch: "",
    P2_email: "",
    P2_sem: ""
  };
  const [form, set] = useState(cachedForm);
  const [isSubmitting, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("cornholegame", JSON.stringify(update));
  };

  const validateForm = () => {
    let errors = {};

    // Validate whatsapp number
    if (!/^\d{10}$/.test(form.Leader_whatsapp)) {
      errors.Leader_whatsapp = "Enter a valid 10-digit phone number!!";
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.Leader_email)) {
      errors.Leader_email = "Enter a valid email address!!";
    }
    if (!emailRegex.test(form.P2_email)) {
      errors.P2_email = "Enter a valid email address!!";
    }

    // Validate all required fields
    Object.keys(form).forEach((key) => {
      if (form[key] === "") {
        errors[key] = `${key.replace("_", " ")} is required.`;
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
    // console.log(hCaptcha Token: ${token});
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
        const res = await axios.post(`${backend}/register?event=CornHoleGame`, form, {
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
      <Title color={"Cornhole Game"} noncolor={""} />
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
                    name="Leader_name"
                    placeholder="Leader Full Name"
                    onChange={(e) => handle(e)}
                    value={form.Leader_name}
                  />
                  {formErrors.Leader_name && <p style={{ color: "red" }}>{formErrors.Leader_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Leader_email"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                  {formErrors.Leader_email && <p style={{ color: "red" }}>{formErrors.Leader_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Leader_whatsapp"
                    placeholder="Leader Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.Leader_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem",color:"white" }}>
                    * Don't include +91 or 0.
                  </span>
                  {formErrors.Leader_whatsapp && (
                    <p style={{ color: "red" }}>{formErrors.Leader_whatsapp}</p>
                  )}
                 {
                    form.Leader_whatsapp.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_college"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader College"
                    onChange={(e) => handle(e)}
                    value={form.Leader_college}
                  />
                  {formErrors.Leader_college && <p style={{ color: "red" }}>{formErrors.Leader_college}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Branch"
                    onChange={(e) => handle(e)}
                    value={form.Leader_branch}
                  />
                  {formErrors.Leader_branch && <p style={{ color: "red" }}>{formErrors.Leader_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_yog"
                    id="leaderYog"
                    type="text"
                    placeholder="Leader Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.Leader_yog}
                  />
                   {formErrors.Leader_yog && <p style={{ color: "red" }}>{formErrors.Leader_yog}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="leaderYog"
                    type="text"
                    placeholder="Team Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                   {formErrors.P2_name && <p style={{ color: "red" }}>{formErrors.P2_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_email"
                    id="leaderYog"
                    type="text"
                    placeholder="Team Member 2 Email"
                    onChange={(e) => handle(e)}
                    value={form.P2_email}
                  />
                   {formErrors.P2_email && <p style={{ color: "red" }}>{formErrors.P2_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_branch"
                    id="leaderYog"
                    type="text"
                    placeholder="Team Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                   {formErrors.P2_branch && <p style={{ color: "red" }}>{formErrors.P2_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_sem"
                    id="leaderYog"
                    type="text"
                    placeholder="Team Member 2 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P2_sem}
                  />
                   {formErrors.P2_sem && <p style={{ color: "red" }}>{formErrors.P2_sem}</p>}
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
                <h4>Cornhole Game</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                Cornhole is a popular lawn game where players or teams 
                take turns throwing bags filled with sand at a raised 
                platform with a hole in it. The objective is to score 
                points by landing the bags either on the platform or 
                through the hole.
                </p>
                <p>Team Size: 2</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Cornhole Game</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                1. Each board should be 27 feet apart from front edge to front edge.
                </p>
                <p>
                2. It is a team based game . Each team will be having 2 members.
                </p>
                <p>
                3. Scoring criteria :<br></br>
                  - 3 points for a bag that goes through the hole.<br></br>
                  - 1 point for a bag that lands and stays on the board.<br></br>
                  - No points if the bag touches the ground before landing 
                  on the board.
                </p>
                <p>
                4.  Teams alternate tossing one bag at a time until all bags
                 have been thrown.
                </p>
                <p>
                5.  The game is typically played to 18 points. The first team
                 to reach or exceed 18 points at the end of a round wins.
                </p>               
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CornholeGameForm;