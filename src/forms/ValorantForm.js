import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/valorant.pdf";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import qr from "../assets/eventsAssets/valorantQr.png"

// const backend = keys.backend;

const ValorantForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("valoForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_branch: "",
    Leader_yog: "",
    Leader_email: "",
    Leader_college: "",
    Leader_game_id: "",
    P2_game_id: "",
    P2_number: "",
    P3_game_id: "",
    P3_number: "",
    P4_game_id: "",
    P4_number: "",
    P5_game_id: "",
    P5_number: "",
  };
  const [form, set] = useState(cachedForm);
  // const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  // const [fileError, setFileError] = useState();

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;
  //   const size = (file.size / 1024) / 1024;
  //   if (size > 1) {
  //     setFileError("File size must be <= 1 MB")
  //     return;
  //   }
  //   if (file)  {
  //     setFileError(null);
  //     const newData = { ...form };
  //     newData["file"] = file;
  //     set(newData);
  //     setUploadedFileName(file.name);
  //   }
  // };

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("valoForm", JSON.stringify(update));
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
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    // if (uploadedFileName === "") {
    //   alert("Please upload the payment screenshot");
    //   return;
    // }
    setSubmit(true);
    console.log(form);
    let condition1 =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_yog !== "" &&
      form.Leader_email !== "" &&
      form.Leader_college !== "" &&
      form.Leader_game_id !== "" &&
      form.Leader_whatsapp.length === 10;

    let condition2 = false;
    if (form.P2_game_id === form.P2_number && form.P2_number === "") {
      condition2 = true;
    }
    else if (
      form.P2_game_id !== "" &&
      form.P2_number !== "" &&
      form.P2_number.length === 10
    ) {
      condition2 = true;
    }

    let condition3 = false;
    if (form.P3_game_id === form.P3_number && form.P3_number === "") {
      condition3 = true;
    }
    else if (
      form.P3_game_id !== "" &&
      form.P3_number !== "" &&
      form.P3_number.length === 10
    ) {
      condition3 = true;
    }

    let condition4 = false;
    if (form.P4_game_id === form.P4_number && form.P4_number === "") {
      condition4 = true;
    }
    else if (
      form.P4_game_id !== "" &&
      form.P4_number !== "" &&
      form.P4_number.length === 10
    ) {
      condition4 = true;
    }

    let condition5 = false;
    if (form.P5_game_id === form.P5_number && form.P5_number === "") {
      condition5 = true;
    }
    else if (
      form.P5_game_id !== "" &&
      form.P5_number !== "" &&
      form.P5_number.length === 10
    ) {
      condition5 = true;
    }

    if (condition1 && condition2 && condition3 && condition4 && condition5) {
      try {
        const res = await axios.post(
          `/server/register?event=valo`,
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
      <Title color={"VALORANT"} noncolor={"TOURNAMENT"} />
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
                    id="leaderCollege"
                    type="text"
                    placeholder="Leader's College"
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
                    name="Leader_email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader's Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_game_id"
                    id="P1Id"
                    type="text"
                    placeholder="Leader Game ID "
                    onChange={(e) => handle(e)}
                    value={form.Leader_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_game_id"
                    id="P2Id"
                    type="text"
                    placeholder="Player 2 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P2_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_number"
                    id="P2Number"
                    type="text"
                    placeholder="Player 2 Mobile Number"
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
                    name="P3_game_id"
                    id="P3Id"
                    type="text"
                    placeholder="Player 3 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P3_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_number"
                    id="P3Number"
                    type="text"
                    placeholder="Player 3 Mobile Number"
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
                    name="P4_game_id"
                    id="P4Id"
                    type="text"
                    placeholder="Player 4 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P4_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_number"
                    id="P4Number"
                    type="text"
                    placeholder="Player 4 Mobile Number"
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
                    name="P5_game_id"
                    id="P5Id"
                    type="text"
                    placeholder="Player 5 Game ID"
                    onChange={(e) => handle(e)}
                    value={form.P5_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_number"
                    id="P5Number"
                    type="text"
                    placeholder="Player 5 Mobile Number"
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
              </ul>
              {/* <div>
                Pay Registration Fee 400 Rs
                <img src={qr} width="100%" alt="" />
              </div> */}
              {/* <input
                accept="image/*"
                style={{ display: "none" }}
                id="file-input"
                type="file"
                onChange={handleFileChange}
              />
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                htmlFor="file-input"
              >
                <span className="metaportal_fn_button_2">
                  Upload Payment Screenshot
                </span>
                {!fileError && uploadedFileName && (
                  <p style={{ color: "white", paddingTop: "1rem" }}>
                    Uploaded File: {uploadedFileName}
                  </p>
                )}
                {fileError && (
                  <p style={{ color: "red", paddingTop: "1rem" }}>
                    {fileError}
                  </p>
                )}
              </label> */}
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
                <h4>VALORANT TOURNAMENT</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>Each team’s roster must consist of exactly 5 players. The format will be of 5 v 5
matches. </p>
                <p>Maps: Bind, Haven, Split, Ascent, Icebox, Breeze, Fracture.</p>
    <p>Participants should bring their own system.</p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VALORANT TOURNAMENT</h4>
                <h3 className="metaportal_fn_countdown">Game Format</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                Round 1: The tournament will follow knockout system. The teams that win this
round will be forwarded to the next round and the teams losing will be
directly eliminated. 
                  <br />
                  <br />
                  Round 2: The winning teams will face each other in the semifinals of the
tournament. 
                  <br />
                  <br />
                  Round 3: The Finals will be played between the winners of the semifinals. The
team winning the final match will be crowned as the Valorant Champions at
Aavartan ’23-24. 
                </p>
                <p>
                Winners : Assured Exciting Prizes
                </p>
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

export default ValorantForm;
