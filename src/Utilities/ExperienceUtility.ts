import { useNavigate } from "react-router-dom";
import AddressModel from "../Model/ExperienceModel";
import ExperienceModel from "../Model/ExperienceModel";
import { useEffect, useState } from "react";
import { CreateExperienceInfo, UpdateExperienceInfo, getExperienceInfoById } from "../Services/ExperienceService";

export default function ExperienceUtility(id:number) {
  const navigate = useNavigate();

  const initialValue: ExperienceModel = {
    id: 0,
    userId: 1,
    companyName: "",
    startYear: 0,
    endYear: 0,
    designationId: 0
  };
  const [Experienceinfo, setExperienceinfo] =useState<ExperienceModel>(initialValue);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const validateFields = () => {
    const {companyName,startYear,endYear} =Experienceinfo;
    const newErrors: Partial<Record<string, string>> = {};
    const currentYear = new Date().getFullYear();
    const startYearNum = +startYear;
    const endYearNum = +endYear;
    if (!companyName) {
      newErrors.companyName = "companyName Name is required";
    } else if (companyName.length > 40) {
      newErrors.companyName = "companyName Name must be less than 40 characters";
    }
    if (isNaN(startYearNum) || startYearNum < 1900 || startYearNum > currentYear) {
      newErrors.startYear = "Please enter a valid start year";
    }

    if (isNaN(endYearNum) || endYearNum < 1900 || endYearNum > currentYear || endYearNum < startYearNum) {
      newErrors.endYear = "Please enter a valid end year";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (id > 0) {
          const response = await getExperienceInfoById(id);
          if (response.data) {
            setExperienceinfo(response.data);
          }
        }
      } catch (error) {
        console.error('Error fetching Experience information:', error);
      }
    }

    fetchData();

    // return () => {
      
    // };
  }, [id]);

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
  if(validateFields()){
    if (Experienceinfo.id !== 0) {
      alert(Experienceinfo.id);
      console.log(Experienceinfo.id + "update");
      await UpdateExperienceInfo( Experienceinfo.id,Experienceinfo);
      console.log("User data updated successfully.");
      navigate("/showlist");
    } else {
      alert(Experienceinfo.id + "new");
      await CreateExperienceInfo(Experienceinfo);
      console.log("New user data created successfully.");
      navigate("/showlist");
    }
  }
    setExperienceinfo(initialValue);
  };
  
  return {
    onInputChangeExperience,
    handelShowList,
    onSaveExperience,
    Experienceinfo,
    setExperienceinfo,
    errors
  };
}
