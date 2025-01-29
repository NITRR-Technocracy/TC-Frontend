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

const CodeSprintRelayForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("codesprintform")) || {
    team_name: "",
    leader_name: "",
    email: "",
    whatsapp_number: "",
    curr_institution: "",
    leader_branch: "",
    leader_sem: "",
    gender:"",
    member2_email:"",
    member2_sem:"",
    member2_branch:"",
    member2_name: "",
    member3_name: "",
    member3_email:"",
    member3_sem:"",
    member3_branch:"",
    member4_name: "",
    member4_email:"",
    member4_sem:"",
    member4_branch:"",
    pref_prog_lang: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("codesprint", JSON.stringify(update));
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
    if (!emailRegex.test(form.member2_email)) {
      errors.member2_email = "Enter a valid email address!!";
    }
    if (!emailRegex.test(form.member3_email)) {
      errors.member3_email = "Enter a valid email address!!";
    }
    if (!emailRegex.test(form.member4_email)) {
      errors.member4_email = "Enter a valid email address!!";
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
        const res = await axios.post(`${backend}/register?event=CodeSprintRelay`, form, {
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
      <Title color={"Code Sprint Relay"} noncolor={""} />
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
                  {formErrors.team_name && <p style={{ color: "red" }}>{formErrors.team_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_name"
                    id="leaderName"
                    type="text"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.leader_name}
                  />
                  {formErrors.leader_name && <p style={{ color: "red" }}>{formErrors.leader_name}</p>}
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
                  {formErrors.gender && <p style={{ color: "red" }}>{formErrors.gender}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.email}
                  />
                  {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="whatsapp_number"
                    id="leaderNumber"
                    type="text"
                    placeholder="Leader Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.whatsapp_number}
                  />
                  <span style={{ fontSize: "0.7rem",color:"white"}}>
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
                    name="curr_institution"
                    id="leaderCollege"
                    type="text"
                    placeholder="Leader College"
                    onChange={(e) => handle(e)}
                    value={form.curr_institution}
                  />
                  {formErrors.curr_institution && <p style={{ color: "red" }}>{formErrors.curr_institution}</p>}
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
                  {formErrors.leader_branch && <p style={{ color: "red" }}>{formErrors.leader_branch}</p>}
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
                  {formErrors.leader_sem && <p style={{ color: "red" }}>{formErrors.leader_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_name"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.member2_name}
                  />
                  {formErrors.member2_name && <p style={{ color: "red" }}>{formErrors.member2_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_email"
                    id="P2_email"
                    type="text"
                    placeholder="Team Member 2 email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                  {formErrors.member2_email && <p style={{ color: "red" }}>{formErrors.member2_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="P2_branch"
                    type="text"
                    placeholder="Team Member 2 branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                  {formErrors.member2_branch && <p style={{ color: "red" }}>{formErrors.member2_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="P2_sem"
                    type="text"
                    placeholder="Team Member 2 semester"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
                  />
                  {formErrors.member2_sem && <p style={{ color: "red" }}>{formErrors.member2_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_name"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.member3_name}
                  />
                  {formErrors.member3_name && <p style={{ color: "red" }}>{formErrors.member3_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_email"
                    id="P3_email"
                    type="text"
                    placeholder="Team Member 3 email"
                    onChange={(e) => handle(e)}
                    value={form.member3_email}
                  />
                  {formErrors.member3_email && <p style={{ color: "red" }}>{formErrors.member3_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_branch"
                    id="P3_branch"
                    type="text"
                    placeholder="Team Member 3 branch"
                    onChange={(e) => handle(e)}
                    value={form.member3_branch}
                  />
                  {formErrors.member3_branch && <p style={{ color: "red" }}>{formErrors.member3_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_sem"
                    id="P3_sem"
                    type="text"
                    placeholder="Team Member 3 sem"
                    onChange={(e) => handle(e)}
                    value={form.member3_sem}
                  />
                  {formErrors.member3_sem && <p style={{ color: "red" }}>{formErrors.member3_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_name"
                    id="P4_name"
                    type="text"
                    placeholder="Team Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.member4_name}
                  />
                  {formErrors.member4_name && <p style={{ color: "red" }}>{formErrors.member4_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_email"
                    id="P4_email"
                    type="text"
                    placeholder="Team Member 4 email"
                    onChange={(e) => handle(e)}
                    value={form.member4_email}
                  />
                  {formErrors.member4_email && <p style={{ color: "red" }}>{formErrors.member4_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_branch"
                    id="P4_branch"
                    type="text"
                    placeholder="Team Member 4 branch"
                    onChange={(e) => handle(e)}
                    value={form.member4_branch}
                  />
                  {formErrors.member4_branch && <p style={{ color: "red" }}>{formErrors.member4_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_sem"
                    id="P4_sem"
                    type="text"
                    placeholder="Team Member 4 sem"
                    onChange={(e) => handle(e)}
                    value={form.member4_sem}
                  />
                  {formErrors.member4_sem && <p style={{ color: "red" }}>{formErrors.member4_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="pref_prog_lang"
                    id="Preffered_Language"
                    type="text"
                    placeholder="Preffered Programming Language"
                    onChange={(e) => handle(e)}
                    value={form.pref_prog_lang}
                  />
                  {formErrors.pref_prog_lang && <p style={{ color: "red" }}>{formErrors.pref_prog_lang}</p>}
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
                <h4>Code Sprint Relay</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Code Sprint Relay is a dynamic, team-based coding challenge
                  where teamwork, creativity, and problem-solving are tested.
                </p>
                <p>Team size: 4</p>
                <p>Time duration: 1 hrs (15mins for each team member)</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Code Sprint Relay</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. The problem statement will be provided to the team on the
                  spot.
                </p>
                <p>
                  2. The first team member will proceed with the code and after
                  15 minutes, a new team member will be introduced to code and
                  have to continue from the step the preceding member has left
                  on.
                </p>
                <p>
                  3. Participants must bring their laptops with a pre-installed
                  coding platform.
                </p>
                <p>
                  4. Participants are allowed to choose any language including
                  C++, Java, Python.
                </p>
                <p>
                  5. No pre-built code solution will be entertained. Use of any
                  smartwatch or mobile phone is strictly prohibited.
                </p>
                <p>
                  6. Late submission of code solution or any attempt to alter
                  another team member will result in automatic disqualification.
                </p>
                <p>
                  7. The use of any smartwatch or mobile phone is strictly
                  prohibited.
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

export default CodeSprintRelayForm;
