import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER, DELETE_USER, UPDATE_USER } from "../../redux/reducerKeys";
import { dateFormat } from "../../utils";
import { addUser } from "../../redux/reducer/userSlice";

const useUserFormModal = ({ data, setEvent_key }) => {
  //console.log("data in hooks", data)
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(data?.firstName || "");
  const [lastName, setLastName] = useState(data?.lastName || "");
  const [email, setEmail] = useState(data?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(data?.phoneNumber || "");
  const [address, setAddress] = useState(data?.address || "");
  const [experienceModal, setExperienceModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);

  const [degree, setDegree] = useState(data?.educationDetails?.degree || "");
  const [college, setCollege] = useState(data?.educationDetails?.college || "");
  const [startCollegeYear, setStartCollegeYear] = useState(
    data?.educationDetails?.startYear || ""
  );
  const [endCollegeYear, setEndCollegeYear] = useState(
    data?.educationDetails?.endYear || ""
  );
  const [companyName, setCompanyName] = useState(
    data?.experienceDetails?.company || ""
  );
  const [startCompanyYear, setStartCompanyYear] = useState(
    data?.experienceDetails?.startYear || ""
  );
  const [endCompanyYear, setEndCompanyYear] = useState(
    data?.experienceDetails?.endYear || ""
  );
  const [dob, setDob] = useState(dateFormat(data?.dob));
  const [error, setError] = useState(false);
  //console.log("data?.dob, dob", data?.dob, dob)

  //console.log("name in hooks", firstName)

  useEffect(() => {
    setFirstName(data?.firstName || "");
    setLastName(data?.lastName || "");
    setEmail(data?.email || "");
    setPhoneNumber(data?.phoneNumber || "");
    setAddress(data?.address || "");
    setDob(dateFormat(data?.dob));
    setDegree(data?.educationDetails?.degree || "");
    setCollege(data?.educationDetails?.college || "");
    setStartCollegeYear(data?.educationDetails?.startYear || "");
    setEndCollegeYear(data?.educationDetails?.endYear || "");
    setStartCompanyYear(data?.experienceDetails?.startYear || "");
    setEndCompanyYear(data?.experienceDetails?.endYear || "");
    setCompanyName(data?.experienceDetails?.company || "");
  }, [data]);

  const openExperienceModal = () => {
    setExperienceModal(true);
  };
  const openEducationModal = () => {
    setEducationModal(true);
  };
  const userDispetch = ({ userType, index }) => {
    setError(false);
    // if (
    //   (firstName == "" ||
    //     lastName == "" ||
    //     email == "" ||
    //     phoneNumber == "" ||
    //     dob == "" ||
    //     address == "" ||
    //     degree == "",
    //   college == "",
    //   startCollegeYear == "" || companyName == "")
    // ) {
    //   setError(true);
    //   return;
    // }
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      dob: dob,
      address: address,
      educationDetails: {
        degree: degree,
        college: college,
        startYear: startCollegeYear,
        endYear: endCollegeYear,
      },
      experienceDetails: {
        company: companyName,
        startYear: startCompanyYear,
        endYear: endCompanyYear,
      },
    };
    //console.log('userType', userType)
    userType
      ? dispatch({
          type: UPDATE_USER,
          payload: { data: data, willUpdateIndex: index },
        })
      : dispatch(addUser(data)); //dispatch({type:ADD_USER, payload:data})
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setDob("");
    setDegree("");
    setCollege("");
    setStartCollegeYear("");
    setEndCollegeYear("");
    setStartCompanyYear("");
    setEndCompanyYear("");
    setCompanyName("");
    setEvent_key("1");
  };

  const userDelete = (index) => {
    dispatch({ type: DELETE_USER, payload: { willDeleteIndex: index } });
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    experienceModal,
    setExperienceModal,
    educationModal,
    setEducationModal,
    openExperienceModal,
    openEducationModal,
    userDispetch,
    dob,
    setDob,
    error,
    setError,
    userDelete,

    degree,
    setDegree,
    college,
    setCollege,
    startCollegeYear,
    setStartCollegeYear,
    endCollegeYear,
    setEndCollegeYear,
    companyName,
    setCompanyName,
    startCompanyYear,
    setStartCompanyYear,
    endCompanyYear,
    setEndCompanyYear,
  };
};

export default useUserFormModal;
