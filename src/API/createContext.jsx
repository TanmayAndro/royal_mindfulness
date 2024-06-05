import React, { createContext, useState } from "react";
import { loginApi } from "./ApiConfig";
import { signupApi } from "./ApiConfig";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const APIcontext = createContext();

const ContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState();
  const [signupData, setSignUpData] = useState();
  const [errorData, setErrorData] = useState();
  const fetchLogin = async (email, password) => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
 

    console.log("API CALLING.....");
   

    try {
      const response = await axios.post(baseUrl + loginApi,JSON.stringify(data));
      setLoginData(response.data);
    } catch (err) {
      console.error("Error during API call:", err);
      setErrorData(err);
    }
  };


  const fetchSignup = async (
    email,
    password,
    newPassword,
    mobileNO,
    firstName,
    lastName
  ) => {
    console.log("API CALLING.....");

    const data = {
      user: {
        first_name: firstName,
        last_name: lastName,
        phone_number: mobileNO,
        email: email,
        password: password,
        password_confirmation: newPassword,
      },
    };

    try {
      const response = await axios.post(baseUrl + signupApi, data);
      setSignUpData(response.data);
    } catch (err) {
      setErrorData(err);
    }
  };
  let value = {
    loginData,
    signupData,
    errorData,
    fetchLogin,
    fetchSignup,
  };
  return <APIcontext.Provider value={value}>{children}</APIcontext.Provider>;
};

export default ContextProvider;
