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

const ReverseCodingForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("reverseCodingForm")) || {
    team_name: "",
    leader_name: "",
    gender: "",
    email: "",
    whatsapp_number: "",
    curr_institution: "",
    program_of_study: "",
    leader_branch: "",
    leader_sem: "",
    member1_name: "",
    member1_email: "",
    member1_sem: "",
    member1_branch: "",
    member2_name: "",
    member2_email: "",
    member2_sem: "",
    member2_branch: "",
    member3_name: "",
    member3_email: "",
    member3_sem: "",
    member3_branch: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("reverseCodingForm", JSON.stringify(update));
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
      form.team_name !== "" &&
      form.leader_name !== "" &&
      form.email !== "" &&
      form.gender !== "" &&
      form.whatsapp_number !== "" &&
      form.curr_institution !== "" &&
      form.program_of_study !== "" &&
      form.leader_branch !== "" &&
      form.leader_sem !== "" &&
      form.member1_name !== "" &&
      form.member1_email !== "" &&
      form.member1_sem !== "" &&
      form.member1_branch !== "" &&
      form.member2_name !== "" &&
      form.member2_email !== "" &&
      form.member2_sem !== "" &&
      form.member2_branch !== "" &&
      form.member3_name !== "" &&
      form.member3_email !== "" &&
      form.member3_sem !== "" &&
      form.member3_branch !== "" &&
      form.whatsapp_number.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=ReverseCoding`, form, {
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
      <Title color={"REVERSE CODING"} noncolor={""} />
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
                    id="teamName"
                    type="text"
                    name="team_name"
                    placeholder="Team Name"
                    onChange={(e) => handle(e)}
                    value={form.team_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="leader_name"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.leader_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderGender"
                    type="text"
                    name="gender"
                    placeholder="Leader Gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="whatsapp_number"
                    placeholder="Leader Whatsapp Number"
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
                    id="leaderEmail"
                    type="text"
                    name="email"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="curr_institution"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader College"
                    onChange={(e) => handle(e)}
                    value={form.curr_institution}
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
                    name="leader_branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Branch"
                    onChange={(e) => handle(e)}
                    value={form.leader_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_sem"
                    id="leaderSem"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_name"
                    id="P2_name"
                    type="text"
                    placeholder="Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.member1_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_email"
                    id="P2_name"
                    type="text"
                    placeholder="Member 2 Email"
                    onChange={(e) => handle(e)}
                    value={form.member1_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_sem"
                    id="P2_name"
                    type="text"
                    placeholder="Member 2 Sem"
                    onChange={(e) => handle(e)}
                    value={form.member1_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_branch"
                    id="P2_name"
                    type="text"
                    placeholder="Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member1_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_name"
                    id="P2_name"
                    type="text"
                    placeholder="Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.member2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_email"
                    id="P2_name"
                    type="text"
                    placeholder="Member 3 Email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="P2_name"
                    type="text"
                    placeholder="Member 3 Sem"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="P2_name"
                    type="text"
                    placeholder="Member 3 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_name"
                    id="P2_name"
                    type="text"
                    placeholder="Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.member3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_email"
                    id="P2_name"
                    type="text"
                    placeholder="Member 4 Email"
                    onChange={(e) => handle(e)}
                    value={form.member3_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_sem"
                    id="P2_name"
                    type="text"
                    placeholder="Member 4 Sem"
                    onChange={(e) => handle(e)}
                    value={form.member3_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_branch"
                    id="P2_name"
                    type="text"
                    placeholder="Member 4 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member3_branch}
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
                <h4>Reverse Coding</h4>
                <h3 className="metaportal_fn_countdown">
                DESCRIPTION
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                Reverse Coding is a unique coding competition designed to challenge participant's problem-solving skills by presenting coding challenges that require them to work backward from a given output to the original code. The event aims to foster creative thinking, logical reasoning, and algorithmic understanding among participants.
                </p>
              </div>
              <div style={{ paddingTop: "2rem" }} data-aos="fade-down" className="mint_time">
                <h4>Reverse Coding</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. 4 members should be there in the team.
                </p>
                <p>2. No external help allowed.</p>
                <p>
                  3. Time limit should not exceed 30 minutes.
                </p>
                <p>
                  4. Panel decision shall be final.
                </p>
                <p>
                  5. 4-5 rounds should be there.
                </p>
                <p>
                  6. The team completing all the rounds shall be declared as winner.
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

export default ReverseCodingForm;
