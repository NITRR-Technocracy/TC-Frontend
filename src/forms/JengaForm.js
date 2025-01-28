import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const JengaForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("jenga")) || {
    name: "",
    email: "",
    whatsapp: "",
    college: "",
    branch: "",
    yog: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("jenga", JSON.stringify(update));
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
      form.name !== "" &&
      form.email !== "" &&
      form.whatsapp !== "" &&
      form.college !== "" &&
      form.branch !== "" &&
      form.yog !== "" &&
      form.whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`${backend}/register?event=Jenga`, form, {
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
      <Title color={"Jenga"} noncolor={""} />
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
                    id="Name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={(e) => handle(e)}
                    value={form.name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handle(e)}
                    value={form.email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="Number"
                    type="text"
                    name="whatsapp"
                    placeholder="Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem",color:"white"}}>
                    * Don't include +91 or 0.
                  </span>
                  {
                    form.whatsapp.length>10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="college"
                    id="Branch"
                    type="text"
                    placeholder="College"
                    onChange={(e) => handle(e)}
                    value={form.college}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="branch"
                    id="Branch"
                    type="text"
                    placeholder="Branch"
                    onChange={(e) => handle(e)}
                    value={form.branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="yog"
                    id="Yog"
                    type="text"
                    placeholder="Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.yog}
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
                <h4>Jenga</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                   Classic wooden jenga game competition.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Jenga</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. A classic Jenga game consists of 54 wooden blocks.
                     All of the blocks should be stacked in groups of three,
                     next to one another along their long sides and at a 
                     right angle to the level below.
                </p>
                <p>
                  2. Take one block from any level of the tower, except the
                     one below the incomplete top level. Place the wooden block
                     at the topmost level to complete it. Players must use only 
                     one hand at a time to touch the tower.
                </p>
                <p>
                  3. Players may tap any block to find loose one. The turn of 
                     the player ends after 10 seconds or when the next player 
                     touches the tower, whichever occurs first.
                </p>
                <p>
                  4. The game ends when the tower falls completely, or if any
                     block falls from the tower.
                </p>
                <p>
                  5. Loser is the player who make the tower fall i.e., whose turn
                     it was when the tower fell.
                </p>               
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JengaForm;
