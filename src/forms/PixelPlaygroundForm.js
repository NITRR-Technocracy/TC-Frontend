import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const PixelPlaygroundForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("pixelplayground")) || {
    leader_name: "",
    gender: "",
    whatsapp_number: "",
    email: "",
    program_of_study: "",
    leader_branch: "",
    leader_sem: "",
    team_name: "",
    member1_name: "",
    member1_email: "",
    member1_sem: "",
    member1_branch: "",
    member2_name: "",
    member2_email: "",
    member2_sem: "",
    member2_branch: ""
  };

  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("pixelplayground", JSON.stringify(update));
  };

  const validateForm = () => {
    let errors = {};

    // Validate whatsapp number
    if (!/^\d{10}$/.test(form.whatsapp_number)) {
      errors.whatsapp_number = "Enter a valid 10-digit phone number.";
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Enter a valid email address.";
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

    // Validate the form before submission
    if (!validateForm()) {
      alert("Please fix the errors and try again.");
      setSubmit(false);
      return;
    }

    try {
      const res = await axios.post(`${backend}/register?event=PixelPlayground`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "An error occurred during submission.");
    }
    setSubmit(false);
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"Pixel Playground"} noncolor={""} />
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
                    name="email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Email"
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
                    placeholder="Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.whatsapp_number}
                  />
                  <span style={{ fontSize: "0.7rem", color: "white" }}>
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
                    id="leaderBranch"
                    type="text"
                    placeholder="Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.program_of_study}
                  />
                  {formErrors.program_of_study && <p style={{ color: "red" }}>{formErrors.program_of_study}</p>}
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
                    id="leaderYog"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
                  {formErrors.leader_sem && <p style={{ color: "red" }}>{formErrors.leader_sem}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_name"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 1 Name"
                    onChange={(e) => handle(e)}
                    value={form.member1_name}
                  />
                  {formErrors.member1_name && <p style={{ color: "red" }}>{formErrors.member1_name}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_email"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 1 Email"
                    onChange={(e) => handle(e)}
                    value={form.member1_email}
                  />
                  {formErrors.member1_email && <p style={{ color: "red" }}>{formErrors.member1_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_branch"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 1 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member1_branch}
                  />
                  {formErrors.member1_branch && <p style={{ color: "red" }}>{formErrors.member1_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_sem"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 1 Sem"
                    onChange={(e) => handle(e)}
                    value={form.member1_sem}
                  />
                  {formErrors.member1_sem && <p style={{ color: "red" }}>{formErrors.member1_sem}</p>}
                </li>

                {/* Member 2 Form Fields */}
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
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 2 Email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                  {formErrors.member2_email && <p style={{ color: "red" }}>{formErrors.member2_email}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                  {formErrors.member2_branch && <p style={{ color: "red" }}>{formErrors.member2_branch}</p>}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 2 Sem"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
                  />
                  {formErrors.member2_sem && <p style={{ color: "red" }}>{formErrors.member2_sem}</p>}
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
                <h4>Pixel Playground</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Pixel Playground is an exhilarating video editing competition
                  where creativity meets time pressure. Participants will
                  capture the essence of our 2-day fest through videos or photos
                  and craft a stunning short film within a limited timeframe on
                  Day 2. Show off your editing prowess and storytelling skills
                  as you bring the fest's highlights to life. With only a few
                  hours to create, edit, and render your masterpiece, this event
                  is all about speed, precision, and creativity. The best edits
                  will be showcased, and winners will be announced at the end of
                  Day 2.
                </p>
                <p>Team Size: 1 to 3</p>
                <p>Video Submission Deadline:  1/2/25, 4:00 PM</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Pixel Playground</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Team Size: Participants can compete individually or in
                  teams of up to 3 members.
                </p>
                <p>
                  2. Content Capture: All video footage or photos must be
                  captured during the fest's first day. Use of pre-existing
                  content is prohibited.
                </p>
                <p>
                  3. Theme: The video should represent the fest's spirit and
                  activities. A specific theme or keyword will be provided at
                  the start of Day 2.
                </p>
                <p>
                  4. Duration: The final edited video should be between 2 to 5
                  minutes long.
                </p>
                <p>
                  5. Editing Time: Participants will have a total of 4-5 hours
                  on Day 2 to edit and submit their final video.
                </p>
                <p>6. Video submission deadline :- 4:00 PM (DAY-2)</p>
                <p>
                  7. Software: Participants can use any video editing software
                  they prefer. However, all editing must be done during the
                  allocated time.
                </p>
                <p>
                  8. Submission: Final videos must be submitted in MP4 format. Late
                  submissions will not be accepted.
                </p>
                <p>
                  9. Originality: All work must be original. Plagiarism or using
                  templates that undermine creativity will lead to
                  disqualification.
                </p>
                <p>
                  10. Judging Criteria: Videos will be judged based on creativity,
                  storytelling, technical editing skills, and adherence to the
                  theme.
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

export default PixelPlaygroundForm;
