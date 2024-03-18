import React from "react";
import "../Style/Address.css"
import AddressUtility from "../Utilities/AddressUtility";
import { useParams } from "react-router-dom";


export default function AddressDetailComponent() {
  
  const {id=0} = useParams();
  const addressUtility =  AddressUtility(+id);

  return (

    <div className="Container">
      <div className="container-address">
        <form>
          <h1>Address Detail</h1>
          <label>Country</label>
          
          <select
         id="countryId"
            name="countryId"
             value={addressUtility.Addressinfo.countryId}
             onChange={addressUtility.onSelectFieldChangeAddress}
          >
            <option value={0}>---Select Country----</option>
            <option value={1}>India</option>
            <option value={2}>USA</option>
            <option value={3}>Japan</option>
            <option value={4}>Canada</option>
          </select>
          <br></br>
          <label>State</label>
          
          <select
           id="stateId"
            name="stateId"
             value={addressUtility.Addressinfo.stateId}
             onChange={addressUtility.onSelectFieldChangeAddress}
          >
           <option value={0}>---Select State----</option>
            <option value={4}>Maharashtra</option>
            <option value={2}>Rajastan</option>
            <option value={3}>California</option>
            <option value={7}>New York</option>
            <option value={5}>Tokyo</option>
            <option value={6}>Columbia</option>
          </select>

          <br></br>
          <label>City</label>
          <input type="text" id ="city" name="city" placeholder="City" maxLength={50}
          value={addressUtility.Addressinfo.city}
          onChange={addressUtility.onInputChangeAddress}
       
          autoComplete="off"></input>
          <label>Address</label>
          <textarea
            rows={5}
            cols={20}
            name="address"
            id="Address"
            placeholder="address"
            autoComplete="off"
            value={addressUtility.Addressinfo.address}
             onChange={addressUtility.onTextAreaChangeAddress}
        
          ></textarea>
        <button onClick={addressUtility.onSaveAddress}>Save</button>
        <button onClick={addressUtility.handelShowList}>ShowList</button>
        </form>
      </div>
    </div>
  );
}
