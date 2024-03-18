import { useEffect, useState } from "react";
import AddressModel from "../Model/AddressModel";
import { useNavigate } from "react-router-dom";
import { CreateAddressInfo, UpdateAddressnfoAsync, getAddressInfoById } from "../Services/AddressInfoService";

export default function AddressUtility(id:number){
    const navigate= useNavigate();
    const initialValue : AddressModel = {
        address: "",
        city: "",
        stateId: 0,
        countryId: 0,
        id: id,
        userId: 1
    }

    const[Addressinfo, setAddressinfo ] =  useState<AddressModel>(initialValue);

    useEffect(() => {
      async function fetchData() {
        try {
          if (id > 0) {
            const response = await getAddressInfoById(id);
            if (response.data) {
              setAddressinfo(response.data);
            }
          }
        } catch (error) {
          console.error('Error fetching Address information:', error);
        }
      }
  
      fetchData();
  
      // return () => {
        
      // };
    }, [id]);
  
    
    const onSaveAddress = async() => {

        if (Addressinfo.id !== 0) {
            alert(Addressinfo.id);
            console.log(Addressinfo.id + "update");
            await UpdateAddressnfoAsync( Addressinfo,Addressinfo.id);
            alert("Address  updated successfully.");
            console.log("Address  updated successfully.");
            navigate("/showlist");
            
          } else {
            alert(Addressinfo.id + "new");
            await CreateAddressInfo(Addressinfo);
            console.log("New Address  created successfully.");
            alert("Address  created successfully.");
            navigate("/showlist");
          }
      

          setAddressinfo(initialValue);
       
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
       
      };

      const handelShowList=()=>{
        navigate("/showlist");
      }
    return{handelShowList,
        onSelectFieldChangeAddress,
        Addressinfo,setAddressinfo,
        onSaveAddress,
        onInputChangeAddress
        ,onTextAreaChangeAddress};
};