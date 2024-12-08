import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import urls from "../keys.json";
import AOS from "aos";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import keys from "../keys.json";
import "aos/dist/aos.css";
import IGNITE_Template from "../assets/Ignite_Idea_Submission_Template/IGNITE_Template.pdf";
import IgniteLoader from "../layout/IgniteLoader";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AlertScreen from "../components/alertScreen";


const backend = urls.backend;

const IgniteForm = () => {
  useEffect(() => {
    AOS.init();
    console.log(cachedForm);
  }, []);

  const [memberCount, setMemberCount] = useState(0);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [memberPhoneNumberValidations, setMemberPhoneNumberValidations] =
    useState([true, true, true]);
  const [isnitrr, setisnitrr] = useState(null);
  const [emailError, setEmailError] = useState("");

  // const handleRadioChange = (event) => {
  //   setisnitrr(event.target.value === "Yes");
  //   set({ ...form, isnitrr: event.target.value });
  //   localStorage.setItem(
  //     "igniteForm",
  //     JSON.stringify({ ...form, isnitrr: event.target.value })
  //   );
  // };

  //Email handling
  const handleEmail = (event) => {
    const { name, value } = event.target;
    const updatedForm = { ...form, [name]: value };
    set(updatedForm);


    if (name.includes("email") && isnitrr && !value.endsWith("nitrr.ac.in")) {
      setEmailError("Email must be from @nitrr.ac.in domain.");
    } else {
      setEmailError("");
    }
  };

  // const [showAlert, setShowAlert] = useState(false);
  // const [alertType, setAlertType] = useState("error");
  // const [alertMessage, setAlertMessage] = useState("");
  const [alert, setAlert] = useState({
    message: '',
    show: false,
    type: 'error'
  });

  const handleCloseAlert = () => {
    setAlert({
      message:'',
      show:false,
      type:'error'
    })
  };

  // Retrieve the form from localStorage and normalize key names
let cachedForm = JSON.parse(localStorage.getItem("igniteForm")) || {
  isnitrr: "yes",
  team_name: "",
  College_name: "NIT Raipur",
  leader_name: "",
  leader_branch: "",
  leader_year: "First",
  leader_email: "",
  leader_whatsapp: "",
  member2_name: "",
  member2_branch: "",
  member2_year: "",
  member2_email: "",
  member2_whatsapp: "",
  member3_name: "",
  member3_branch: "",
  member3_year: "",
  member3_email: "",
  member3_whatsapp: "",
};

// Normalize keys to ensure lowercase consistency
    cachedForm = Object.keys(cachedForm).reduce((acc, key) => {
      acc[key.toLowerCase()] = cachedForm[key];
      return acc;
    }, {});

    // Now, cachedForm will have all lowercase keys


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
    if (memberCount < 2) {
      setMemberCount(memberCount + 1);
      localStorage.setItem("memberCount", memberCount + 1);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 0) {
      form[`Member${memberCount + 1}_name`] = "";
      form[`Member${memberCount + 1}_whatsapp`] = "";
      form[`Member${memberCount + 1}_email`] = "";
      form[`Member${memberCount + 1}_branch`] = "";
      form[`Member${memberCount + 1}_rollNo`] = "";
      form[`Member${memberCount + 1}_year`] = "";

      setMemberCount(memberCount - 1);
      localStorage.setItem("memberCount", memberCount - 1);
      localStorage.setItem("igniteForm", JSON.stringify(form));
    }
  };

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;

    // if (e.target.name === "Leader_whatsapp") {
    //   const phoneNumber = e.target.value;
    //   if (!/^\d{10}$/.test(phoneNumber)) {
    //     setPhoneNumberError("Enter a number of 10 digits only.");
    //   } else {
    //     setPhoneNumberError("");
    //   }
    // }

    // if (e.target.name.endsWith("whatsappno")) {
    //   const memberIndex = parseInt(e.target.name.match(/\d+/)[0]) - 1;
    //   const memberPhoneNumbers = [...memberPhoneNumberValidations];
    //   const memberPhoneNumber = e.target.value;

    //   memberPhoneNumbers[memberIndex] = /^\d{10}$/.test(memberPhoneNumber);
    //   setMemberPhoneNumberValidations(memberPhoneNumbers);
    // }

    set(update);
    localStorage.setItem("igniteForm", JSON.stringify(update));
  };

  const submit = async () => {
    // alert('Registrations will be open soon.');
    // return;
    if (!token) {
      // setAlertMessage("Human verification is mandatory");
      // setShowAlert(true);
      // setAlertType("error");
      setAlert({
        message: "Human verification is mandatory",
        show: true,
        type: "error"
      });
      return;
    }

    setSubmit(true);
    if (memberCount < 1) {
      // setAlertMessage("Minimum Team Size: 2");
      // setShowAlert(true);
      // setAlertType("error");
      setAlert({
        message: "Minimum Team Size: 2",
        show: true,
        type: "error"
      });
    } else if (memberPhoneNumberValidations.includes(false)) {
    } else {
      let condition1 =true&&
        form.isnitrr === "yes" &&
        form.team_name !== "" &&
        form.leader_name !== "" &&
        form.leader_email !== "" &&
        form.leader_year !== "" &&
        form.leader_whatsapp !== "" &&
        form.leader_branch !== "" &&
        form.member2_name !== "" &&
        form.member2_email !== "" &&
        form.member2_year !== "" &&
        form.member2_whatsapp !== "" &&
        form.member2_branch !== "" &&
        form.file;

      let isnitrrConditions =true;

      let condition2 = true;
      if (memberCount === 2) {
        condition2 =
          form.member3_email !== "" &&
          form.member3_name !== "" &&
          form.member3_whatsapp !== "" &&
          form.member3_year !== "" &&
          form.member3_branch !== "";
      }
      console.log(form);
      if (condition1 && condition2 && isnitrrConditions) {
        const formData = { ...form };
        if (formData.isnitrr === "yes") {
          delete formData.College_name;
        }
        try {
          const res = await axios.post(`${backend}/ignite-reg`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          // setAlertMessage(res.data.message);
          // setShowAlert(true);
          // setAlertType("success");
          setAlert({
            message: res.data.message,
            show: true,
            type: "success"
          });
        } catch (err) {
          console.error(err);
          // setAlertMessage(err.response.data.message);
          // setShowAlert(true);
          // setAlertType("error");
          setAlert({
            message: err.response.data.message,
            show: true,
            type: "error"
          });
        }
      } else {
        // setAlertMessage("Please fill all the necessary details correctly");
        // setShowAlert(true);
        // setAlertType("error");
        setAlert({
          message: "Please fill all the necessary details correctly",
          show: true,
          type: "error"
        });
      }
    }
    setSubmit(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("File size exceeds the 2MB limit. Please choose a smaller file.");
        return;
      }

      const newData = { ...form };
      newData["file"] = file;
      set(newData);
      setUploadedFileName(file.name);
    }
  };

  {
    /* Member Details */
  }
  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= memberCount; i++) {
      members.push(
        <div key={i}>
          <li>
            <input
              name={`member${i + 1}_name`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Name`}
              onChange={(e) => handle(e)}
              value={form[`member${i + 1}_name`]}
            />
          </li>

          <li>
            <input
              name={`member${i + 1}_branch`}
              className="memberName"
              type="text"
              placeholder={`Member ${i}'s Branch`}
              onChange={(e) => handle(e)}
              value={form[`member${i + 1}_branch`]}
            />
          </li>

          <li>
            <input
              name={`member${i + 1}_year`}
              className="memberName"
              type="text"
              placeholder={`Member ${i}'s Current Year`}
              onChange={(e) => handle(e)}
              value={form[`member${i + 1}_year`]}
            />
          </li>

          <li>
            <input
              name={`member${i + 1}_email`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Email ID`}
              onChange={(e) => handle(e)}
              value={form[`member${i + 1}_email`]}
            />
            {/* {emailError && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {emailError}
              </div>
            )} */}
            <span style={{ fontSize: "0.7rem" }}>
              {/* * If from NIT Raipur then use institute Email ID if you have one. */}
            </span>
          </li>

          {/* <li>
            <input
              name={`Member${i + 1}_rollNo`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Roll Number`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_rollNo`]}
            />
          </li> */}

          <li>
            <input
              name={`member${i + 1}_whatsapp`}
              className="memberNumber"
              type="text"
              placeholder={`Member ${i} Whatsapp Number`}
              onChange={(e) => handle(e)}
              value={form[`member${i + 1}_whatsapp`] || ""}  
            />
            <span style={{ fontSize: "0.7rem" }}>
              * Don't include +91 or 0.
            </span>
            {form[`member${i + 1}_whatsapp`] &&
              form[`member${i + 1}_whatsapp`].length !== 10 && (
                <p style={{ color: "red" }}>
                  Enter a number of 10 digits only.
                </p>
            )}
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
      style={{ zIndex: "0" }}
    >
      <AlertScreen
        message={alert.message}
        onClose={handleCloseAlert}
        showAlert={alert.show}
        type={alert.type}
      />
      <div
        className="container small centered-container"
        style={{ paddingTop: "3rem" }}
      >
        <div className="metaportal_fn_mintbox" style={{ maxWidth: "100%" }}>
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>

            {/* From NITRR or not */}
            <div style={{ paddingBottom: "1rem" }}>
              {/*{isnitrr && (
                <div style={{ paddingBottom: "1rem" }}>
                  <h3
                    className="metaportal_fn_countdown"
                    style={{ paddingBottom: "1rem" }}
                  >
                    To generate NITRR college email ID, go to:
                  </h3>
                  <Link
                    to="https://ldap.nitrr.ac.in/"
                    style={{ color: "lightblue" }}
                  >
                    https://ldap.nitrr.ac.in/
                  </Link>
                </div>
              )}*/}
              {/* <h3
                className="metaportal_fn_countdown"
                style={{ paddingBottom: "1rem" }}
              >
                Are You From NITRR?
              </h3> */}
              {/* <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <input
                    type="radio"
                    name="isnitrr"
                    value="Yes"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="yes" style={{ marginLeft: "0.5rem" }}>
                    Yes
                  </label>
                </li> */}

                {/* <span style={{ fontSize: "1rem" }}>
                  * If selected Yes, then only institute mail id accepted.
                </span> */}
                {/* <li style={{ marginBottom: "0.5rem" }}>
                  <input
                    type="radio"
                    name="isnitrr"
                    value="No"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="no" style={{ marginLeft: "0.5rem" }}>
                    No
                  </label>
                </li>

                <span style={{ fontSize: "1rem" }}>
                  * If selected No, then write your College Name and any type of
                  Email accepted.
                </span>
              </ul> */}
            </div>
            {/* Important Details */}
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
                {/* <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Problem_code"
                    placeholder="Problem Code"
                    onChange={(e) => handle(e)}
                    value={form.Problem_code}
                  />
                </li> */}
                {/* {!isnitrr && (
                  <li data-aos="fade-down">
                    <input
                      name="College_name"
                      id="collegeName"
                      type="text"
                      placeholder="College Name"
                      onChange={(e) => handle(e)}
                      value={form.College_name}
                    />
                  </li>
                )} */}
              </ul>

              {/* Team Leader Details */}
              <h3
                className="metaportal_fn_countdown"
                style={{ paddingBottom: "1rem" }}
              >
                Team Leader Details
              </h3>
              <ul>
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
                    name="leader_year"
                    id="leaderYear"
                    type="text"
                    placeholder="Leader Current Year"
                    onChange={(e) => handle(e)}
                    value={form.leader_year}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderEmail"
                    type="text"
                    name="leader_email"
                    placeholder="Leader Email ID"
                    onChange={(e) => handle(e)}
                    value={form.leader_email}
                  />
                  {/* {emailError && (
                    <div style={{ color: "red", marginTop: "0.5rem" }}>
                      {emailError}
                    </div>
                  )} */}
                  <span style={{ fontSize: "0.7rem" }}>
                    {" "}
                    *  Use institute Email ID if you have
                    one.
                  </span>
                </li>

                {/* <li data-aos="fade-down">
                  <input
                    name="Leader_rollNo"
                    id="rollNumber"
                    type="text"
                    placeholder="Leader Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.Leader_rollNo}
                  />
                </li> */}
                <li data-aos="fade-down">
                <input
                  id="leaderNumber"
                  type="text"
                  name="leader_whatsapp"
                  placeholder="Leader Whatsapp Number"
                  onChange={(e) => handle(e)}
                  value={form.leader_whatsapp || ""}  
                />
                <span style={{ fontSize: "0.7rem" }}>
                  * Don't include +91 or 0.
                </span>
                {form.leader_whatsapp && form.leader_whatsapp.length !== 10 && (
                  <p style={{ color: "red" }}>
                    Enter a number of 10 digits only.
                  </p>
                )}
              </li>

              </ul>
              <h3
                className="metaportal_fn_countdown"
                style={{ paddingBottom: "1rem" }}
              >
                Member Details
              </h3>
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
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                htmlFor="file-input"
              >
                <span className="metaportal_fn_button_2">
                  Upload Idea Submission PPT
                </span>
                {uploadedFileName && (
                  <p style={{ color: "white", paddingTop: "1rem" }}>
                    Uploaded File: {uploadedFileName}
                  </p>
                )}
              </label>
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
            <div className="mint_desc" style={{ paddingTop: "3rem" }}>
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
                <IgniteLoader />
              )}
              {/* <p>* Read the Rules & Regulations before Submitting</p> */}
            </div>
          </div>
          <div className="mint_right" style={{width:"100%"}}>
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Vigyaan Ignite</h4>
                <h3 className="metaportal_fn_countdown">
                  ELIGIBILITY
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p> Only first-year [2028 Batch] students from NIT Raipur. </p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN IGNITE</h4>
                <h3 className="metaportal_fn_countdown">RULES</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>▪ A team can have 2-3 members (including team leader). </p>
                <p>
                ▪ Each team must designate a team leader and select a team name. 
                </p>
                <p>▪ Teams may consist of members from different departments, provided all are students of NIT Raipur. </p>
                <p>▪ Each participant can only be a part of one team.</p>
                <p>▪ Multiple entries are not allowed.</p>
              </div>

              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN IGNITE</h4>
                <h3 className="metaportal_fn_countdown">GUIDELINES</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>▪ Identify any real-world problem, its impact, and propose relevant solutions. Students from any 
                academic stream can submit their issues along with their innovative solutions.</p>
                <p>
                ▪ Judges will evaluate based on the problem's severity, the solution's significance, and the 
                product's scalability. 
                </p>
                <p>▪ Plagiarism is strictly prohibited, and any plagiarized submissions will result in disqualification. </p>
                <p>▪ Each round will be an eliminatory round. </p>
              </div>

              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN IGNITE</h4>
                <h3 className="metaportal_fn_countdown">STRUCTURE</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p> Round 1 (Registration + Idea submission) ➜ Round 2 ➜ Round 3 ➜ VIGYAAN Exhibition </p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN </h4>
                <h3 className="metaportal_fn_countdown">ROUNDS</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  <div style={{ color: "white" }}>
                    Round 1: Idea Submission Round
                  </div>
                  <p>
                  ▪  Create a concise and effective presentation for the idea
                    submission round.
                  </p>
                  <p>
                  ▪  Teams must strictly adhere to the provided template
                    without making any modifications. Refer to the template for
                    additional details.
                  </p>
                  <p>▪  File type: .ppt, .pptx or PDF</p>
                  <p>
                  ▪  Document Name: team_name
                  </p>
                </p>
                <p>
                  <div style={{ color: "white" }}>
                    Round 2: Presentation Round
                  </div>
                  <p>
                  ▪  Selected teams are required to present their project in
                    front of concerned faculty in-charge.
                  </p>
                  <p>
                  ▪  You will have 10-15 minutes to present, followed by a Q&A
                    session with the judges.
                  </p>
                  <p>▪  File type: .ppt, .pptx or PDF</p>
                  
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 3: Prototype Round</div>
                  <p>
                  ▪  Shortlisted teams will need to develop a functional
                    prototype based on their proposed approach, ensuring that
                    the prototype demonstrates core features and functionalities
                    effectively.
                  </p>
                  
                </p>
              </div>
              
            </div>

            <div
              data-aos="fade-down"
              style={{ paddingTop: "2rem" }}
              className="mint_time"
            >
              <h4>VIGYAAN</h4>
              <h3 className="metaportal_fn_countdown">
                EVALUATION CRITERIA
              </h3>
            </div>
            <div data-aos="fade-down" className="mint_info" >
             <p>
             Relevance, feasibility and practical significance of the problem.
             </p>
            </div>
            
            <div
              data-aos="fade-down"
              style={{ paddingTop: "2rem" }}
              className="mint_time"
            >
             <a style={{ textDecoration: "none" }} href={IGNITE_Template}>
                <span className="metaportal_fn_button_4">
                  Idea Submission Template
                </span>
              </a>
            </div>
            
            <div
              data-aos="fade-down"
              style={{ paddingTop: "2rem" }}
              className="mint_time"
            >
              <h4>VIGYAAN</h4>
              <h3 className="metaportal_fn_countdown">
                Certificates & REWARDS
              </h3>
            </div>
            <div data-aos="fade-down" className="mint_info">
              <p>▪ Prizes will be awarded to the top teams based on the evaluation criteria. </p>
              <p>
              ▪ A digital Certificate of Appreciation will be awarded to all teams who presented their project 
              in the VIGYAAN Exhibition. 
              </p>
            </div>
          </div>
        </div>

        <div className="metaportal_fn_nft_cats">
          <ul data-aos="fade-down">
            {/* <li>
              <div className="item">
                <h4 className="parent_category">9th & 10th September</h4>
                <h3 className="child_category" title="Black Yukata">
                  Presentation Round (Expected)
                </h3>
              </div>
            </li> */}
            {/* <li>
              <div className="item">
                <h4 className="parent_category">15th & 16th October</h4>
                <h3 className="child_category" title="Daydreaming">
                  Prototype Round (Expected)
                </h3>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IgniteForm;