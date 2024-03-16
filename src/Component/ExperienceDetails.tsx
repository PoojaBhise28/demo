import React from 'react'
import ExperienceUtility from '../Utilities/ExperienceUtility';

export default function ExperienceDetailsComponent() {
  
  const experienceUtility =ExperienceUtility();
  
  return (
    <div className='Container'>
      <div className='Experience-container'></div>
      <form>
        <h1>Experience Details</h1>
        <label htmlFor="CompanyName">Company Name</label>
          <input
            type="text"
            name="CompanyName"
            id="CompanyName"
            placeholder="Company Name"
            autoComplete="off"
            maxLength={50}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.CompanyName}
          />
           <label htmlFor="StartYear">Start Year</label>
          <input
            type="number"
            name="StartYear"
            id="StartYear"
            placeholder="Start Year"
            autoComplete="off"
            maxLength={4}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.StartYear}
             style={{ width: "97%", padding: "10px" }}
         />
          <label htmlFor="EndYear">End Year</label>
          <input
            type="number"
            name="EndYear"
            id="EndYear"
            placeholder="End Year"
            autoComplete="off"
            maxLength={4}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.EndYear}
             style={{ width: "97%", padding: "10px" }}
          />
        
          <label htmlFor="DesignationId">DesignationId</label>
          <input
            type="text"
            name="DesignationId"
            id="DesignationId"
            placeholder="Designation Id"
            autoComplete="off"
            maxLength={4}
            onChange={experienceUtility.onInputChangeExperience}
             value={experienceUtility.Experienceinfo.DesignationId}
            
          />

        <button  style={{ width: "97%", padding: "10px" }}
         onClick={experienceUtility.onSaveExperience}>Submit</button>
          <br></br>
          <br></br>
          <button style={{ width: "97%", padding: "10px" }} 
          onClick={experienceUtility.handelShowList}>ShowList</button>
      </form>
    </div>
  )
}
