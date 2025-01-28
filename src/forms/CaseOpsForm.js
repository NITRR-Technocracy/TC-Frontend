import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

// const backend = keys.backend;

const CaseOpsForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("caseopsform")) || {
    Team_name: "",
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_yog: "",
    P2_name: "",
    P2_branch: "",
    P2_yog: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("caseopsform", JSON.stringify(update));
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
    let condition =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_email !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_college !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_yog !== "" &&
      form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=caseops`, form, {
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

  const onVerifyCaptcha = () => {};

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"Case Ops 3.0"} noncolor={""} />
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
                    name="Team_name"
                    id="teamName"
                    type="text"
                    placeholder="Team Name"
                    onChange={(e) => handle(e)}
                    value={form.Team_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Leader_name"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.Leader_name}
                  />
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
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.Leader_whatsapp !== "" &&
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
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_yog"
                    id="leaderYog"
                    type="text"
                    placeholder="Leader's year of graduation"
                    onChange={(e) => handle(e)}
                    value={form.Leader_yog}
                  />
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
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="leaderYog"
                    type="text"
                    placeholder="Team Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="leaderYog"
                    type="text"
                    placeholder="Team Member 2 Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.P2_yog}
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
                <h4>Case Ops 3.0</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>Complete any one of the case studies provided.</p>
                <p>Team size: 1-2</p>
                <p>
                  Eligibility: - Undergraduate students in their first, second,
                  third, and fourth years should participate.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Case Ops 3.0</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Any Cheating, Plagiarism or Unethical Behaviour will lead
                  to immediate disqualification.
                </p>
                <p>
                  2. Participation can be individual or in a group (maximum 2
                  person).
                </p>
                <p>3. Event commencement and registration on UNSTOP only.</p>
                <p>4. Event will be conducted in 2 rounds.</p>
                <p>
                  5. Solution according to the problem statement will be
                  considered only.
                </p>
                <p>
                  6. Decisions regarding eligibility and final judgment shall
                  rest with Team Technocracy.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Case Ops 3.0</h4>
                <h3 className="metaportal_fn_countdown">Details of Rounds</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <h4>Round 1: Aptitude Test</h4>
                <p>
                  1. The participants are expected to solve 20 aptitude
                  questions and 2 small reading comprehensions in a time
                  interval of 35 minutes.
                </p>
                <p>
                  2. All questions are compulsory. Negative marking of -1 will
                  be applied to all incorrect answers and +3 will be awarded for
                  each correct answer.
                </p>
                <p>
                  3. Shortlisted students will be informed for the final case
                  study round.
                </p>
                <h4>Round 2: Case Study Round</h4>
                <p>
                  1. This round comprises three case study problems. Any one has
                  to be attempted.
                </p>
                <p>2. All the three case studies will be industry based.</p>
                <p>
                  3. A duration of 48 hours will be provided to the shortlisted
                  students to submit the solution of the chosen problem
                  statement.
                </p>
                <p>
                  4. Solution of the problem statement must be in a single file
                  (PPT format only) and the slide count must not exceed a total
                  of 7 slides.
                </p>
                <p>5. Plagiarized answer will not be entertained.</p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <a style={{ textDecoration: "none" }} href={docs}>
                  <span className="metaportal_fn_button_4">Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseOpsForm;
