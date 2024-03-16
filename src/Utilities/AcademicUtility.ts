import { useState } from "react";
import AddressModel from "../Model/AddressModel";
import { useNavigate } from "react-router-dom";
import AcademicModel from "../Model/AcademicModel";

export default function AcademicUtility(){
    const navigate= useNavigate();
    const initialValue : AcademicModel = {
        Id: 0,
        InstitutionName: "",
        StartYear: "",
        EndYear: "",
        Percentage: "",
        Degree: "",
        UserId: ""
    }
    const[Academicinfo, setAcademicinfo ] =  useState<AcademicModel>(initialValue);
    const onSaveAcademic = async() => {
        alert(JSON.stringify(Academicinfo));
    };
    const onInputChangeAcademic = (event: React.ChangeEvent<HTMLInputElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setAcademicinfo((prev)=> ({...prev , [name]: newValue}));
    }
 

    const onSelectFieldChangeAcademic = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
        const name = event.currentTarget.name;
    
        setAcademicinfo((prevState) => ({ ...prevState, [name]: newValue }));
       
        
      };
      const handelChangeNumberAcademic=(e:any)=>{
        // alert(e.target.name);
        var name  = e.target.name;
        var newValue  =  e.target.value;
        setAcademicinfo((prev)=> ({...prev , [name]: newValue}));
    }

      const handelShowList=()=>{
        navigate("/showlist");
      }
    return{handelShowList,handelChangeNumberAcademic,onSelectFieldChangeAcademic,setAcademicinfo,
      Academicinfo,onSaveAcademic,onInputChangeAcademic}
};