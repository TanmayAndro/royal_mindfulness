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

// import metadata from "react-phone-number-input/metadata.min.json";
import en from "react-phone-number-input/locale/en.json";
import { getCountryCallingCode, getCountries, getExampleNumber } from "libphonenumber-js";
import parsePhoneNumber from 'libphonenumber-js'
import { facebook_logo, google_logo } from "../../assests";
import Login_register_firstPart from "../../Components/login_register_firstPart";
import axios from "axios";
import { signupApi } from "../../API/ApiConfig";
import AlertComponent from "../../Components/alert";
const config = require("../../config");

const Register = () => {
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState("");
  const [successData, setSuccessData] = useState("");
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
    country:'',
    passwordErrorMessage:""
  });
  const [enablePasswordField, setenablePasswordField] = useState(true);
  const [enablePasswordField2, setenablePasswordField2] = useState(true);

    const fetchSignup = async (
    email: string,
    password: string,
    newPassword: string,
    mobileNO: string,
    firstName: string,
    lastName: string
  ) => {

    console.log("called this fun:")
    // ✅ backend expects full_name, not first_name/last_name separately
    const timestamp = Date.now();
  const safeName = `${firstName}-${lastName}`.replace(/\s+/g, "-").toLowerCase();
  const meetingRoom = `deedee-user-${safeName}-${timestamp}`;
  const meetingLink = `https://meet.jit.si/${meetingRoom}`;

  // ✅ Prepare payload for backend
  const payload = {
    user: {
      email,
      password,
      full_name: `${firstName} ${lastName}`.trim(),
      country: data?.country,
      meeting_link: meetingLink,
    },
  };

  try {
    const response = await axios.post(
      "https://deedee-unchainable-optionally.ngrok-free.dev/users",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );


    setSuccessData("Your account was created successfully!");

    // Optional: print meeting link

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: any) {
      console.error("Signup error:", err.response?.data || err.message);
      setErrorData( 
        err?.response?.data?.errors?.[0]?.account ||
          err?.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  };

// Reverse map: find the country with this calling code
const getCountryNameByCallingCode = (callingCode: string) => {
  
  return "Unknown Country";
};

// Example usage
console.log(getCountryNameByCallingCode("+91"));  // "India"
console.log(getCountryNameByCallingCode("+971")); // "United Arab Emirates"
console.log(getCountryNameByCallingCode("+1"));  
  const handleEmail = (value: string) => {
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let emailError = false;
    let emailErrorMessage = "";

    if (value === "") {
      emailError = true;
      emailErrorMessage = config.error_msg;
    } else if (!value.match(emailPattern)) {
      emailError = true;
      emailErrorMessage = "Invalid email format";
    }

    setData((prev) => ({
      ...prev,
      email: value,
      emailError,
      emailErrorMessage,
    }));

    return emailError;
  };

  const importantField = () => (
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

  const handleConfirmPassword = (value: string, password: string) => {
    const isLengthValid = value.length >= 8;
    const passwordsMatch = password === value;

    const hasError = !isLengthValid || !passwordsMatch;

    setData((prev) => ({
      ...prev,
      setPassword: value,
      setPasswordError: hasError,
    }));

    return hasError;
  };



const handlePhoneNumber = (val: any) => {
  if (!val) return;

  // Parse number and remove '+'
  const cleanCode = val.replace("+", "").trim();

  // Try to match country by calling code
  let countryName = "";
  for (const country of getCountries()) {
    const code = getCountryCallingCode(country);
    if (cleanCode.startsWith(code)) {
      countryName = en[country]; // Example: "India"
      break;
    }
  }

  const hasError = !(val && isValidPhoneNumber(val.toString()));
console.log(countryName,"countryName>>>")
  setData((prev) => ({
    ...prev,
    mobileNo: val,
    mobileNoError: hasError,
    country: countryName || "Unknown",
  }));

  console.log(`Detected Country: ${countryName}`);
  return hasError;
};


  const handleVisiblPassword = (enabled: boolean) =>
    enabled ? "password" : "text";

  const handleColorPhone = () =>
    data.mobileNoError ? "#F87171" : "#CBD5E1";

  const handleValidationFirstLast = (
    fieldName: string,
    value: string,
    maxLength: number
  ) => {
    let errorMessage = "";

    if (value.trim() === "") {
      console.log(" in if condition")
      errorMessage = "Please enter a value";
    } else if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }

    setData((prev) => ({
      ...prev,
      [fieldName]: value,
      [`${fieldName}Error`]: errorMessage !== "",
      [`${fieldName}ErrorMessage`]: errorMessage,
    }));

    return errorMessage !== "";
  };

const handlePassword = (value:any,fields: string) => {
  let errorMessage = "";

  // Standard strong password pattern
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!value.trim()) {
    errorMessage = "Please enter password";
  } else if (!passwordPattern.test(value)) {
    errorMessage =
      "Password must be 8+ chars, include upper, lower, number & special character";
  }

  setData({
    ...data,
    password: value,
    passwordError: errorMessage ? true : false,
    passwordErrorMessage: errorMessage,
  });
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
    const passwordError:any = handlePassword(data.password,"password");
    const setPasswordError = handleConfirmPassword(
      data.setPassword,
      data.password
    );

    if (
      !emailError &&
      !firstNameError &&
      !lastNameError &&
      !mobileNoError &&
      !passwordError &&
      !setPasswordError
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
    setSuccessData("");
  };

  return (
    <MainGrid container>
      <Login_register_firstPart />
      {errorData && (
        <AlertComponent
          errorData={errorData}
          handleClose={handleClose}
          type="error"
        />
      )}
      {successData && (
        <AlertComponent
          errorData={successData}
          handleClose={handleClose}
          type="success"
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

            {/* Email */}
            <Typography style={AllStyle.textStyle}>
              {config.email} {importantField()}
            </Typography>
            <InputField
              placeholder={config.placeHolderEmail}
              variant="outlined"
              data-test-id="emailtest"
              value={data.email}
              onChange={(e: any) => handleEmail(e.target.value)}
              error={data.emailError}
              helperText={data.emailError && data.emailErrorMessage}
            />

            {/* First Name */}
            <Typography style={AllStyle.textStyle}>
              {config.first_name} {importantField()}
            </Typography>
            <InputField
              placeholder={config.first_name_placeholder}
              value={data.firstName}
              variant="outlined"
              data-test-id="1stame"
              onChange={(e: any) =>
                handleValidationFirstLast("firstName", e.target.value, 20)
              }
              error={data.firstNameError}
              helperText={data.firstNameError && config.error_msg}
            />

            {/* Last Name */}
            <Typography style={AllStyle.textStyle}>
              {config.last_name} {importantField()}
            </Typography>
            <InputField
              placeholder={config.last_name_placeholder}
              onChange={(e: any) =>
                handleValidationFirstLast("lastName", e.target.value, 20)
              }
              variant="outlined"
              error={data.lastNameError}
              value={data.lastName}
              helperText={data.lastNameError && config.error_msg}
              data-test-id="lstname"
            />

            {/* Password */}
            <Typography style={AllStyle.textStyle}>
              {config.password} {importantField()}
            </Typography>
            <InputField
              error={data.passwordError}
             helperText={data.passwordError ? data.passwordErrorMessage : ""}
              style={{ marginBottom: "12px" }}
              placeholder={config.placeHolderPassword}
              data-test-id="txtInputPassword"
              type={handleVisiblPassword(enablePasswordField2)}
              fullWidth
              value={data.password}
              variant="outlined"
              onChange={(e: any) =>
                handlePassword(e.target.value,"")
              }
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setenablePasswordField2(!enablePasswordField2)
                    }
                    edge="end"
                  >
                    {enablePasswordField2 ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                ),
              }}
            />

            {/* Confirm Password */}
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
              fullWidth
              value={data.setPassword}
              variant="outlined"
              onChange={(e: any) =>
                handleConfirmPassword(e.target.value, data.password)
              }
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setenablePasswordField(!enablePasswordField)
                    }
                    edge="end"
                  >
                    {enablePasswordField ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                ),
              }}
            />

            {/* Phone Number */}
            <Typography style={AllStyle.textStyle}>
              {config.phone_no} {importantField()}
            </Typography>
            <PhoneStyle
              style={{ marginBottom: !data.mobileNoError ? "16px" : 0 }}
              data-test-id="txtInputPhonenumber2"
              borderColor={handleColorPhone()}
              className="custominput"
              value={data.mobileNo}
              onChange={(val: any) => handlePhoneNumber(val)}
              defaultCountry="IN"
              countries={[]}
              international
            />

            {data.mobileNoError && (
              <Typography
                style={{ ...AllStyle.errorTextStyle, marginBottom: "16px" }}
              >
                Please enter a valid phone number
              </Typography>
            )}

            {/* Submit */}
            <ButtonStyle
              variant="contained"
              data-test-id="button"
              style={AllStyle.btnStyle}
              onClick={handleValidation}
            >
              {config.labelTitleSignUp}
            </ButtonStyle>

            {/* Already have account */}
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
