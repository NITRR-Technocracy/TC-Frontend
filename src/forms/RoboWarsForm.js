import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import urls from "../keys.json";
import AOS from "aos";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import keys from "../keys.json";
import "aos/dist/aos.css";
import Title from "../components/Title";

const backend = urls.backend;

const RoboWarsForm = () => {
  useEffect(() => {
    AOS.init();
    console.log(cachedForm);
  }, []);

  const [memberCount, setMemberCount] = useState(0);

  const cachedForm = JSON.parse(localStorage.getItem("roboWarsForm")) || {
    team_name: "",
    leader_name: "",
    gender: "",
    email: "",
    curr_institution: "",
    whatsapp_number: "",
    program_of_study: "",
    leader_branch: "",
    leader_sem: "",
    member1_name: "",
    member1_email: "",
    member1_branch: "",
    member1_sem: "",
    member2_name: "",
    member2_email: "",
    member2_branch: "",
    member2_sem: "",
    member3_name: "",
    member3_email: "",
    member3_branch: "",
    member3_sem: "",
    member4_name: "",
    member4_email: "",
    member4_branch: "",
    member4_sem: "",
  };

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem("memberCount")) || 0;
    setMemberCount(tmp);
  });

  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  const handleAddMember = () => {
    if (memberCount < 4) {
      setMemberCount(memberCount + 1);
      localStorage.setItem("memberCount", memberCount + 1);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 0) {
      form[`Member${memberCount + 1}_name`] = "";
      form[`Member${memberCount + 1}_email`] = "";
      form[`Member${memberCount + 1}_branch`] = "";
      form[`Member${memberCount + 1}_sem`] = "";

      setMemberCount(memberCount - 1);
      localStorage.setItem("memberCount", memberCount - 1);
      localStorage.setItem("roboWarsForm", JSON.stringify(form));
    }
  };

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("roboWarsForm", JSON.stringify(update));
  };

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }

    setSubmit(true);
    if (memberCount < 2) {
      alert("Minimum Team Size: 3");
    } else {
      let condition1 =
        form.team_name !== "" &&
        form.leader_name !== "" &&
        form.email !== "" &&
        form.gender !== "" &&
        form.curr_institution !== "" &&
        form.whatsapp_number !== "" &&
        form.leader_branch !== "" &&
        form.leader_sem !== "" &&
        form.program_of_study !== "" &&
        form.member1_name !== "" &&
        form.member1_email !== "" &&
        form.member1_sem !== "" &&
        form.member1_branch !== "" &&
        form.member2_name !== "" &&
        form.member2_email !== "" &&
        form.member2_sem !== "" &&
        form.member2_branch !== ""

      let condition2 = true;
      if (memberCount > 2) {
        condition2 =
        form.member3_name !== "" &&
        form.member3_email !== "" &&
        form.member3_sem !== "" &&
        form.member3_branch !== ""
      }

      let condition3 = true;
      if (memberCount > 3) {
        condition3 =
        form.member3_name !== "" &&
        form.member3_email !== "" &&
        form.member3_sem !== "" &&
        form.member3_branch !== ""
      }

      if (condition1 && condition2 && condition3) {
        const formData = { ...form };
        if (formData.isNITRR === "Yes") {
          delete formData.College_name;
        }
        try {
          const res = await axios.post(`${backend}/register?event=RoboWars`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    
        } catch (err) {
          console.error(err);
          alert(err.response.data.message);
        }
      } else {
        alert("Please fill all the necessary details correctly!!");
      }
    }
    setSubmit(false);
  }; 

  {
    /* Member Details */
  }
  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= memberCount; i++) {
      members.push(
        <div style={{width: "100%"}} key={i}>
          <li>
            <input
              name={`member${i}_name`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1} Name`}
              onChange={(e) => handle(e)}
              value={form[`member${i}_name`]}
            />
          </li>
          <li>
            <input
              name={`Member${i}_email`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1} Email ID`}
              onChange={(e) => handle(e)}
              value={form[`Member${i}_email`]}
            />
            
          </li>
          <li>
            <input
              name={`Member${i}_branch`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1}'s Branch`}
              onChange={(e) => handle(e)}
              value={form[`Member${i}_branch`]}
            />
          </li>

          <li>
            <input
              name={`Member${i}_sem`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1}'s Semester`}
              onChange={(e) => handle(e)}
              value={form[`Member${i}_sem`]}
            />
          </li>
        </div>
      );
    }
    return members;
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"ROBO WARS"} noncolor={""} />
      <div
        className="container small centered-container"
        style={{ paddingTop: "3rem" }}
      >
        <div className="metaportal_fn_mintbox" style={{ maxWidth: "100%" }}>
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
                
              </ul>
              {/* Team Leader Details */}
              
              <ul>
                <li data-aos="fade-down">
                  <input
                    name="leader_name"
                    id="leaderName"
                    type="text"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.leader_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="gender"
                    id="gender"
                    type="text"
                    placeholder="Leader Gender"
                    onChange={(e) => handle(e)}
                    value={form.gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="whatsapp_number"
                    id="WhatsappNumber"
                    type="text"
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
                    name="email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader Email ID"
                    onChange={(e) => handle(e)}
                    value={form.email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="curr_institution"
                    id="currInstitution"
                    type="text"
                    placeholder="Leader Current Institution"
                    onChange={(e) => handle(e)}
                    value={form.curr_institution}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program_of_study"
                    id="programOfStudy"
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
                    id="leaderSem"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.leader_sem}
                  />
                </li>
                
              </ul>
              
              <ul>
                {/* Member's Field*/}
                {renderMemberFields()}
                <li
                  data-aos="fade-down"
                  style={{
                    padding: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0",
                  }}
                >
                  {memberCount < 6 && (
                    <li className="add-remove" onClick={handleAddMember}>
                      + Add Member
                    </li>
                  )}
                  {memberCount > 0 && (
                    <li className="add-remove" onClick={handleRemoveMember}>
                      - Remove
                    </li>
                  )}
                </li>
              </ul>
              
            </div>
            <div className="hcap" style={{ paddingTop: "3rem" }}>
              <HCaptcha
                sitekey={keys.hcaptcha}
                onClick={onLoad}
                onVerify={setToken}
                ref={captchaRef}
                className="custom-captcha"
              />
            </div>
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
                <h4>Robo Wars</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>A fun and exhilarating event, where participants will bring their own small robots for an epic death match.</p>
              </div>
              <div style={{paddingTop: "2rem"}} data-aos="fade-down" className="mint_time">
                <h4>Robo Wars</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. Each team will consist of 3-5 members each.</p>
                <p>
                  2. Specifications need to be decided, which the teams should follow.
                </p>
                <p>
                  3. An elimination setup will be made where teams will proceed to the next round after defeating their current opponent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboWarsForm;
