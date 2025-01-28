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

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("pixelplayground", JSON.stringify(update));
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
    form.leader_name !== ""&&
    form.gender!== ""&&
    form.whatsapp_number!== "" &&
    form.email!== "" && 
    form.program_of_study!== "" &&
    form.leader_branch!== ""&&
    form.leader_sem!== ""&&
    form.team_name!== ""&&
    form.member1_name!== ""&&
    form.member1_email!== ""&&
    form.member1_sem!== ""&&
    form.fmember1_branch!== ""&&
    form.member2_name!== ""&&
    form.member2_email!== ""&&
    form.member2_sem!== ""&&
    form.member2_branch!== ""

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=PixelPlayground`, form, {
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
                    id="leaderName"
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
                    id="leaderName"
                    type="text"
                    name="gender"
                    placeholder="Leader Gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
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
                  {
                    form.whatsapp_number.length > 10 && (
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
                    id="leaderYog"
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
                    placeholder="Team Member 1 Name"
                    onChange={(e) => handle(e)}
                    value={form.member1_name}
                  />
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
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_name"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.member2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_email"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 2 Email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 2 Sem"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
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
                <p>
                  6. Software: Participants can use any video editing software
                  they prefer. However, all editing must be done during the
                  allocated time.
                </p>
                <p>
                  7. Submission: Final videos must be submitted in MP4 format. Late
                  submissions will not be accepted.
                </p>
                <p>
                  8. Originality: All work must be original. Plagiarism or using
                  templates that undermine creativity will lead to
                  disqualification.
                </p>
                <p>
                  9. Judging Criteria: Videos will be judged based on creativity,
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
