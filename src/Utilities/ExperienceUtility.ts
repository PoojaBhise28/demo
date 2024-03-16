import { useNavigate } from "react-router-dom";
import AddressModel from "../Model/ExperienceModel";
import ExperienceModel from "../Model/ExperienceModel";
import { useState } from "react";

export default function ExperienceUtility() {
  const navigate = useNavigate();

  const initialValue: ExperienceModel = {
    Id: 0,
    UserId: "",
    CompanyName: "",
    StartYear: 0,
    EndYear: 0,
    DesignationId: 0,
  };
  const [Experienceinfo, setExperienceinfo] =
    useState<ExperienceModel>(initialValue);

  const onInputChangeExperience = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setExperienceinfo((prev: any) => ({ ...prev, [name]: newValue }));
  };
  const handelShowList = () => {
    navigate("/showlist");
  };
  const onSaveExperience = async () => {
    alert(JSON.stringify(Experienceinfo));
    //  CreateExperienceDetaiAsync(Experienceinfo);
    alert("Sucess");
    console.log("sucess");
  };
  return {
    onInputChangeExperience,
    handelShowList,
    onSaveExperience,
    Experienceinfo,
    setExperienceinfo,
  };
}
