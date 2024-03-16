import axios from "axios";
import ResponseModel from "../Model/ResponseModel";

import AddressModel from "../Model/AddressModel";




export const CreateAddressInfo = async (Addressinfo: AddressModel): Promise<ResponseModel> => {
  
  alert("service");
  console.log("services");
  let result: ResponseModel = { error: "", data: null, message: "", errorCode: "" };
  

   await axios
    .post(`http://localhost:5203/api/addressinfo`, Addressinfo)
    
    .then(function (response) {
      console.log(response);
       alert(JSON.stringify(response));
       result.data = response.data;
       result.errorCode = response.status + "";
    })
    .catch(function (error) {
      alert(JSON.stringify(error));
      console.log(error);
   
      if (error.response) {
        console.log("1");

        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //return { error: error.response.data, message  : "", errorCode: error.response.status };
        alert(JSON.stringify(error.response.data.errors));
        result.error = error.response.data.error;
        result.errorCode = error.response.status;
        result.message = error.message;

      } else if (error.request) {
        console.log("2");
        // The request was made but no response was received
        //return { error: "No response received from server", message  : "", errorCode: error.response.status  };
        result.data= error.message.data
        alert(result.data);
        console.log(result.data);
;        result.error =error.message;
        result.errorCode = error.request.code;

        result.message = error.message;

      } else {
        console.log("3");
        // Something happened in setting up the request that triggered an Error
        result.error ="No response received from server";
        result.errorCode = error.response.status;
      }
      
    });

    return result;
};