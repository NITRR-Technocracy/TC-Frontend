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

const TechnoGraphixForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("technoGraphixForm")) || {
    Name: "",
    Email: "",
    Whatsapp: "",
    Program_of_study: "",
    Branch: "",
    Sem: ""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("technoGraphixForm", JSON.stringify(update));
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
      form.Email !== "" &&
      form.Whatsapp !== "" &&
      form.Branch !== "" &&
      form.Sem !== "" &&
      form.Program_of_study !== "" &&
      form.Whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=TechnoGraphics`, form, {
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
      <Title color={"TECHNO GRAPHIX"} noncolor={""} />
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
                    name="Name"
                    placeholder="Full Name"
                    onChange={(e) => handle(e)}
                    value={form.Name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Whatsapp"
                    placeholder="Contact Number"
                    onChange={(e) => handle(e)}
                    value={form.Whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem",color:"white" }}>
                    * Don't include +91 or 0.
                  </span>
                  {
                    form.Whatsapp.length > 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderEmail"
                    type="text"
                    name="Email"
                    placeholder="Email Address"
                    onChange={(e) => handle(e)}
                    value={form.Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Program_of_study"
                    id="leaderProgramOfStudy"
                    type="text"
                    placeholder="Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.Program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Branch"
                    onChange={(e) => handle(e)}
                    value={form.Branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Sem"
                    id="leaderSem"
                    type="text"
                    placeholder="Semester"
                    onChange={(e) => handle(e)}
                    value={form.Sem}
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
            <div className="mint_desc" style={{ paddingTop: "4rem" }}>
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
                <h4>Techno Graphix</h4>
                <h3 className="metaportal_fn_countdown">
                DESCRIPTION
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                An Event based on Graphic designing/poster making based on the theme of the fest.
                </p>
              </div>
              
              <div style={{ paddingTop: "2rem" }} data-aos="fade-down" className="mint_time">
                <h4>TECHNO Graphix</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Participation will be individual.
                </p>
                <p>2. Registration will be online through google form and spot registration is allowed too. </p>
                <p>
                  3. Event will contain two sections namely research and execution sections.
                </p>
                <p>
                  4. Poster has to be designed according to the theme only.
                </p>
                <p>
                  5. All the participants will be given 15 minutes to collect the resources from any source possible and organise the structure of the design.
                </p>
                <p>
                  6. After 15 minutes, collecting any further resources from any sources will be restricted.
                </p>
                <p>
                  7. Time duration of 1hr will be allocated to complete the design page.
                </p>
                <p>
                  8. Allowed platforms are CANVA and ADOBE ILLUSTRATOR only (pro version is not allowed).
                </p>
                <p>
                  9. After completion of the round the designed poster has to be submitted through email.
                </p>
                <p>
                  10. Decision regarding final judgement shall rest on Team Technocracy.
                </p>
              </div>
              {/*<a style={{ textDecoration: "none" }} href={docs}>
                <span className="metaportal_fn_button_4">Download PDF</span>
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnoGraphixForm;
