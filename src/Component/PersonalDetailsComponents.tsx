import React from "react";
import PersonalInfoUtility from "../Utilities/PersonalUtitlity";
import { useParams } from "react-router-dom";

export default function PersonalDetailsComponents() {
  const { id = 0 } = useParams();
  const personalInfoUtility = PersonalInfoUtility(+id);

  return (
    <div className="Container">
      <div className="personal-Container">
        <div>
          <h1>Personal Details</h1>
          <label>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            maxLength={50}
            autoComplete="off"
            value={personalInfoUtility.personalinfo.firstName}
            onChange={personalInfoUtility.onInputChangePersonal}
           required
           ></input>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            maxLength={50}
            autoComplete="off"
            value={personalInfoUtility.personalinfo.lastName}
            onChange={personalInfoUtility.onInputChangePersonal}
            required
          ></input>
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="MobileNumber"
            maxLength={50}
            autoComplete="off"
            value={personalInfoUtility.personalinfo.mobileNumber}
            onChange={personalInfoUtility.onInputChangePersonal}
            required
          ></input>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            maxLength={50}
            autoComplete="off"
            value={personalInfoUtility.personalinfo.phoneNumber}
            onChange={personalInfoUtility.onInputChangePersonal}
            required
          ></input>
          <label>Description</label>
          <textarea
            rows={5}
            cols={20}
            placeholder="Description"
            name="description"
            autoComplete="off"
            value={personalInfoUtility.personalinfo.description}
            onChange={personalInfoUtility.onTextAreaChangePersonalDetails}
            required
            style={{ width: "97%", padding: "10px" ,border: '2px solid #1a1a1a' }}
          ></textarea>
          <br></br>
          <br></br>
          <button onClick={personalInfoUtility.handelSavePersonalInfo}>
            Save
          </button>
          <br></br>
          <button onClick={personalInfoUtility.handelShowList}>ShowList</button>
        </div>
      </div>
    </div>
  );
}
