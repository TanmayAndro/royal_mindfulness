import { Typography, Box, IconButton, styled } from "@mui/material";
import React, { useState } from "react";
import {
  MainGrid,
  SecondGrid,
  MainBox,
  InputField,
  ButtonStyle,
  AllStyle,
  SecondBox,
} from "../Login/login";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { facebook_logo, google_logo } from "../../assests";
const config = require("../../config");
const Register = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    mobileNo: "",
    setPassword: "",
    emailError: false,
    firstNameError: false,
    lastNameError: false,
    passwordError: false,
    mobileNoError: false,
    setPasswordError: false,
    emailErrorMessage: "",
  });
  const [enablePasswordField, setenablePasswordField] = useState(true);
  const [enablePasswordField2, setenablePasswordField2] = useState(true);
  const handleEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value === "") {
      setData({
        ...data,
        emailError: true,
        email: value,
        emailErrorMessage: "enter a value",
      });
      return true;
    } else if (!value.match(emailPattern)) {
      setData({
        ...data,
        emailError: true,
        email: value,
        emailErrorMessage: "Email does not exist",
      });
      return true;
    } else {
      setData({
        ...data,
        emailError: false,
        email: value,
        emailErrorMessage: "",
      });
      return false;
    }
  };

  const importantField = () => {
    return (
      <span
        style={{
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "22px",
          color: "#FF5E5B",
        }}
      >
        *
      </span>
    );
  };
  const handleConfirmPassword = (value: string,password:string) => {
    const isLengthValid = value.length >= 8;
    const passwordsMatch =password === value;
  
    setData((prevData) => ({
      ...prevData,
      setPassword: value,
      setPasswordError: !isLengthValid || !passwordsMatch,
    }));
  
    return !isLengthValid || !passwordsMatch;
  };
  
  const handlePhoneNumber = (e: any) => {
    if (e && isValidPhoneNumber(e.toString())) {
      setData({ ...data, mobileNo: e, mobileNoError: false });
      return false;
    } else {
      setData({ ...data, mobileNo: e, mobileNoError: true });
      return true;
    }
  };

  const handleVisiblPassword = (enablePasswordField: boolean) => {
    return enablePasswordField ? "password" : "text";
  };

  const handleColorPhone = () => {
    return data.mobileNoError ? "#F87171" : "#CBD5E1";
  };

  const handleValidationFirstLast = (
    fieldName: string,
    value: string,
    maxLength: number
  ) => {
    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = "Please enter a value";
    } else if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setData({
      ...data,
      [`${fieldName}Error`]: errorMessage !== "",
      [`${fieldName}ErrorMessage`]: errorMessage,
      [fieldName]: value,
    });

    return errorMessage !== "";
  };
  const handlePassword = (value: string, fields: string) => {

    setData({ ...data, [fields]: value });

    if (value.trim() == "" || value.length < 8) {
        setData({ ...data, [fields]: value, [`${[fields]}Error`]: true });
        handleConfirmPassword(data.setPassword,value)
      return true;
    } else {
        
        setData({ ...data, [fields]: value, [`${[fields]}Error`]: false });
        handleConfirmPassword(data.setPassword,value)
      return false;
    }
  };
  const handleValidation = () => {
    const emailError = handleEmail(data.email);
    const firstNameError = handleValidationFirstLast("firstName", data.firstName, 20);
    const lastNameError = handleValidationFirstLast("lastName", data.lastName, 20);
    const mobileNoError = handlePhoneNumber(data.mobileNo);
    const passwordError = handlePassword(data.password, "password");
    const setPasswordError = handleConfirmPassword(data.setPassword,data.password);
  
    const errors = {
      emailError,
      firstNameError,
      lastNameError,
      mobileNoError,
      passwordError,
      setPasswordError,
    };
  
    // Set the errors in the state
    setData({
      ...data,
      emailError,
      firstNameError,
      lastNameError,
      mobileNoError,
      passwordError,
      setPasswordError,
    });
  
    // Log errors for debugging
    console.log(errors);
  };
  
  return (
    <MainGrid container>
      <SecondGrid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MainBox>
          <Typography style={AllStyle.heading}>
            Sign up to Royal Mindfulness
          </Typography>
          <SecondBox style={AllStyle.secondBox}>
            <Typography style={AllStyle.smallHeading}>
              Welcome to Royal Mindfulness!
            </Typography>

          <Box style={{    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',marginBottom:'10px'}}>
  <img src={google_logo} style={{width:76}}/>
  <img src={facebook_logo}style={{width:50}}/>
</Box>
<Box style={{width:'100%',height:'1px',backgroundColor:"#CBD5E1",marginBlock:"20px"}}>

</Box>
   
            <Typography style={AllStyle.textStyle}>
              Email {importantField()}
            </Typography>
            <InputField
              placeholder="Your Email"
              variant="outlined"
              data-test-id="emailtest"
              value={data.email}
              onChange={(e: any) => {
                handleEmail(e.target.value);
              }}
              error={data.emailError}
              helperText={data.emailError && data.emailErrorMessage}
            />
            <Typography style={AllStyle.textStyle}>
              First Name {importantField()}
            </Typography>
            <InputField
              placeholder="Your First Name"
              value={data.firstName}
              variant="outlined"
              data-test-id="1stame"
              onChange={(e: any) => {
                handleValidationFirstLast("firstName", e.target.value, 20);
              }}
              error={data.firstNameError}
              helperText={data.firstNameError && "enter a value"}
            />

            <Typography style={AllStyle.textStyle}>
              Last Name {importantField()}
            </Typography>
            <InputField
              placeholder="Your Last Name"
              onChange={(e: any) => {
                handleValidationFirstLast("lastName", e.target.value, 20);
              }}
              variant="outlined"
              error={data.lastNameError}
              value={data.lastName}
              helperText={data.lastNameError && "enter a value"}
              data-test-id="lstname"
            />

            <Typography style={AllStyle.textStyle}>
              Password {importantField()}
            </Typography>
            <InputField
              error={data.passwordError}
              helperText={data.passwordError && "enter a value"}
              style={{ marginBottom: "12px" }}
              placeholder={config.placeHolderPassword}
              data-test-id="txtInputPassword"
              type={handleVisiblPassword(enablePasswordField2)}
              fullWidth={true}
              value={data.password}
              variant="outlined"
              onChange={(e: any) => {
                handlePassword(e.target.value, "password");
              }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setenablePasswordField2(!enablePasswordField2);
                    }}
                    edge="end"
                  >
                    {enablePasswordField2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Typography style={AllStyle.textStyle}>
              Confirm Password {importantField()}
            </Typography>
            <InputField
              error={data.setPasswordError}
              helperText={data.setPasswordError ? "Passwords do not match or too short" : ""}
              style={{ marginBottom: "12px" }}
              placeholder={config.placeHolderPassword}
              data-test-id="txtInputPassword"
              type={handleVisiblPassword(enablePasswordField)}
              fullWidth={true}
              value={data.setPassword}
              variant="outlined"
              onChange={(e: any) => {
                handleConfirmPassword(e.target.value,data.password);
              }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setenablePasswordField(!enablePasswordField);
                    }}
                    edge="end"
                  >
                    {enablePasswordField ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Typography style={AllStyle.textStyle}>
              Phone Number {importantField()}
            </Typography>
            <PhoneStyle
            style={{marginBottom:!data.mobileNoError?  "16px":0}}
              data-test-id="txtInputPhonenumber2"
              borderColor={handleColorPhone()}
              className="custominput"
              value={data.mobileNo}
              onChange={(e: any) => {
                handlePhoneNumber(e);
              }}
              defaultCountry="AE"
              countries={[]}
              international
            />
 {           data.mobileNoError&& (
        <Typography
          style={{ ...AllStyle.errorTextStyle, marginBottom: "16px" }}
        >
          {"Please enter a valid phone number"}
        </Typography>
      )}

            <ButtonStyle
              variant="contained"
              data-test-id="button"
              style={AllStyle.btnStyle}
              onClick={() => {
                  handleValidation()
              }}
            >
              Sign up
            </ButtonStyle>
            <Typography
              data-test-id="button1"
              style={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19.2px",
                color: "#0A2239",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  ...AllStyle.boldStyle,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Log in
              </Link>
            </Typography>
          </SecondBox>

        </MainBox>
      </SecondGrid>
    </MainGrid>
  );
};
export const PhoneStyle = styled(PhoneInput)(({ borderColor }: any) => ({
  border: `1px solid ${borderColor || "#F87171"}`,
  borderRadius: 8,
 
  height: 41,
  zIndex: 1,
  position: "relative",
  display: "flex",
  alignItems: "center",
  paddingLeft: 10,
  "& input": {
    border: "none",
  },
  "& input:focus": {
    border: "none",
    outline: "none",
  },
  "& .PhoneInputInput": {
    color: "#334155",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 400,
    background: "transparent",

    lineHeight: "24px",
  },
  "& input:focus-visible": {
    border: "none",
    outline: "none",
  },
}));

export default Register;
