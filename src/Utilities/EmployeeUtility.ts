import { useState } from "react";
import EmployeModel from "../Model/EmployeModel";
import { useNavigate } from "react-router-dom";


export default function EmployeeUtility() {
    const navigate =useNavigate();
    const initialValue : EmployeModel = {
        id: 0,
        UserId: 0,
        CompanyName:"",
        NoticePeriod: 0,
        ExpectedCTC: 0,
        CurrentCTC: 0
    }
    const[Employeeinfo, setEmployeeinfo ] =  useState<EmployeModel>(initialValue);

    const onSaveEmployee = async() => {
    
        alert(JSON.stringify(Employeeinfo));
   
    };

    const handelShowList = async() => {
    
       navigate("/showList");
   
    };
    const onInputChangeEmployee = (event: React.ChangeEvent<HTMLInputElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setEmployeeinfo((prev)=> ({...prev , [name]: newValue}));
    }
    const handelChangeNumber=(e: React.ChangeEvent<HTMLInputElement>)=>{
       //  alert(e.target.name);
        var name  = e.target.name;
        var newValue  =  e.target.value;
        setEmployeeinfo((prev)=> ({...prev , [name]: newValue}));
    }

   
    return{onInputChangeEmployee,onSaveEmployee,handelShowList,Employeeinfo,setEmployeeinfo,handelChangeNumber};
}


