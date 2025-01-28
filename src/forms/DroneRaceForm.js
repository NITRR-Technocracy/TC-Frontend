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

const DroneRaceForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("droneraceform")) || {
    team_name:"",
    leader_name:"",
    email: "",
    whatsapp_number: "",
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
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("droneraceform", JSON.stringify(update));
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
    form.leader_branch !== "" &&
    form.leader_sem !== "" &&
    form.Leader_program_Of_Study !== "" &&
    form.gender !== "" &&
    form.member1_name !== "" &&
    form.member1_sem !== "" &&
    form.member1_branch !== "" &&
    form.member1_email !== "" &&
    form.member2_name !== "" &&
    form.member2_email !== "" &&
    form.member2_branch !== "" &&
    form.member2_sem !== "" ;

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=DroneRacing`, form, {
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
      <Title color={"Drone Race"} noncolor={""} />
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
                    id="leaderName"
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
                    placeholder="semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
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
                <h4>Drone Race</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Each Teams have to bring their own drone and complete the
                  given track in minimum time
                </p>
                <p>Team size: 1-3</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Drone Race</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Drone must pass through the 10 circular or rectangular
                  loops
                </p>
                <p>
                  2. They have to choose the optimum path to pass through all
                  the 10 loops
                </p>
                <p>3. 1 to 3 members in a team</p>
                <p>
                  4. 3 chances to continue their race if the drone falls down to
                  the group
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

export default DroneRaceForm;
