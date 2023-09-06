import axios from "axios";
import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import urls from "../urls.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

const backend = urls.backend

const VigyaanForm = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [memberCount, setMemberCount] = useState(0);
  const [form, set] = useState({
    Team_name: "",
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    College: "",
    Leader_branch: "",
    Leader_yog: "",
    Member2_name: "",
    Member2_email: "",
    Member2_yog: "",
    Member2_whatsapp: "",
    Member2_branch: "",
    Member3_name: "",
    Member3_email: "",
    Member3_yog: "",
    Member3_whatsapp: "",
    Member3_branch: "",
    Problem_code: "",
    file: null,
  });
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handleAddMember = () => {
    if (memberCount < 2) {
      setMemberCount(memberCount + 1);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 0) {
      setMemberCount(memberCount - 1);
    }
  };

  const handle = (e) => {
    const update = { ...form }
    update[e.target.name] = e.target.value
    set(update)
  }

  const submit = async () => {
    setSubmit(true)
    console.log(form)
    if (memberCount < 1) {
      alert("Minimum Team Size: 2")
    }
    else {
      let condition1 = form.Team_name !== "" && form.Leader_name !== "" && form.Leader_email !== "" && form.Leader_whatsapp !== "" && form.College !== "" && form.Leader_yog !== "" && form.Leader_branch !== "" && form.Member2_name !== "" && form.Member2_email !== "" && form.Member2_yog !== "" && form.Member2_whatsapp !== "" && form.Member2_branch !== "" && form.Problem_code !== "" && form.file;

      let condition2 = true
      if (memberCount == 2) condition2 = form.Member3_email !== "" && form.Member3_name !== "" && form.Member3_whatsapp !== "" && form.Member3_whatsapp !== "" && form.Member3_yog !== "" && form.Member3_branch !== "";

      if (condition1 && condition2) {
        try {
          const res = await axios.post(`${backend}/vigyaanReg`, form, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
          alert(res.data.message)
        }
        catch (err) {
          console.error(err)
          alert(err.reponse.data.message)
        }
      }
      else {
        alert("Please fill all the necessary details")
      }
    }
    setSubmit(false)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newData = { ...form };
      newData["file"] = file;
      set(newData);
      setUploadedFileName(file.name);
    }
  };

  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= memberCount; i++) {
      members.push(
        <div key={i}>
          <li>
            <input
              name={`Member${i + 1}_name`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Name`}
              onChange={(e) => handle(e)}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_whatsapp`}
              className="memberNumber"
              type="text"
              placeholder={`Member ${i} Whatsapp Number`}
              onChange={(e) => handle(e)}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_email`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Email ID`}
              onChange={(e) => handle(e)}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_branch`}
              className="memberName"
              type="text"
              placeholder={`Member ${i}'s Branch`}
              onChange={(e) => handle(e)}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_yog`}
              className="memberName"
              type="text"
              placeholder={`Member ${i}'s year of graduation`}
              onChange={(e) => handle(e)}
            />
          </li>
        </div>
      );
    }
    return members;
  };

  return (
    <div className="metaportal_fn_mintpage" id="registration" style={{position:"relative",zIndex:"0"}}>
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                <li data-aos="fade-down">
                  <input name="Team_name" id="teamName" type="text" placeholder="Team Name" onChange={(e) => handle(e)} />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Problem_code"
                    placeholder="Problem Code"
                    onChange={(e) => handle(e)}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Leader_name"
                    placeholder="Your Leader Name"
                    onChange={(e) => handle(e)}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Leader_whatsapp"
                    placeholder="Your Leader Whatsapp Number"
                    onChange={(e) => handle(e)}
                  />
                  <span style={{fontSize : "0.7rem"}}>* Don't include +91 or 0.</span>
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderEmail"
                    type="text"
                    name="Leader_email"
                    placeholder="Your Leader Email ID"
                    onChange={(e) => handle(e)}
                  />
                </li>
                {/* <li>
                  <input
                    id="teamSize"
                    type="text"
                    placeholder="Team Size (Max 3)"
                  />
                </li> */}
                <li data-aos="fade-down">
                  <input
                    name="College"
                    id="collegeName"
                    type="text"
                    placeholder="College Name"
                    onChange={(e) => handle(e)}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Branch"
                    onChange={(e) => handle(e)}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_yog"
                    id="leaderYog"
                    type="text"
                    placeholder="Leader's year of graduation"
                    onChange={(e) => handle(e)}
                  />
                </li>
                {renderMemberFields()}
                <li data-aos="fade-down"
                  style={{
                    padding: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0"
                  }}
                >
                  {memberCount < 2 && (
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
              <input
                accept="application/pdf"
                style={{ display: "none" }}
                id="file-input"
                type="file"
                onChange={handleFileChange}
              />
              <label style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} htmlFor="file-input">
                <span className="metaportal_fn_button_2">Upload Your Abstract</span>
                {uploadedFileName && (
                  <p style={{ color: "white", paddingTop: "1rem" }}>Uploaded File: {uploadedFileName}</p>
                )}
              </label>
            </div>
            <div className="mint_desc" style={{ paddingTop: "4rem", }}>
              {!isSubmitting ?
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
                :
                <>Submitting...</>
              }
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Vigyaan</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. A team can have 2 to 3 members.</p>
                <p>
                  2. Each and every team is expected to have a Name and a Team
                  Leader
                </p>
                <p>
                  3. A maximum of 30% plagiarism is permitted in the abstract
                  submission. If more, then the respective team will be
                  eliminated.
                </p>
                <p>4. A team can opt for only one problem statement.</p>
              </div>
              <div data-aos="fade-down" style={{ paddingTop: "2rem" }} className="mint_time">
                <h4>VIGYAAN</h4>
                <h3 className="metaportal_fn_countdown">PROCEDURES</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  The procedure to conduct Vigyaan ensures that only the most
                  excellent, unique and original ideas are selected.
                </p>
                <p>
                  Problem Statements for each branch are posted . Irrespective
                  of their branch, contestants are free to choose any of the
                  problem statements.
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 1 :</div> In this round,
                  the contestants have to submit a blueprint or an overview and
                  concept of their project idea in around 200-300 words before
                  the deadline.
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 2 :</div>Round 2 will
                  begin after the teams have been narrowed down based on their
                  abstracts presented .Here the contestants will have to
                  illustrate the working of their project with the help of a
                  PowerPoint presentation.
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 3 :</div>Round 3 is the
                  prototype round.Here the teams will bring a working prototype
                  that they will present on the exhibition day.
                </p>
              </div>
              <span className="metaportal_fn_button_4">Sample Abstract</span>
            </div>
          </div>
        </div>
        <div className="metaportal_fn_nft_cats">
          <ul data-aos="fade-down">
            <li>
              <div className="item">
                <h4 className="parent_category">10th September</h4>
                <h3 className="child_category" title="Black Yukata">
                  Reg & Abstract Submission
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="parent_category">7th & 28th September</h4>
                <h3 className="child_category" title="Daydreaming">
                  Presentation Round
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="parent_category">23rd October(Tentative)</h4>
                <h3 className="child_category" title="Fireflies, Smoke">
                  Prototype Round
                </h3>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default VigyaanForm;
