import axios from "axios";
import React, { useEffect, useState } from "react";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styled from "styled-components";

const backend = keys.backend;

const AddButton = styled.button`
  background-color: green;
  color: white;
  padding: 5px 10px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: red;
  padding: 5px 15px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
    color: white;
  }
`;

const OpenMicForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const initialForm = {
    team_name: "",
    leader: {
      name: "",
      branch: "",
      program_of_study: "",
      semester: "",
      gender: "",
      whatsapp_number: "",
    },
    members: [],
  };  

  const [form, setForm] = useState(initialForm);
  const [token, setToken] = useState(null);
  const [isSubmitting, setSubmit] = useState(false);

  const handleChangeLeader = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      leader: {
        ...prev.leader,
        [name]: value,
      },
    }));
  };

  const handleAddMember = () => {
    setForm((prev) => ({
      ...prev,
      members: [
        ...prev.members,
        { name: "", branch: "", program_of_study: "", semester: "", gender: "", whatsapp_number: "" },
      ],
    }));
  };

  const handleRemoveMember = (index) => {
    setForm((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updatedMembers = [...prev.members];
      updatedMembers[index] = { ...updatedMembers[index], [name]: value };
      return { ...prev, members: updatedMembers };
    });
  };

  const validateForm = () => {
    if (form.members.length > 0 && !form.team_name.trim()) {
      alert("Team Name is required if there are additional members.");
      return false;
    }
    for (const [key, value] of Object.entries(form.leader)) {
      if (!value.trim()) {
        alert(`Leader's ${key.replace("_", " ")} is required.`);
        return false;
      }
    }
    for (let i = 0; i < form.members.length; i++) {
      const member = form.members[i];
      for (const [key, value] of Object.entries(member)) {
        if (!value.trim()) {
          alert(`Member ${i + 1}'s ${key.replace("_", " ")} is required.`);
          return false;
        }
      }
    }
    if (!/^\d{10}$/.test(form.leader.whatsapp_number)) {alert("Enter a valid 10-digit WhatsApp number for the Leader."); return false;}
    for (let i = 0; i < form.members.length; i++) {
      const member = form.members[i];
      if (!/^\d{10}$/.test(member.whatsapp_number)) {alert("Enter a valid 10-digit WhatsApp number for Member "+(i+1)); return false;}
    }
    return true;
  };

  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }

    if (!validateForm()) {
      alert("Please fill all required fields correctly");
      return;
    }

    setSubmit(true);

    try {
      const res = await axios.post(`${backend}/register?event=OpenMic`, form, {
        headers: { "Content-Type": "application/json" },
      });
      alert(res.data.message);
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message);
    }

    setSubmit(false);
  };

  return (
    <div className="metaportal_fn_mintpage" id="registration" style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}>
      <Title color={"Open"} noncolor={"Mic"} />
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
                    placeholder="Team Name (Optional)"
                    value={form.team_name}
                    onChange={(e) => setForm({ ...form, team_name: e.target.value })}
                  />
                </li>
                {/* Leader Details */}
                <h3>Leader Details</h3>
                {["name", "branch", "program_of_study", "semester", "gender", "whatsapp_number"].map((field) => (
                  <li data-aos="fade-down" key={field}>
                    <input
                      name={field}
                      type="text"
                      placeholder={`Leader ${capitalizeFirst(field.replace(/_/g, " "))}`}
                      value={form.leader[field]}
                      onChange={handleChangeLeader}
                    />
                  </li>
                ))}

                {/* Members Section */}
                <h3>Additional Members</h3>
                {form.members.map((member, index) => (
                  <div key={index}>
                    <h4>Member {index + 1}</h4>
                    {["name", "branch", "program_of_study", "semester", "gender", "whatsapp_number"].map((field) => (
                      <li data-aos="fade-down" key={`${field}-${index}`}>
                        <input
                          name={field}
                          type="text"
                          placeholder={`Member ${index + 1} ${capitalizeFirst(field.replace(/_/g, " "))}`}
                          value={member[field]}
                          onChange={(e) => handleMemberChange(index, e)}
                        />
                      </li>
                    ))}
                    <RemoveButton onClick={() => handleRemoveMember(index)}>Remove Member</RemoveButton>
                  </div>
                ))}
                <AddButton onClick={handleAddMember}>+ Add Member</AddButton>
              </ul>
            </div>

            <HCaptcha sitekey={keys.hcaptcha} onVerify={setToken} />
            <div className="mint_desc" style={{ paddingTop: "2rem" }}>
              {!isSubmitting ? (
                <div className="metaportal_fn_button" style={{ cursor: "pointer" }} onClick={submit} disabled={isSubmitting}>
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
                <h4>Open Mic</h4>
                <h3 className="metaportal_fn_countdown">Rules and Regulations</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>● No offensive/violent content should be presented</p>
                <p>● Participants will be giving their names on the spot</p>
                <p>● The participants will perform on a first come first serve manner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMicForm;
