import React from "react";
import "../Style/Address.css"
import AddressUtility from "../Utilities/AddressUtility";


export default function AddressDetailComponent() {
  
  const addressUtility =  AddressUtility();


  return (
    <div className="Container">
      <div className="container-address">
        <form>
          <h1>Address Detail</h1>
          <label>Country</label>
          
          <select

            id="CountryId"
            name="CountryId"
             value={addressUtility.Addressinfo.CountryId}
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

            id="StateId"
            name="StateId"
             value={addressUtility.Addressinfo.StateId}
             onChange={addressUtility.onSelectFieldChangeAddress}
          >
            <option value={0}>---Select State----</option>
            <option value={1}>Maharashtra</option>
            <option value={2}>delhi</option>
            <option value={3}>Rajastan</option>
            <option value={4}>UP</option>
          </select>


          <br></br>
          <label>City</label>
          <input type="text" name="City" placeholder="City" maxLength={50}
          value={addressUtility.Addressinfo.City}
          onChange={addressUtility.onInputChangeAddress}
       
          autoComplete="off"></input>
          <label>Address</label>
          <textarea
            rows={5}
            cols={20}
            name="Address"
            id="Address"
            placeholder="Address"
            autoComplete="off"
            value={addressUtility.Addressinfo.Address}
             onChange={addressUtility.onTextAreaChangeAddress}
        
          ></textarea>
        <button onClick={addressUtility.onSaveAddress}>Save</button>
        <button onClick={addressUtility.handelShowList}>ShowList</button>
        </form>
      </div>
    </div>
  );
}
