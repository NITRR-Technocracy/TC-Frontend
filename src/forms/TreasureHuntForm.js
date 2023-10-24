import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/tresureHunt.docx";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";


// const backend = keys.backend;

const TreasureHuntForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("treasureHuntForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_yog: "",
    P2_name: "",
    P2_number: "",
    P2_branch: "",
    P2_yog: "",
    P3_name: "",
    P3_number: "",
    P3_branch: "",
    P3_yog: "",
    P4_name: "",
    P4_number: "",
    P4_branch: "",
    P4_yog: "",
    P5_name: "",
    P5_number: "",
    P5_branch: "",
    P5_yog: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("treasureHuntForm", JSON.stringify(update));
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
    console.log(form);
    let condition1 =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_college !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_yog !== "" &&
      form.P2_name !== "" &&
      form.P2_number !== "" &&
      form.P2_branch !== "" &&
      form.P2_yog !== "" &&
      form.P3_name !== "" &&
      form.P3_number !== "" &&
      form.P3_branch !== "" &&
      form.P3_yog !== "" &&
      form.P4_name !== "" &&
      form.P4_number !== "" &&
      form.P4_branch !== "" &&
      form.P4_yog !== "" &&
      form.P5_name !== "" &&
      form.P5_number !== "" &&
      form.P5_branch !== "" &&
      form.P5_yog !== "" &&
      form.Leader_whatsapp.length === 10 &&
      form.P2_number.length === 10 &&
      form.P3_number.length === 10 &&
      form.P4_number.length === 10 &&
      form.P5_number.length === 10;

    if (condition1) {
      try {
        const res = await axios.post(
          `/server/register?event=TreasureHunt`,
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
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

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"Mock "} noncolor={"CID"} />
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
                    id="P2Name"
                    type="text"
                    placeholder="Member 1 Name "
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_number"
                    id="P2Number"
                    type="text"
                    placeholder="Member 1 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P2_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P2_number !== "" &&
                    form.P2_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_branch"
                    id="P2Name"
                    type="text"
                    placeholder="Member 1 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_yog"
                    id="P2Name"
                    type="text"
                    placeholder="Member 1 year of grad."
                    onChange={(e) => handle(e)}
                    value={form.P2_yog}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_number"
                    id="P2Number"
                    type="text"
                    placeholder="Member 2 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P3_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P3_number !== "" &&
                    form.P3_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_branch"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 branch"
                    onChange={(e) => handle(e)}
                    value={form.P3_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_yog"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 Year of grad."
                    onChange={(e) => handle(e)}
                    value={form.P3_yog}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_name"
                    id="P2Name"
                    type="text"
                    placeholder="Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.P4_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_number"
                    id="P2Number"
                    type="text"
                    placeholder="Member 3 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P4_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P4_number !== "" &&
                    form.P4_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_branch"
                    id="P2Name"
                    type="text"
                    placeholder="Member 3 branch"
                    onChange={(e) => handle(e)}
                    value={form.P4_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_yog"
                    id="P2Name"
                    type="text"
                    placeholder="Member 3 Year of grad."
                    onChange={(e) => handle(e)}
                    value={form.P4_yog}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_name"
                    id="P2Name"
                    type="text"
                    placeholder="Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.P5_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_number"
                    id="P2Number"
                    type="text"
                    placeholder="Member 4 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P5_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P5_number !== "" &&
                    form.P5_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_branch"
                    id="P2Name"
                    type="text"
                    placeholder="Member 4 branch"
                    onChange={(e) => handle(e)}
                    value={form.P5_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_yog"
                    id="P2Name"
                    type="text"
                    placeholder="Member 4 Year of grad."
                    onChange={(e) => handle(e)}
                    value={form.P5_yog}
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
                <h4></h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
              <p>1. An interesting on-campus murder story will be there.</p>
                <p>2. Clues are left behind all around the campus</p>
                <p>
                  3. Some volunteers will act as witnesses or cast for the murder mystery.
                </p>
                <p>
                  4. The team who finds out the real murderer first wins.
                </p>
                <p>
                  5. Multiple participating teams 
                </p>
                <p>
                  6. Each team needs to have 5 members. No restrictions (branchwise, yearwise or genderwise) on creating teams.
                </p>
                <p>7. A quiz round might be conducted first for the selection of participating teams.</p>
                <p>8. Clues can be left behind all around the emtircampus.</p>

  
              </div>
    
              <a style={{ textDecoration: "none" }} href={docs}>
                <span className="metaportal_fn_button_4">Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureHuntForm;
