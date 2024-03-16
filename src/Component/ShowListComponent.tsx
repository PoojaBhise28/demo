// import React, { useState, useEffect } from 'react';
import { useEffect, useState } from "react";
import PersonalModel from "../Model/PersonalModel";
import {   DeletePersonInfoAsync, DeletePersonalInfoById, GetPersonInfoAsync, getPersonalInfoById } from "../Services/PersonalInfoServices";
import { useNavigate, useParams } from "react-router-dom";

const Fetch = () => {
 

  const [personalinfo, setPersonalinfo] = useState<PersonalModel[]>([]);
  const navigatetoPersonalDetails = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:5203/api/personalInfo`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setPersonalinfo(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await GetPersonInfoAsync(3);
      //const response = await getPersonalInfoById(13);
      alert(JSON.stringify(response));
      alert(JSON.stringify(response.data));
      setPersonalinfo(response.data);
    }
    fetchMyAPI();
  }, []);

  const handelUpdateData = (id: number) => {
    // const selectedUser = userInfo.find(user => user.userId === id);
    // setRowData(selectedUser || null);
    navigatetoPersonalDetails("/PersonalDetails/" + id);
  };

  const handelDelete = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
        await DeletePersonInfoAsync(id);
        alert("User deleted successfully!");
     
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };

    
  return (
    <div className="show-container">
      <h1>Personal Data</h1>
      <table className="contact-list">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Mobile Number</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {personalinfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.description}</td>
              <td>
                <button type="button" onClick={() => handelUpdateData(data.id)}>
                  {/* <button type="button" onClick={() => handelUpdateData(data)}> */}
                  Edit
                </button>
              </td>
              <td>
                <button type="button" onClick={() => handelDelete(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {rowData && <PersonalInformation rowData = {rowData}/>} */}
    </div>
  );
}

export default Fetch;
