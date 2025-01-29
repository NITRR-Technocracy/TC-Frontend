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

const EscapeTheMatrixForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("escapethematrix")) || {
    team_name: "",
    leader_name: "",
    email: "",
    whatsapp_number: "",
    Leader_college: "",
    leader_branch: "",
    leader_sem: "",
    gender:"",
    program_of_study:"",
    member1_email:"",
    member1_sem:"",
    member1_branch:"",
    member1_name: "",
    member2_name: "",
    member2_email:"",
    member2_sem:"",
    member2_branch:"",
    member3_name: "",
    member3_email:"",
    member3_sem:"",
    member3_branch:"",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("escapethematrix", JSON.stringify(update));
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
    form.team_name !== "" &&
    form.leader_name !== "" &&
    form.email !== "" &&
    form.whatsapp_number !== "" &&
    form.email !== "" &&
    form.leader_branch !== "" &&
    form.leader_sem !== "" &&
    form.program_of_study !== "" &&
    form.gender !== "" &&
    form.member1_name !== "" &&
    form.member1_sem !== "" &&
    form.member1_branch !== "" &&
    form.member1_email !== "" &&
    form.member2_name !== "" &&
    form.member2_email !== "" &&
    form.member2_branch !== "" &&
    form.member2_sem !== "" &&
    form.member3_name !== "" &&
    form.member3_email !== "" && 
    form.member3_branch !== "" &&
    form.member3_sem !== "" &&
    form.whatsapp_number.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=EscapeTheMatrix`, form, {
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
      <Title color={"Escape The Matrix"} noncolor={""} />
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
                    name="team_name"
                    id="teamName"
                    type="text"
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
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.email}
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
                  <span style={{ fontSize: "0.7rem",color:"white"}}>
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
                    id="leadersem"
                    type="text"
                    placeholder="Leader semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    id="program_of_study"
                    type="text"
                    placeholder="Leader program of study"
                    onChange={(e) => handle(e)}
                    value={form.program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="gender"
                    id="gender"
                    type="text"
                    placeholder="Leader gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_name"
                    id="member1_name"
                    type="text"
                    placeholder="Team Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.member1_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_branch"
                    id="member1_branch"
                    type="text"
                    placeholder="Team Member 2 branch"
                    onChange={(e) => handle(e)}
                    value={form.member1_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_email"
                    id="member1_email"
                    type="text"
                    placeholder="Team Member 2 email"
                    onChange={(e) => handle(e)}
                    value={form.member1_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_sem"
                    id="member1_sem"
                    type="text"
                    placeholder="Team Member 2 semester"
                    onChange={(e) => handle(e)}
                    value={form.member1_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_name"
                    id="member2_name"
                    type="text"
                    placeholder="Team Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.member2_name}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="member2_sem"
                    type="text"
                    placeholder="Team Member 3 sem"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="member2_branch"
                    type="text"
                    placeholder="Team Member 3 branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="member2_email"
                    id="member2_email"
                    type="text"
                    placeholder="Team Member 3 email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_name"
                    id="member3_name"
                    type="text"
                    placeholder="Team Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.member3_name}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="member3_sem"
                    id="member3_sem"
                    type="text"
                    placeholder="Team Member 4 sem"
                    onChange={(e) => handle(e)}
                    value={form.member3_sem}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="member3_branch"
                    id="member3_branch"
                    type="text"
                    placeholder="Team Member 4 branch"
                    onChange={(e) => handle(e)}
                    value={form.member3_branch}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="member3_email"
                    id="member3_email"
                    type="text"
                    placeholder="Team Member 4 email"
                    onChange={(e) => handle(e)}
                    value={form.member3_email}
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
                <h4>Escape The Matrix</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  "Escape the Matrix" is a thrilling survival quiz designed to
                  test participant's knowledge, problem-solving skills, and
                  quick thinking. Participants will navigate through a series of
                  challenging questions and tasks, each more difficult than the
                  last, to escape the virtual matrix. This event combines
                  elements of a quiz, making it a unique and engaging
                  experience.
                </p>
                <p>Team size: 3-4</p>
                <p>Rounds: 4</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Escape The Matrix</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Team Composition: Teams must consist of 3-4 members. No
                  changes in team composition are allowed once the event starts.
                </p>
                <p>
                  2. All participants must adhere to the rules and instructions
                  provided by the event coordinators.
                </p>
                <p>
                  3. Any form of cheating or misconduct will result in immediate
                  disqualification.
                </p>
                <p>
                  4. Time Limits: Each round has a specific time limit which
                  must be adhered to. Teams must submit their answers and
                  solutions within the given time frame.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Escape The Matrix</h4>
                <h3 className="metaportal_fn_countdown">Event Structure</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Pre-Event Briefing: All teams will gather for a briefing where
                  the rules and structure of the event will be explained.
                </p>
                <h4>Round 1: The Entry Point (Buzzer Round): 40 teams</h4>
                <p>Teams will face a set of 10 multiple-choice questions.</p>
                <p>
                  Each correct answer earns points, and negative marks for
                  pressing the buzzer and telling a wrong answer and a minimum
                  score is required to progress to the next round.
                </p>
                <h4>Round 2: The Movie Quiz: 20 teams</h4>
                <p>
                  Teams will be prompted with dialogues and they have to
                  complete the dialogues
                </p>
                <p>
                  Teams must solve all puzzles within a given time frame to
                  advance.
                </p>
                <h4>Round 3: The Code Breaker: 10 teams</h4>
                <p>
                  Teams will be given encrypted messages and codes to decipher.
                </p>
                <p>
                  Points are awarded for each correct code, with higher points
                  for faster solutions.
                </p>
                <p>
                  The top teams based on points and time will proceed to the
                  final round.
                </p>
                <h4>Round 4: The Final Escape: 3-5 teams</h4>
                <p>
                  Teams will face a mix of high-difficulty rapid fire questions
                  and those who will give the most correct answers will win.
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

export default EscapeTheMatrixForm;
