import React from 'react'
import AcademicUtility from '../Utilities/AcademicUtility'

export default function AcademicDetailComponent() {
    const academicUtility =AcademicUtility();
   
  return (
    <div className='Container'>
        <div className='Academic-Container' >
            <form>
            <h1>Academic Details</h1>
            <label htmlFor="InstitutionName">Institution Name</label>
          <input
            type="text"
            name="InstitutionName"
            id="InstitutionName"
            placeholder="Institution Name"
            autoComplete="off"
            maxLength={40}
             onChange={academicUtility.onInputChangeAcademic}
             value={academicUtility.Academicinfo.InstitutionName}
          />
          
          <label htmlFor="Degree">Degree </label>
          <select

            id="Degree"
            name="Degree"
            autoComplete="off"
          
              value={academicUtility.Academicinfo.Degree}
              onChange={academicUtility.onSelectFieldChangeAcademic}
            style={{ width: "100%", padding: "10px" }}
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
            name="StartYear"
            id="StartYear"
            placeholder="Start Year"
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
             value={academicUtility.Academicinfo.StartYear}
             style={{ width: "100%", padding: "10px" }}
          />
          <label htmlFor="EndYear">End Year</label>
          <input
            type="number"
            name="EndYear"
            id="EndYear"
            placeholder="End Year"
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.EndYear}
            style={{ width: "97%", padding: "10px" }}
          />
          
          <label htmlFor="Percentage">Percentage</label>
          <input
            type="number"
            name="Percentage"
            id="Percentage"
            placeholder="Percentage "
            autoComplete="off"
            maxLength={4}
            onChange={academicUtility.handelChangeNumberAcademic}
            value={academicUtility.Academicinfo.Percentage}
            style={{ width: "97%", padding: "10px" }}
          />
          <br></br>
          <br></br>
        <button  style={{ width: "100%", padding: "10px" }}
        onClick={academicUtility.onSaveAcademic}>Save</button>
        <br></br>
        
        <br></br>
        <button   style={{ width: "100%", padding: "10px" }}
         onClick={academicUtility.handelShowList}>ShowList</button>
            </form>
        </div>
     
    </div>
  )
}
