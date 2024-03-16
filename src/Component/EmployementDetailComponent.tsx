import React from "react";
import EmployeeUtility from "../Utilities/EmployeeUtility";
import "../Style/Employee.css";

export default function EmployementDetailComponent() {
  const employeeUtility = EmployeeUtility();
  const { onInputChangeEmployee, handelChangeNumber } = employeeUtility;
  return (
    <div>
      <div className="employe-container">
        <form>
          <h1>Employee Details</h1>
          <label htmlFor="CompanyName">Current Company Name</label>
          <input
            type="text"
            name="CompanyName"
            id="CompanyName"
            placeholder="Company Name"
            autoComplete="off"
            maxLength={50}
            onChange={employeeUtility.onInputChangeEmployee}
            value={employeeUtility.Employeeinfo.CompanyName}
          />

          <label htmlFor="NoticePeriod">Notice Period</label>
          <input
            type="number"
            name="NoticePeriod"
            id="NoticePeriod"
            autoComplete="off"
            maxLength={2}
            onChange={employeeUtility.handelChangeNumber}
            value={employeeUtility.Employeeinfo.NoticePeriod}
          />

          <label htmlFor="ExpectedCTC">Expected CTC</label>
          <input
            type="number"
            name="ExpectedCTC"
            id="ExpectedCTC"
            autoComplete="off"
            maxLength={10}
            onChange={employeeUtility.handelChangeNumber}
            value={employeeUtility.Employeeinfo.ExpectedCTC}
          />

          <button onClick={employeeUtility.onSaveEmployee}>Submit</button>
          <br></br>
          <button onClick={employeeUtility.handelShowList}>ShowList</button>
        </form>
      </div>
    </div>
  );
}
