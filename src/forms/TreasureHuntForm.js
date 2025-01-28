import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const TreasureHuntForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("treasureHuntForm")) || {
    team_name: "",
    username: "",
    whatsapp_number: "",
    branch: "",
    program_of_study: "",
    curr_semester: "",
    gender: "",
    member1_name: "",
    member1_sem: "",
    member1_branch: "",
    member2_name: "",
    member2_sem: "",
    member2_branch: "",
  };

  const [form, set] = useState(cachedForm);
  const [isSubmitting, setSubmit] = useState(false);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const handle = (e) => {
    const update = { ...form, [e.target.name]: e.target.value };
    set(update);
    localStorage.setItem("treasureHuntForm", JSON.stringify(update));
  };

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
    console.log(form);

    let condition =
    form.team_name !== "" &&
    form.username !== "" &&
    form.program_of_study !== "" &&
    form.whatsapp_number !== "" &&
    form.gender !== "" &&
    form.branch !== "" &&
    form.curr_semester !== "" &&
    form.member1_name !== "" &&
    form.member1_sem !== "" &&
    form.member2_branch !== "" &&
    form.member2_name !== "" &&
    form.member2_sem !== "" &&
    form.member2_branch !== "" &&
    form.whatsapp_number.length == 10;

    if (condition) {
      try {
        const res = await axios.post(
          `${backend}/register?event=MockCid`,
          form,
          { headers: { "Content-Type": "application/json", } }
        );
        alert(res.data.message);
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "Error submitting the form.");
      }
    } else {
      alert("Please fill all the necessary details correctly.");
    }
    setSubmit(false);
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"Mock"} noncolor={"CID"} />
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
                    type="text"
                    placeholder="Team Name"
                    onChange={handle}
                    value={form.team_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="username"
                    type="text"
                    placeholder="Leader Name"
                    onChange={handle}
                    value={form.username}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="whatsapp_number"
                    type="text"
                    placeholder="Leader WhatsApp"
                    onChange={handle}
                    value={form.whatsapp_number}
                  />
                  <span style={{ fontSize: "0.7rem" ,color:"white" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.whatsapp_number.length > 10 && (
                    <p style={{ color: "red" }}>
                      Enter a number of 10 digits only.
                    </p>
                  )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="branch"
                    type="text"
                    placeholder="Leader Branch"
                    onChange={handle}
                    value={form.branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="curr_semester"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={handle}
                    value={form.curr_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="gender"
                    type="text"
                    placeholder="Leader Gender"
                    onChange={handle}
                    value={form.gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    type="text"
                    placeholder="Leader Program of Study"
                    onChange={handle}
                    value={form.program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_name"
                    type="text"
                    placeholder="Participant 2 Name"
                    onChange={handle}
                    value={form.member1_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_sem"
                    type="text"
                    placeholder="Participant 2 Semester"
                    onChange={handle}
                    value={form.member1_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_branch"
                    type="text"
                    placeholder="Participant 2 Branch"
                    onChange={handle}
                    value={form.member1_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_name"
                    type="text"
                    placeholder="Participant 3 Name"
                    onChange={handle}
                    value={form.member2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    type="text"
                    placeholder="Participant 3 Semester"
                    onChange={handle}
                    value={form.member2_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    type="text"
                    placeholder="Participant 3 Branch"
                    onChange={handle}
                    value={form.member2_branch}
                  />
                </li>
                {/* Add similar fields for other participants */}
              </ul>
            </div>
            <HCaptcha
              sitekey={keys.hcaptcha}
              onClick={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
            <div className="mint_desc" style={{ paddingTop: "4rem" }}>
              {!isSubmitting ? (
                <div
                  className="metaportal_fn_button"
                  style={{ cursor: "pointer" }}
                  onClick={submit}
                >
                  Submit
                </div>
              ) : (
                <div className="metaportal_fn_button" style={{ opacity: 0.5 }}>
                  Submitting...
                </div>
              )}
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
            <div data-aos="fade-down" className="mint_time">
                <h4>Mock CID</h4>
                <h3 className="metaportal_fn_countdown">
                  Description
                </h3>
              </div>
              <div data-aos="fade-down" style={{marginBottom:"3rem"}} className="mint_info">
                <p>A thriller version of Cid.</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Mock Cid</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>• An interesting on-campus murder story can be created.</p>
                <p>• Clues are left behind all around the campus.</p>
                <p>• Some volunteers and team members can act as witnesses.</p>
                <p>• The one who finds out the real murderer first wins.</p>
                <p>• Multiple participating teams (5-6 teams).</p>
                <p>
                  • Clues can be left behind all around the campus (left garden,
                  central garden, parking area, in Mandir area, etc.).
                </p>
                <p>
                  • A quiz round first for the selection of participating teams.
                </p>
                <p>• Online registrations.</p>
                <p>
                  • This year we can conduct this on both days if it attracts a
                  great audience on the first day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureHuntForm;

