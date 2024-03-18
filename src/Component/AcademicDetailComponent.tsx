import React, { useState } from "react";
import AcademicUtility from "../Utilities/AcademicUtility";
import { useNavigate, useParams } from "react-router-dom";

export default function AcademicDetailComponent() {
    const { id = "0" } = useParams<{ id: string }>();
  
  const academicUtility = AcademicUtility(+id);

 
  return (
    <div className="Container">
      <div className="Academic-Container" >
        <div>
          <h1>Academic Details</h1>
          <label htmlFor="institutionName">Institution Name</label>
          <input
            type="text"
            name="institutionName"
            id="institutionName"
            placeholder="Institution Name"
            autoComplete="off"
            maxLength={40}
            onChange={academicUtility.onInputChangeAcademic}
            value={academicUtility.Academicinfo.institutionName}
          />
         {academicUtility.errors.institutionName && <p className="error-message">{academicUtility.errors.institutionName}</p>}
          <label htmlFor="Degree">Degree </label>
          <select
            id="degree"
            name="degree"
            autoComplete="off"
            value={academicUtility.Academicinfo.degree}
            onChange={academicUtility.onSelectFieldChangeAcademic}
            style={{ width: "100%", padding: "10px",border: '2px solid #1a1a1a' }}
            // style={{ border: '1px solid #949492' }}
          >
            <option value={0}>---Select Degree----</option>
            <option value={1}>Bachlores of Engineering (B.E)</option>
            <option value={2}>Bachlor of Science (BSC)</option>
            <option value={4}>Bachlor of Arts (BA)</option>
            <option value={3}>Bachlor of Commerce (B.com)</option>
            <option value={5}>Other</option>
          </select>
          <label htmlFor="StartYear">Start Year</label>
          <input
            type="number"
            name="startYear"
            id="startYear"
            placeholder="Start Year"
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.startYear}
            style={{ width: "97%", padding: "10px", border: '2px solid #1a1a1a' }}
          />
           {academicUtility.errors.startYear && <p className="error-message">{academicUtility.errors.startYear}</p>}
          
          <label htmlFor="EndYear">End Year</label>
          <input
            type="number"
            name="endYear"
            id="endYear"
            placeholder="End Year"
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.endYear}
            style={{ width: "97%", padding: "10px" ,border: '2px solid #1a1a1a' }}
          />
           {academicUtility.errors.endYear && <p className="error-message">{academicUtility.errors.endYear}</p>}

          <label htmlFor="Percentage">Percentage</label>
          <input
            type="number"
            name="percentage"
            id="percentage"
            placeholder="Percentage "
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.percentage}
            style={{ width: "97%", padding: "10px" ,border: '2px solid #1a1a1a' }}
          />
           {academicUtility.errors.percentage && <p className="error-message">{academicUtility.errors.percentage}
           </p>}
          <br></br>
          <br></br>
          <br></br>
          <button
            style={{ width: "97%", padding: "10px" }}
            onClick={academicUtility.onSaveAcademic}
          >
            Save
          </button>
          <br></br>

         
          <button
            style={{ width: "97%", padding: "10px" }}
            onClick={academicUtility.handelShowList}
          >
            ShowList
          </button>
        </div>
      </div>
    </div>
  );
}
