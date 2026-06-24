import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import {
  AllStyle,
  ButtonStyle,
  InputField,
  MainBox,
  MainGrid,
  SecondBox,
  SecondGrid,
} from "../Login/login";

// import metadata from "react-phone-number-input/metadata.min.json";
import axios from "axios";
import {
  getCountries,
  getCountryCallingCode
} from "libphonenumber-js";
import en from "react-phone-number-input/locale/en.json";
import Login_register_firstPart from "../../Components/login_register_firstPart";
const config = require("../../config");

interface RegisterProps {
  closeModal?: () => void;
  switchToLogin?: () => void;
}

const Register: React.FC<RegisterProps> = ({ closeModal, switchToLogin }) => {
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
    country: "",
    passwordErrorMessage: "",
  });

  const [enablePasswordField, setenablePasswordField] = useState(true);
  const [enablePasswordField2, setenablePasswordField2] = useState(true);
  

  const fetchSignup = async (
    email: string,
    password: string,
    newPassword: string,
    mobileNO: string,
    firstName: string,
    lastName: string,
  ) => {
    console.log("called this fun:");
    // ✅ backend expects full_name, not first_name/last_name separately
    const timestamp = Date.now();
    const safeName = `${firstName}-${lastName}`
      .replace(/\s+/g, "-")
      .toLowerCase();
    const meetingRoom = `deedee-user-${safeName}-${timestamp}`;
    const meetingLink = `https://meet.jit.si/${meetingRoom}`;

    // ✅ Prepare payload for backend
    const payload = {
      user: {
        email,
        password,
        first_name: `${firstName}`.trim(),
        last_name: `${lastName}`.trim(),
        country: data?.country,
        meeting_link: meetingLink,
      },
    };

    try {
      const response = await axios.post(
        // "https://deedee-unchainable-optionally.ngrok-free.dev/users",
        `${process.env.REACT_APP_BASE_URL}/users`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      setSuccessData("Your account was created successfully!");
      if (response.status === 201) {
        console.log("Registration successful");

        // 🔹 If modal is open → switch inside modal
        if (switchToLogin) {
          setTimeout(() => {
            switchToLogin();
          }, 1500);
        }

        // 🔹 If user is on /signup page → navigate
        else {
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      }

      // Optional: print meeting link
    } catch (err: any) {
      console.error("Signup error:", err.response?.data || err.message);
      setErrorData(
        err?.response?.data?.errors?.[0]?.account ||
          err?.response?.data?.message ||
          "Something went wrong, please try again.",
      );
    }
  };

  // Reverse map: find the country with this calling code
  const getCountryNameByCallingCode = (callingCode: string) => {
    return "Unknown Country";
  };

  // Example usage
  console.log(getCountryNameByCallingCode("+91")); // "India"
  console.log(getCountryNameByCallingCode("+971")); // "United Arab Emirates"
  console.log(getCountryNameByCallingCode("+1"));
  const handleEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    console.log(countryName, "countryName>>>");
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

  const handleColorPhone = () => (data.mobileNoError ? "#F87171" : "#CBD5E1");

  const handleValidationFirstLast = (
    fieldName: string,
    value: string,
    maxLength: number,
  ) => {
    let errorMessage = "";

    if (value.trim() === "") {
      console.log(" in if condition");
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

  const handlePassword = (value: any, fields: string) => {
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
      20,
    );
    const lastNameError = handleValidationFirstLast(
      "lastName",
      data.lastName,
      20,
    );
    const mobileNoError = handlePhoneNumber(data.mobileNo);
    const passwordError: any = handlePassword(data.password, "password");
    const setPasswordError = handleConfirmPassword(
      data.setPassword,
      data.password,
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
        data.lastName,
      );
    }
  };

  const handleClose = () => {
    setErrorData("");
    setSuccessData("");
  };

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); //

  return (
  //  <MainGrid
  //     container
  //     sx={{
  //       height: { xs: "auto", md: "100vh" }, // Auto height on mobile to allow natural scroll
  //       minHeight: "100vh",
  //       overflowX: "hidden",
  //       overflowY: { xs: "auto", md: "hidden" }, // Scroll on mobile, locked on desktop
  //     }}
  //   >
  //     {/* LEFT SIDE (HIDE ON MOBILE/TABLET) */}
  //     {!isMobileOrTablet && <Login_register_firstPart />}

  //     {/* ALERT MESSAGES */}
  //     <Box sx={{ position: "fixed", top: 20, right: 20, zIndex: 3000 }}>
  //       {errorData && <AlertComponent errorData={errorData} handleClose={handleClose} type="error" />}
  //       {successData && <AlertComponent errorData={successData} handleClose={handleClose} type="success" />}
  //     </Box>

  //     {/* RIGHT SIDE (SIGNUP FORM) */}
  //     <SecondGrid
  //       item
  //       xs={12}
  //       md={6}
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: { xs: "flex-start", md: "center" }, // Align to top on mobile for scrolling
  //         height: { xs: "auto", md: "100%" },
  //         overflowY: { xs: "visible", md: "auto" }, // Allow scroll inside grid on desktop
  //         padding: { xs: "20px 15px", md: "40px 25px" },
  //         "&::-webkit-scrollbar": { display: "none" },
  //       }}
  //     >
  //       <MainBox 
  //         sx={{ 
  //           width: "100%", 
  //           maxWidth: "450px", // Prevents form from becoming too wide on tablets
  //           margin: "0 auto" 
  //         }}
  //       >
  //         <Typography style={AllStyle.heading}>
  //           {config.signHeadingName}
  //         </Typography>

  //         <SecondBox
  //           sx={{
  //             width: "100%",
  //             marginTop: "20px",
  //             display: "flex",
  //             flexDirection: "column",
  //             gap: "5px" // Adds consistent spacing between fields
  //           }}
  //         >
  //           <Typography style={AllStyle.smallHeading}>
  //             {config.welcomeHeading}
  //           </Typography>

  //           {/* Form Fields Start */}
  //           <Typography style={AllStyle.textStyle}>
  //             {config.email} {importantField()}
  //           </Typography>
  //           <InputField
  //             placeholder={config.placeHolderEmail}
  //             variant="outlined"
  //             value={data.email}
  //             onChange={(e) => handleEmail(e.target.value)}
  //             error={data.emailError}
  //             helperText={data.emailError && data.emailErrorMessage}
  //           />

  //           {/* First Name */}
  //           <Typography style={AllStyle.textStyle}>
  //             {config.first_name} {importantField()}
  //           </Typography>
  //           <InputField
  //             placeholder={config.first_name_placeholder}
  //             value={data.firstName}
  //             onChange={(e) => handleValidationFirstLast("firstName", e.target.value, 20)}
  //             error={data.firstNameError}
  //             helperText={data.firstNameError && config.error_msg}
  //           />

  //           {/* Last Name */}
  //           <Typography style={AllStyle.textStyle}>
  //             {config.last_name} {importantField()}
  //           </Typography>
  //           <InputField
  //             placeholder={config.last_name_placeholder}
  //             onChange={(e) => handleValidationFirstLast("lastName", e.target.value, 20)}
  //             error={data.lastNameError}
  //             value={data.lastName}
  //             helperText={data.lastNameError && config.error_msg}
  //           />

  //           {/* Password */}
  //           <Typography style={AllStyle.textStyle}>
  //             {config.password} {importantField()}
  //           </Typography>
  //           <InputField
  //             error={data.passwordError}
  //             helperText={data.passwordError ? data.passwordErrorMessage : ""}
  //             placeholder={config.placeHolderPassword}
  //             type={handleVisiblPassword(enablePasswordField2)}
  //             fullWidth
  //             value={data.password}
  //             onChange={(e) => handlePassword(e.target.value, "")}
  //             InputProps={{
  //               endAdornment: (
  //                 <IconButton onClick={() => setenablePasswordField2(!enablePasswordField2)}>
  //                   {enablePasswordField2 ? <VisibilityOff /> : <Visibility />}
  //                 </IconButton>
  //               ),
  //             }}
  //           />

  //           {/* Confirm Password */}
  //           <Typography style={AllStyle.textStyle}>
  //             {config.confirm_password} {importantField()}
  //           </Typography>
  //           <InputField
  //             error={data.setPasswordError}
  //             helperText={data.setPasswordError ? "Passwords do not match" : ""}
  //             placeholder={config.placeHolderPassword}
  //             type={handleVisiblPassword(enablePasswordField)}
  //             fullWidth
  //             value={data.setPassword}
  //             onChange={(e) => handleConfirmPassword(e.target.value, data.password)}
  //             InputProps={{
  //               endAdornment: (
  //                 <IconButton onClick={() => setenablePasswordField(!enablePasswordField)}>
  //                   {enablePasswordField ? <VisibilityOff /> : <Visibility />}
  //                 </IconButton>
  //               ),
  //             }}
  //           />

  //           {/* Phone */}
  //           <Typography style={AllStyle.textStyle}>
  //             {config.phone_no} {importantField()}
  //           </Typography>
  //           <PhoneStyle
  //             borderColor={data.mobileNoError ? "#FF5E5B" : "#dddfe2"}
  //             value={data.mobileNo} 
  //             onChange={(val) => handlePhoneNumber(val)}
  //             defaultCountry="IN"
  //             international
  //           />
  //           {data.mobileNoError && (
  //             <Typography style={{ ...AllStyle.errorTextStyle, color: 'red', fontSize: '12px' }}>
  //               Please enter a valid phone number
  //             </Typography>
  //           )}

  //           {/* Submit */}
  //           <ButtonStyle
  //             variant="contained"
  //             sx={{ ...AllStyle.btnStyle, mt: 2, mb: 2 }}
  //             onClick={() => {
  //               handleValidation();
  //               trackEvent("Signup ", "Click", `Register`);
  //             }}
  //           >
  //             {config.labelTitleSignUp}
  //           </ButtonStyle>

  //           {/* Already have account */}
  //           <Typography align="center" sx={{ fontSize: "14px", color: "#0A2239", mb: 4 }}>
  //             {config.lable_already_signup}{" "}
  //             <span
  //               onClick={switchToLogin}
  //               style={{ ...AllStyle.boldStyle, cursor: "pointer", color: "#1470AF" }}
  //             >
  //               {config.labelTitle}
  //             </span>
  //           </Typography>
  //         </SecondBox>
  //       </MainBox>
  //     </SecondGrid>
  //   </MainGrid>
  <MainGrid
  container
  sx={{
    // CRITICAL: Change height from 100% to min-height for mobile
    height: { xs: "auto", md: "100vh" }, 
    minHeight: "100vh",
    // CRITICAL: Allow the whole page to scroll on mobile
    overflowY: { xs: "visible", md: "hidden" }, 
    overflowX: "hidden",
    position: "relative",
    backgroundColor: "#fff",
  }}
>
  {/* LEFT SIDE (Hides on mobile) */}
  {!isMobileOrTablet && <Login_register_firstPart />}

  {/* RIGHT SIDE (SIGNUP FORM) */}
  <SecondGrid
  item
  xs={12}
  md={6}
  className="hide-scrollbar" // Add the class here
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: { xs: "flex-start", md: "center" },
    alignItems: "center",
    height: { xs: "auto", md: "100vh" },
    overflowY: "auto", // Functional scrolling
    padding: { xs: "20px 20px 60px 20px", md: "40px" },
    
    /* Inline alternative if you don't want to use a CSS class */
    "&::-webkit-scrollbar": { display: "none" },
    "scrollbarWidth": "none",
    "msOverflowStyle": "none",
  }}
>
  {/* Form content */}
    <MainBox 
      sx={{ 
        width: "100%", 
        maxWidth: "400px", 
        // Remove any fixed height that might be coming from Login/login.js
        height: "auto !important" 
      }}
    >
      <Typography style={AllStyle.heading}>
        {config.signHeadingName}
      </Typography>

      <SecondBox
        sx={{
          width: "100%",
          marginTop: "10px",
          // Force child elements to flow naturally
          height: "auto !important",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography style={AllStyle.smallHeading}>
          {config.welcomeHeading}
        </Typography>

        {/* --- FORM FIELDS START --- */}
        {/* Email */}
        <Typography style={AllStyle.textStyle}>
          {config.email} {importantField()}
        </Typography>
        <InputField
          placeholder={config.placeHolderEmail}
          variant="outlined"
          value={data.email}
          onChange={(e) => handleEmail(e.target.value)}
          error={data.emailError}
          helperText={data.emailError && data.emailErrorMessage}
        />

        {/* Name Fields */}
        <Typography style={AllStyle.textStyle}>
          {config.first_name} {importantField()}
        </Typography>
        <InputField
          placeholder={config.first_name_placeholder}
          value={data.firstName}
          onChange={(e) => handleValidationFirstLast("firstName", e.target.value, 20)}
          error={data.firstNameError}
        />

        <Typography style={AllStyle.textStyle}>
          {config.last_name} {importantField()}
        </Typography>
        <InputField
          placeholder={config.last_name_placeholder}
          value={data.lastName}
          onChange={(e) => handleValidationFirstLast("lastName", e.target.value, 20)}
          error={data.lastNameError}
        />

        {/* Passwords */}
        <Typography style={AllStyle.textStyle}>
          {config.password} {importantField()}
        </Typography>
        <InputField
          error={data.passwordError}
          type={handleVisiblPassword(enablePasswordField2)}
          value={data.password}
          onChange={(e) => handlePassword(e.target.value, "")}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setenablePasswordField2(!enablePasswordField2)}>
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
          type={handleVisiblPassword(enablePasswordField)}
          value={data.setPassword}
          onChange={(e) => handleConfirmPassword(e.target.value, data.password)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setenablePasswordField(!enablePasswordField)}>
                {enablePasswordField ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        {/* Phone */}
        <Typography style={AllStyle.textStyle}>
          {config.phone_no} {importantField()}
        </Typography>
        <PhoneStyle
          borderColor={data.mobileNoError ? "#FF5E5B" : "#dddfe2"}
          value={data.mobileNo} 
          onChange={(val) => handlePhoneNumber(val)}
          defaultCountry="IN"
          international
        />

        {/* Action Button */}
        <ButtonStyle
          variant="contained"
          sx={{ 
            ...AllStyle.btnStyle, 
            mt: 3, 
            mb: 2,
            backgroundColor: "#1470AF !important" 
          }}
          onClick={handleValidation}
        >
          {config.labelTitleSignUp}
        </ButtonStyle>

        <Typography align="center" sx={{ mb: 4 }}>
          {config.lable_already_signup}{" "}
          <span onClick={switchToLogin} style={{ cursor: "pointer", color: "#1470AF", fontWeight: "bold" }}>
            {config.labelTitle}
          </span>
        </Typography>
      </SecondBox>
    </MainBox>
  </SecondGrid>
</MainGrid>
  );
};

export const PhoneStyle = styled(PhoneInput)(({ borderColor, theme }: any) => ({
  border: `1px solid ${borderColor ?? "#dddfe2"}`,
  borderRadius: 8,

  // ✅ responsive height
  height: "auto",
  minHeight: 41,

  zIndex: 1,
  position: "relative",
  display: "flex",
  alignItems: "center",

  // ✅ responsive padding
  padding: "6px 10px",

  width: "100%", // ✅ IMPORTANT

  "& input": {
    border: "none",
    width: "100%", // ✅ full width
    fontSize: "16px",
  },

  "& input:focus": {
    border: "none",
    outline: "none",
  },

  "& .PhoneInputInput": {
    color: "#334155",
    fontSize: "16px",
    fontWeight: 400,
    background: "transparent",
    lineHeight: "24px",
    width: "100%", // ✅ IMPORTANT
  },

  "& input:focus-visible": {
    border: "none",
    outline: "none",
  },

  // ✅ mobile improvement
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "8px",
  },
}));

export default Register;
