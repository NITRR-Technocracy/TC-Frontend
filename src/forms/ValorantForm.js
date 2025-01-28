import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/valorant.pdf";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import qr from "../assets/eventsAssets/valorantQr.png";

const backend = keys.backend;

const ValorantForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("valoForm")) || {
    team_name: "",
    username: "",
    whatsapp_number: "",
    branch: "",
    gender: "",
    curr_semester: "",
    program_of_study: "",
    leader_email: "",
    curr_institution: "",
    leader_game_id: "",
    discord: "",
    member1_name: "",
    member1_email: "",
    member1_game_id: "",
    member1_branch: "",
    member1_sem: "",
    member2_name: "",
    member2_email: "",
    member2_game_id: "",
    member2_branch: "",
    member2_sem: "",
    member3_name: "",
    member3_email: "",
    member3_game_id: "",
    member3_branch: "",
    member3_sem: "",
    member4_name: "",
    member4_email: "",
    member4_game_id: "",
    member4_branch: "",
    member4_sem: "",
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
      form.team_name !== "" &&
      form.username !== "" &&
      form.whatsapp_number !== "" &&
      form.branch !== "" &&
      form.Leader_yog !== "" &&
      form.leader_email !== "" &&
      form.curr_institution !== "" &&
      form.leader_game_id !== "" &&
      form.whatsapp_number.length === 10;

    let condition2 = false;
    if (form.member1_game_id === form.member1_number && form.member1_number === "") {
      condition2 = true;
    } else if (form.member1_game_id !== "" && form.member1_number !== "") {
      condition2 = true;
    }

    let condition3 = false;
    if (form.member2_game_id === form.member2_number && form.member2_number === "") {
      condition3 = true;
    } else if (form.member2_game_id !== "") {
      condition3 = true;
    }

    let condition4 = false;
    if (form.member3_game_id === form.member3_number && form.member3_number === "") {
      condition4 = true;
    } else if (form.member3_game_id !== "" && form.member3_number !== "") {
      condition4 = true;
    }

    let condition5 = false;
    if (form.member4_game_id === form.member4_number && form.member4_number === "") {
      condition5 = true;
    } else if (form.member4_game_id !== "" && form.member4_number !== "") {
      condition5 = true;
    }

    if (condition1 && condition2 && condition3 && condition4 && condition5) {
      try {
        const res = await axios.post(`${backend}/register?event=Valorant`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
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
                    name="username"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.username}
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
                    name="curr_institution"
                    id="leaderCollege"
                    type="text"
                    placeholder="Leader's College"
                    onChange={(e) => handle(e)}
                    value={form.curr_institution}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Branch"
                    onChange={(e) => handle(e)}
                    value={form.branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="gender"
                    id="leaderGender"
                    type="text"
                    placeholder="Leader's Gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="curr_semester"
                    id="leaderSem"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.curr_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    id="leaderProgramOfStudy"
                    type="text"
                    placeholder="Leader's Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader's Email"
                    onChange={(e) => handle(e)}
                    value={form.leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="leader_game_id"
                    id="P1Id"
                    type="text"
                    placeholder="Leader Game ID "
                    onChange={(e) => handle(e)}
                    value={form.leader_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="discord"
                    id="leaderDiscord"
                    type="text"
                    placeholder="Leader's Discord"
                    onChange={(e) => handle(e)}
                    value={form.discord}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_name"
                    id="member1Name"
                    type="text"
                    placeholder="Player 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.member1_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_email"
                    id="member1Email"
                    type="text"
                    placeholder="Player 2 Email"
                    onChange={(e) => handle(e)}
                    value={form.member1_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_game_id"
                    id="member1Id"
                    type="text"
                    placeholder="Player 2 Game ID"
                    onChange={(e) => handle(e)}
                    value={form.member1_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_branch"
                    id="member1Branch"
                    type="text"
                    placeholder="Player 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member1_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member1_sem"
                    id="member1Sem"
                    type="text"
                    placeholder="Player 2 Semester"
                    onChange={(e) => handle(e)}
                    value={form.member1_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_name"
                    id="member2Name"
                    type="text"
                    placeholder="Player 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.member2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_email"
                    id="member2Email"
                    type="text"
                    placeholder="Player 3 Email"
                    onChange={(e) => handle(e)}
                    value={form.member2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_game_id"
                    id="member2Id"
                    type="text"
                    placeholder="Player 3 Game ID"
                    onChange={(e) => handle(e)}
                    value={form.member2_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_branch"
                    id="member2Branch"
                    type="text"
                    placeholder="Player 3 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member2_sem"
                    id="member2Sem"
                    type="text"
                    placeholder="Player 3 Semester"
                    onChange={(e) => handle(e)}
                    value={form.member2_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_name"
                    id="member3Name"
                    type="text"
                    placeholder="Player 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.member3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_email"
                    id="member3Email"
                    type="text"
                    placeholder="Player 4 Email"
                    onChange={(e) => handle(e)}
                    value={form.member3_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_game_id"
                    id="member3Id"
                    type="text"
                    placeholder="Player 4 Game ID"
                    onChange={(e) => handle(e)}
                    value={form.member3_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_branch"
                    id="member3Branch"
                    type="text"
                    placeholder="Player 4 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member3_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member3_sem"
                    id="member3Sem"
                    type="text"
                    placeholder="Player 4 Semester"
                    onChange={(e) => handle(e)}
                    value={form.member3_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_name"
                    id="member4Name"
                    type="text"
                    placeholder="Player 5 Name"
                    onChange={(e) => handle(e)}
                    value={form.member4_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_email"
                    id="member4Email"
                    type="text"
                    placeholder="Player 5 Email"
                    onChange={(e) => handle(e)}
                    value={form.member4_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_game_id"
                    id="member4Id"
                    type="text"
                    placeholder="Player 5 Game ID"
                    onChange={(e) => handle(e)}
                    value={form.member4_game_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_branch"
                    id="member4Branch"
                    type="text"
                    placeholder="Player 5 Branch"
                    onChange={(e) => handle(e)}
                    value={form.member4_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="member4_sem"
                    id="member4Sem"
                    type="text"
                    placeholder="Player 5 Semester"
                    onChange={(e) => handle(e)}
                    value={form.member4_sem}
                  />
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
                <h3 className="metaportal_fn_countdown">Description</h3>
              </div>
              <div data-aos="fade-down" style={{marginBottom:"3rem"}} className="mint_info">
                <p>Valorant Gaming competition.</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>VALORANT TOURNAMENT</h4>
                <h3 className="metaportal_fn_countdown">Rules</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                ●	Team of 5 members
                </p>
                <p>
                ●	A total of 32 teams will be allowed at maximum to participate in the tournament.
                </p>
                <p>● Every match is elimination.</p>
                <p>● Three matches per team will be online, reducing the team pool to 32-16-8-4</p>
                <p>● These matches will be conducted prior through a Discord server</p>
                <p>● The semifinal and final between 4 and 2 teams respectively played offline</p>
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

export default ValorantForm;
