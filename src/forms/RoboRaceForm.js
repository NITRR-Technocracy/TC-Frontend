import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const RoboRaceForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("roborace")) || {
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_yog: "",
    P2_name: "",
    P3_name: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("roborace", JSON.stringify(update));
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
    // console.log(hCaptcha Token: ${token});
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
      form.Leader_name !== "" &&
      form.Leader_email !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_college !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_yog !== "" &&
      form.P2_name !== "" &&
      form.P3_name !== "" &&
      form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=RoboRace`, form, {
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
      <Title color={"Robo Race"} noncolor={""} />
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
                    name="Leader_name"
                    placeholder="Leader Full Name"
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
                    placeholder="Leader WhatsApp Number"
                    onChange={(e) => handle(e)}
                    value={form.Leader_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" ,color:"white"}}>
                    * Don't include +91 or 0.
                  </span>
                  {
                    form.Leader_whatsapp.length > 10 && (
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
                    placeholder="Leader Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.Leader_yog}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="p2 name"
                    type="text"
                    placeholder="Team Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                   <span style={{ fontSize: "0.7rem" ,color:"white"}}>
                    * Fill NIL if single Participation
                  </span>
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                  <span style={{ fontSize: "0.7rem" ,color:"white"}}>
                    * Fill NIL if single Participation
                  </span>
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
                <h4>Robo Race</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <h4>General Rules</h4>
                <p>
                  1. Registration: Qualifying round via video submission or
                  on-spot registration.
                </p>
                <p>2. Dimensions: Maximum size: 30cm x 30cm x 30cm.</p>
                <p>3. Team Size: 2 to 4 members.</p>
                <p>
                  4. Control Options: <br />
                  &emsp;Wired: Cable length must be at least 2 meters to ensure
                  slack. <br />
                  &emsp;Wireless: Use dual-frequency remote, Bluetooth, or Wi-Fi
                  with onboard power.
                </p>
                <p>
                  5. Prohibited Materials: No prefabricated Lego parts, grasping
                  mechanisms, or explosives. Pre-assembled gear assemblies are
                  allowed.
                </p>
                <p>
                  6. Bot Requirement: Participants must bring their own bot.
                </p>
                <p>
                  7. Weight Limit: Max 8 Kg, including the weight of the
                  battery.
                </p>

                <h4>Gameplay Rules</h4>
                <p>1. Each bot can participate only once.</p>
                <p>
                  2. Participants must contact organizers for clarifications not
                  covered in this document.
                </p>
                <p>3. Enter the arena only with organizer permission</p>
                <p>4. Only one operator can control the bot</p>
                <p>
                  5. Rule violations or misconduct will result in
                  disqualification.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Robo Race</h4>
                <h3 className="metaportal_fn_countdown">
                  Obstacles and Terrain
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>Rough Terrain</p>
                <p>Wedges and inclines</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Robo Race</h4>
                <h3 className="metaportal_fn_countdown">Penalties</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. Damaging another bot is prohibited.</p>
                <p>
                  2. Leaving the race track or skipping obstacles incurs
                  penalties.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Robo Race</h4>
                <h3 className="metaportal_fn_countdown">
                  Round Structure (Offline)
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <h4>Round 1: Elimination Round</h4>
                <p>
                  Teams compete for the fastest time to qualify for round 2.
                </p>
                <p>Qualifiers: Half of total participating teams</p>
                <p>
                  Bots stuck or off-course are allowed five hand touches; every
                  additional touch adds 15 seconds to the total time.
                </p>
                <h4>Round 2: Final Round</h4>
                <p>A 300g payload is placed on the bot's holder.</p>
                <p>Each payload drop adds 3 seconds to the total time.</p>
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

export default RoboRaceForm;
