import React, { useState } from "react";
import "./addintellectualproperty.css";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../shared-components/navbar/NavBar";

const AddIntellectualProperty = () => {
  const initialPropertyState = {
    Title: "",
    OwnerofIP: "Jinnah University of Women",
    Address: "Jinnah University for Women, 5-C Nazimabad, 74600, Karachi.",
    FieldofTheInvention: "",
    BackgroundOfTheInvention: "", 
    DescriptionOfInvention: "",
    References: "",
    InventiveSteps: "",
  };

  const [addintellectualproperty, setIntellectualProperty] = useState(initialPropertyState);

  console.log(addintellectualproperty)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setIntellectualProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="addintelproperty-container">
      <Sidebar />
      <div className="addintelproperty">
        <div className="intelprop_navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div>
        {/* <div className="navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div> */}
        <div className="addintelproperty-card">
          <h3 className="addintelproperty_heading">
            Intellectual Property Form
          </h3>
          <div className="addintelproperty_multiInputFields">
            <div className="title-input">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Title"
                value={addintellectualproperty["Title"]}
                name="Title"
                onChange={handleChange}
              />
            </div>

            <div className="two-inputs">
              <div className="InputGroup">
                <label>Owner of IP:</label>
                <input
                  type="text"
                  value={addintellectualproperty["OwnerofIP"]}
                  name="OwnerofIP"
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="InputGroup">
                <label>Address:</label>
                <input
                  type="text"
                  value={addintellectualproperty["Address"]}
                  name="Address"
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>

            <div className="InputGroup">
              <label>Field of The Invention:</label>
              <textarea
                rows="3"
                value={addintellectualproperty["FieldofTheInvention"]}
                placeholder="(Not more than 50 words. Either it should describe your method of production or process or combination of both)"
                name="FieldofTheInvention"
                onChange={handleChange}
              />
            </div>
            <div className="InputGroup">
              <label>Background Of The Invention:</label>
              <textarea
                rows="5"
                value={addintellectualproperty["BackgroundOfTheInvention"]}
                placeholder="Approximately 800 words: (showing how your research is different and more useful than past research)"
                name="BackgroundOfTheInvention"
                onChange={handleChange}
              />
            </div>
            <div className="InputGroup">
              <label>Description Of Invention:</label>
              <textarea
                rows="4"
                value={addintellectualproperty["DescriptionOfInvention"]}
                placeholder="Approximately 250 words"
                name="DescriptionOfInvention"
                onChange={handleChange}
              />
            </div>
            <div className="InputGroup">
              <label>References:</label>
              <textarea
                rows="2"
                value={addintellectualproperty["References"]}
                name="References"
                placeholder="Not more than 10"
                onChange={handleChange}
              />
            </div>
            <div className="InputGroup">
              <label>Inventive Steps:</label>
              <textarea
                rows="4"
                value={addintellectualproperty["InventiveSteps"]}
                placeholder="Approximately 5-6 Bullet points"
                name="InventiveSteps"
                onChange={handleChange}
              />
            </div>

            <div className="AIP_save-btn">
              <button className="AIP_savebut">Save</button>
            </div>
          </div>
        </div>
        <div className="juw_copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default AddIntellectualProperty;
