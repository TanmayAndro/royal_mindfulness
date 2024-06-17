import { Typography, Box, IconButton, styled } from "@mui/material";
import { useState } from "react";
import {
  MainGrid,
  SecondGrid,
  MainBox,
  InputField,
  ButtonStyle,
  AllStyle,
  SecondBox,
} from "../Login/login";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { facebook_logo, google_logo } from "../../assests";
import Login_register_firstPart from "../../Components/login_register_firstPart";
import axios from "axios";
import { signupApi } from "../../API/ApiConfig";
import AlertComponent from "../../Components/alert";
const config = require("../../config");



const Register = () => {
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState("");
  const fetchSignup = async (
    email: string,
    password: string,
    newPassword: string,
    mobileNO: string,
    firstName: string,
    lastName: string
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
      const response = await axios.post(process.env.BASE_URL + signupApi, data);
      navigate("/pricing-plans");
    } catch (err: any) {
      console.log(err?.response?.data?.errors[0].account);
      setErrorData(err?.response?.data?.errors[0].account);
    }
  };
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
        emailErrorMessage: config.error_msg,
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
  const handleConfirmPassword = (value: string, password: string) => {
    const isLengthValid = value.length >= 8;
    const passwordsMatch = password === value;

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
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    setData({ ...data, [fields]: value });

    if (value.trim() === "" || !passwordPattern.test(value)) {
      setData({ ...data, [fields]: value, [`${[fields]}Error`]: true });
      handleConfirmPassword(data.setPassword, value);
      return true;
    } else {
      setData({ ...data, [fields]: value, [`${[fields]}Error`]: false });
      handleConfirmPassword(data.setPassword, value);
      return false;
    }
  };

  const handleValidation = () => {
    const emailError = handleEmail(data.email);
    const firstNameError = handleValidationFirstLast(
      "firstName",
      data.firstName,
      20
    );
    const lastNameError = handleValidationFirstLast(
      "lastName",
      data.lastName,
      20
    );
    const mobileNoError = handlePhoneNumber(data.mobileNo);
    const passwordError = handlePassword(data.password, "password");
    const setPasswordError = handleConfirmPassword(
      data.setPassword,
      data.password
    );

    const errors = {
      emailError,
      firstNameError,
      lastNameError,
      mobileNoError,
      passwordError,
      setPasswordError,
    };

    setData({
      ...data,
      emailError,
      firstNameError,
      lastNameError,
      mobileNoError,
      passwordError,
      setPasswordError,
    });
    console.log(errors);
    if (
      !errors.emailError &&
      !errors.firstNameError &&
      !errors.lastNameError &&
      !errors.mobileNoError &&
      !errors.passwordError &&
      !errors.setPasswordError
    ) {
      fetchSignup(
        data.email,
        data.password,
        data.setPassword,
        data.mobileNo,
        data.firstName,
        data.lastName
      );
    }
  };
  const handleClose = () => {
    setErrorData("");
  };
  return (
    <MainGrid container>
      <Login_register_firstPart />
      {errorData != "" && (
        <AlertComponent
          errorData={errorData}
          handleClose={handleClose}
          type={"error"}
        />
      )}

      <SecondGrid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <MainBox>
          <Typography style={AllStyle.heading}>
            {config.signHeadingName}
          </Typography>
          <SecondBox style={AllStyle.secondBox}>
            <Typography style={AllStyle.smallHeading}>
              {config.welcomeHeading}
            </Typography>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <img
                src={google_logo}
                style={{ width: 76, cursor: "pointer" }}
                alt="logo"
              />
              <img
                src={facebook_logo}
                style={{ width: 50, cursor: "pointer" }}
                alt="logo"
              />
            </Box>
            <Box
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#CBD5E1",
                marginBlock: "16px",
              }}
            ></Box>

            <Typography style={AllStyle.textStyle}>
              {config.email} {importantField()}
            </Typography>
            <InputField
              placeholder={config.placeHolderEmail}
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
              {config.first_name} {importantField()}
            </Typography>
            <InputField
              placeholder={config.first_name_placeholder}
              value={data.firstName}
              variant="outlined"
              data-test-id="1stame"
              onChange={(e: any) => {
                handleValidationFirstLast("firstName", e.target.value, 20);
              }}
              error={data.firstNameError}
              helperText={data.firstNameError && config.error_msg}
            />

            <Typography style={AllStyle.textStyle}>
              {config.last_name} {importantField()}
            </Typography>
            <InputField
              placeholder={config.last_name_placeholder}
              onChange={(e: any) => {
                handleValidationFirstLast("lastName", e.target.value, 20);
              }}
              variant="outlined"
              error={data.lastNameError}
              value={data.lastName}
              helperText={data.lastNameError && config.error_msg}
              data-test-id="lstname"
            />

            <Typography style={AllStyle.textStyle}>
              {config.password} {importantField()}
            </Typography>
            <InputField
              error={data.passwordError}
              helperText={data.passwordError && config.error_msg}
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
              {config.confirm_password} {importantField()}
            </Typography>
            <InputField
              error={data.setPasswordError}
              helperText={
                data.setPasswordError
                  ? "Passwords do not match or too short"
                  : ""
              }
              style={{ marginBottom: "12px" }}
              placeholder={config.placeHolderPassword}
              data-test-id="txtInputPassword"
              type={handleVisiblPassword(enablePasswordField)}
              fullWidth={true}
              value={data.setPassword}
              variant="outlined"
              onChange={(e: any) => {
                handleConfirmPassword(e.target.value, data.password);
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
              {config.phone_no} {importantField()}
            </Typography>
            <PhoneStyle
              style={{ marginBottom: !data.mobileNoError ? "16px" : 0 }}
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
            {data.mobileNoError && (
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
                handleValidation();
              }}
            >
              {config.labelTitleSignUp}
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
              {config.lable_already_signup}{" "}
              <Link
                to="/login"
                style={{
                  ...AllStyle.boldStyle,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {config.labelTitle}
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
