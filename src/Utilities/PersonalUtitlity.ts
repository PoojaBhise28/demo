import { ReactNode, useEffect, useState } from "react";
import PersonalModel from "../Model/PersonalModel";
import { useNavigate } from "react-router-dom";
import {
  CreatePersonalInfo,
  UpdatePersonInfoAsync,
  getPersonalInfoById,
} from "../Services/PersonalInfoServices";
import { JSX } from "react/jsx-runtime";

export default function PersonalInfoUtility(id: number) {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const initialValue: PersonalModel = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    phoneNumber: "",
    description: "",
    userId: 11,
    IsActive: false,
    id: id,
  };

  const [personalinfo, setPersonalinfo] = useState<PersonalModel>(initialValue);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const validateFields = () => {
    const { firstName, lastName, phoneNumber, mobileNumber, description } =
      personalinfo;
    const newErrors: Partial<Record<string, string>> = {};

    if (!personalinfo.firstName) {
      newErrors.firstName = "firstname name is requeried";
    } else if (personalinfo.firstName.length > 40) {
      newErrors.firstName = "firstname Name must be less than 40 characters";
    }
    if (!personalinfo.lastName) {
      newErrors.lastName = "lastName name is requeried";
    } else if (personalinfo.firstName.length > 40) {
      newErrors.lastName = "lastName Name must be less than 40 characters";
    }
    const phoneRegex = /^\d{10}$/;
    if (!personalinfo.phoneNumber) {
      newErrors.phoneNumber = "PhoneNumber is required";
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    }
    const mobileRegex = /^\d{10}$/;
    if (!personalinfo.mobileNumber) {
      newErrors.mobileNumber = "mobileNumber is required";
    } else if (!mobileRegex.test(phoneNumber)) {
      newErrors.mobileNumber = "Mobile Numberr must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (id > 0) {
          const response = await getPersonalInfoById(id);
          if (response.data) {
            setPersonalinfo(response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching personal information:", error);
      }
    }

    fetchData();

    // return () => {

    // };
  }, [id]);

  const handelSavePersonalInfo = async () => {
    if(validateFields()){
    try {
      if (personalinfo.id !== 0) {
        await UpdatePersonInfoAsync(personalinfo, personalinfo.id);
        navigate("/showlist");
        console.log("User data updated successfully.");
      } else {
        await CreatePersonalInfo(personalinfo);
        navigate("/showlist");
        console.log("New user data created successfully.");
      }
      setPersonalinfo(initialValue);
      setError(""); // Clear error on successful save
    } catch (error) {
      console.error("Error saving personal information:", error);
    }
  }
  };

  const handelShowList = () => {
    navigate("/showlist");
  };

  const onInputChangePersonal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setPersonalinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onTextAreaChangePersonalDetails = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    var name = event.currentTarget.name;
    var newValue = event.currentTarget.value;
    setPersonalinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  return {
    personalinfo,
    setPersonalinfo,
    handelSavePersonalInfo,
    onTextAreaChangePersonalDetails,
    onInputChangePersonal,
    handelShowList,
    errors
  };
}
