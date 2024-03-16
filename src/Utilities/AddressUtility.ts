import { useState } from "react";
import AddressModel from "../Model/AddressModel";
import { useNavigate } from "react-router-dom";
import { CreateAddressInfo } from "../Services/AddressInfoService";

export default function AddressUtility(){
    const navigate= useNavigate();
    const initialValue : AddressModel = {
        Address: "",
        City: "",
        StateId: "",
        CountryId: 0,
        id: 0,
        userId: 2
    }
    const[Addressinfo, setAddressinfo ] =  useState<AddressModel>(initialValue);
    const onSaveAddress = async() => {
        alert(JSON.stringify(Addressinfo));
        CreateAddressInfo(Addressinfo);
    };
    const onInputChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setAddressinfo((prev)=> ({...prev , [name]: newValue}));
    }
    const onTextAreaChangeAddress = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setAddressinfo((prev)=> ({...prev , [name]: newValue}));
    }

    const onSelectFieldChangeAddress = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
    
        setAddressinfo((prevState) => ({ ...prevState, [name]: newValue }));
       
        // alert(name);
      };
      const handelShowList=()=>{
        navigate("/showlist");
      }
    return{handelShowList,onSelectFieldChangeAddress,Addressinfo,setAddressinfo,onSaveAddress,onInputChangeAddress,onTextAreaChangeAddress};
};