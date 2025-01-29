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

const DsaMarathonForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("dsamarathonform")) || {
    team_name: "",
    leader_name: "",
    email: "",
    whatsapp_number: "",
    curr_institution: "",
    leader_branch: "",
    leader_sem: "",
    gender: "",
    program_of_study: "",
    member1_email: "",
    member1_sem: "",
    member1_branch: "",
    member1_name: "",
    member2_name: "",
    member2_email: "",
    member2_sem: "",
    member2_branch: "",
    leader_hacker_rank_id: "",
    leader_hacker_earth_id: "",
    member1_hacker_rank_id: "",
    member1_hacker_earth_id: "",
    member2_hacker_rank_id: "",
    member2_hacker_earth_id: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("dsamarathonform", JSON.stringify(update));
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
    if (!emailRegex.test(form.member1_email)) {
      errors.member1_email = "Enter a valid email address!!";
    }
    if (!emailRegex.test(form.member2_email)) {
      errors.member2_email = "Enter a valid email address!!";
    }

    // Validate all required fields
    Object.keys(form).forEach((key) => {
      if (form[key] === "" && !key.includes("member2") && !key.includes("member1")) {
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
        const res = await axios.post(
          `${backend}/register?event=DsaMarathon`,
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
      <Title color={"DSA Marathon"} noncolor={""} />
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
                    id="leaderName"
                    type="text"
                    name="leader_name"
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
                    id="leaderEmail"
                    type="text"
                    name="email"
                    placeholder="Leader Email"
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
                    id="leaderBranch"
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
                    id="leadersem"
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
                    name="leader_hacker_rank_id"
                    id="leader_hacker_rank_id"
                    type="text"
                    placeholder="Leader's Hackerrank ID"
                    onChange={(e) => handle(e)}
                    value={form.leader_hacker_rank_id}
                  />
                  {formErrors.leader_hacker_rank_id && <p style={{ color: "red" }}>{formErrors.leader_hacker_rank_id}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_hacker_earth_id"
                    id="leader_hacker_earth_id"
                    type="text"
                    placeholder="Leader's HackerEarth ID"
                    onChange={(e) => handle(e)}
                    value={form.leader_hacker_earth_id}
                  />
                  {formErrors.leader_hacker_earth_id && <p style={{ color: "red" }}>{formErrors.leader_hacker_earth_id}</p>}
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
                  {formErrors.member1_name && <p style={{ color: "red" }}>{formErrors.member1_name}</p>}
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
                  {formErrors.member1_branch && <p style={{ color: "red" }}>{formErrors.member1_branch}</p>}
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
                  {formErrors.member1_email && <p style={{ color: "red" }}>{formErrors.member1_email}</p>}
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
                  {formErrors.member1_sem && <p style={{ color: "red" }}>{formErrors.member1_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_hacker_rank_id"
                    id="member1_hacker_rank_id"
                    type="text"
                    placeholder="Team Member 2 Hackerrank ID"
                    onChange={(e) => handle(e)}
                    value={form.member1_hacker_rank_id}
                  />
                  {formErrors.member1_hacker_rank_id && <p style={{ color: "red" }}>{formErrors.hacker_rank_id}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_hacker_earth_id"
                    id="member1_hacker_earth_id"
                    type="text"
                    placeholder="Team Member 2 HackerEarth ID"
                    onChange={(e) => handle(e)}
                    value={form.member1_hacker_earth_id}
                  />
                  {formErrors.member1_hacker_earth_id && <p style={{ color: "red" }}>{formErrors.member1_hacker_earth_id}</p>}
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
                  {formErrors.member2_name && <p style={{ color: "red" }}>{formErrors.member2_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="member2_sem"
                    type="text"
                    placeholder="Team Member 3 sem"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
                  />
                  {formErrors.member2_sem && <p style={{ color: "red" }}>{formErrors.member2_sem}</p>}
                </li><li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="member2_branch"
                    type="text"
                    placeholder="Team Member 3 branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                  {formErrors.member2_branch && <p style={{ color: "red" }}>{formErrors.member2_branch}</p>}
                </li><li data-aos="fade-down">
                  <input
                    name="member2_email"
                    id="member2_email"
                    type="text"
                    placeholder="Team Member 3 email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                  {formErrors.member2_email && <p style={{ color: "red" }}>{formErrors.member2_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_hacker_rank_id"
                    id="member2_hacker_rank_id"
                    type="text"
                    placeholder="Team Member 3 Hackerrank ID"
                    onChange={(e) => handle(e)}
                    value={form.member2_hacker_rank_id}
                  />
                  {formErrors.member2_hacker_rank_id && <p style={{ color: "red" }}>{formErrors.member2_hacker_rank_id}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_hacker_earth_id"
                    id="member2_hacker_earth_id"
                    type="text"
                    placeholder="Team Member 3 HackerEarth ID"
                    onChange={(e) => handle(e)}
                    value={form.member2_hacker_earth_id}
                  />
                  {formErrors.member2_hacker_earth_id && <p style={{ color: "red" }}>{formErrors.member2_hacker_earth_id}</p>}
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
                <h4>DSA Marathon</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  An event based on quick selection and solving maximum
                  questions from a set of 30 Standard DSA questions.
                </p>
                <p>Team size: 3</p>
                <p>Time duration: 45mins</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>DSA Marathon</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. All the team members of a team have to login through the
                  platform and have to solve maximum questions possible from a
                  set of 30 questions in 45 minutes.
                </p>
                <p>
                  2. Students will be assessed from the number of test cases
                  passed per question.
                </p>
                <p>
                  3. Same question can be solved by different members of the
                  team and a solution with maximum passed test cases will be
                  counted.
                </p>
                <p>
                  4. The team with the maximum number of questions solved will
                  be declared winners.
                </p>
                <p>
                  5. Any unfair means and plagiarism will lead to immediate
                  disqualification.
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

export default DsaMarathonForm;
