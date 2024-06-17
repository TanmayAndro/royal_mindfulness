import React, { useState } from "react";
import "./login.css";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Dialog,
  IconButton,
  styled,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { facebook_logo, google_logo } from "../../assests";
import { Link } from "react-router-dom";
import Login_register_firstPart from "../../Components/login_register_firstPart";
import axios from "axios";
import { loginApi } from "../../API/ApiConfig";
import AlertComponent from "../../Components/alert";

const config = require("../../config");

export const SecondBox = styled(Box)({
  maxWidth: "360px",

  marginTop: "40px",
  "@media (max-width:390px)": {
    paddingInline: "10px",
  },
  "@media (max-width:320px)": {
    justifyContent: "center",
  },
});

export const ButtonStyle = styled(Button)({
  minWidth: "360px",
  "@media (max-width:380px)": {
    minWidth: "200px",
  },
});

export const FirstBOx = styled(Grid)({
  display: "flex",

  "@media (max-width:899px)": {
    display: "none",
  },
});

export const AllStyle = {
  smallHeading: {
    color: "#0A2239",
    marginBottom: "30px",
    fontWeight: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Lato",
  },
  errorTextStyle: {
    color: "#DC2626",
    fontSize: "12px",
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: "18px",
  },
  textStyle: {
    fontSize: "14px",
    fontWeight: 700,
    marginBottom: "4px",
    color: "#0A2239",
    fontFamily: "Lato",
    lineHeight: "22px",
  },

  boldStyle: {
    color: "00bdab",
    fontSize: "16px",
    fontFamily: "Lato",
    fontWeight: 700,
  },
  btnStyle: {
    borderRadius: "8px",
    height: "56px",
    lineHeight: "24px",
    background: "#050A44",
    textTransform: "inherit" as "inherit",
    color: "white",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 700,
    marginBottom: "30px",
  },
  popup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#0F172A",
    borderRadius: "4px",
    width: "362px",
    height: "42px",
    fontWeight: 400,
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: "16px",
    lineHeight: "24px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  heading: {
    color: "#0A2239",
    textAlign: "center" as "center",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "8px",
    fontFamily: "Lato",
    letterSpacing: "-0.12px",
  },

  secondBox: {
    flexDirection: "column" as "column",
    display: "flex",
    flexWrap: "Wrap" as "wrap",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState("");
  const fetchLogin = async (email:string, password:string) => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };

    try {
      console.log(process.env.REACT_APP_BASE_URL);
      
      const response = await axios.post(process.env.REACT_APP_BASE_URL + loginApi,data);
      navigate("/pricing-plans")
    } catch (err:any) {
      setErrorData(err?.response?.data?.message);
    }
  };

  const [data, setData] = useState({
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
    emailErrorMessage: "",
  });
  const [enablePasswordField, setenablePasswordField] = useState(true);
  const handleVisiblPassword = () => {
    return enablePasswordField ? "password" : "text";
  };
  const handlePassword = (value: string) => {
    setData({ ...data, password: value });
    if (value.trim() === "" || value.length < 8) {
      setData({ ...data, password: value, passwordError: true });
      return false;
    } else {
      setData({ ...data, password: value, passwordError: false });
      return true;
    }
  };
  const handleEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
      setData((prev) => ({
        ...prev,
        email: value,
        emailError: true,
        emailErrorMessage: "Enter a value",
      }));
      return false;
    } else if (!emailPattern.test(value)) {
      setData((prev) => ({
        ...prev,
        email: value,
        emailError: true,
        emailErrorMessage: "Email does not exist",
      }));
      return false;
    } else {
      setData((prev) => ({
        ...prev,
        email: value,
        emailError: false,
        emailErrorMessage: "",
      }));
      return true;
    }
  };
  const handleValidtion = () => {
    const resultPassword = handlePassword(data.password);
    const resultEmail = handleEmail(data.email);
    console.log(resultEmail, resultPassword);

    if (resultEmail && resultPassword) {
      fetchLogin(data.email, data.password);
    }
  };
  const handleClose=()=>{
    setErrorData("")
  }
  return (
    <MainGrid container>
      {errorData!="" && <AlertComponent errorData={errorData} handleClose={handleClose} type={"error"}/>}
      <Login_register_firstPart />
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
            {config.main_heading_login}
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

            <Typography style={AllStyle.textStyle}>{config.email}</Typography>
            <InputField
              placeholder={config.placeHolderEmail}
              error={data.emailError}
              variant="outlined"
              data-test-id="emailtest"
              value={data.email}
              onChange={(e) => {
                handleEmail(e.target.value);
              }}
              helperText={data.emailError && data.emailErrorMessage}
            />
            <Typography style={AllStyle.textStyle}>
              {config.password}
            </Typography>
            <InputField
              error={data.passwordError}
              helperText={data.passwordError && config.error_msg}
              style={{ marginBottom: "12px" }}
              placeholder={config.placeHolderPassword}
              data-test-id="txtInputPassword"
              type={handleVisiblPassword()}
              fullWidth={true}
              value={data.password}
              variant="outlined"
              onChange={(e: any) => {
                handlePassword(e.target.value);
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

            <ButtonStyle
              variant="contained"
              data-test-id="button"
              style={AllStyle.btnStyle}
              onClick={() => {
                handleValidtion();
              }}
            >
              {config.labelTitle}
            </ButtonStyle>
            <Typography
              style={{
                fontFamily: "Lato",
                fontWeight: 400,
                fontSize: "16px",
                color: "#0A2239",
                lineHeight: "19.2px",
              }}
            >
              {config.haveAccount}{" "}
              <Link
                to="/register"
                style={{
                  ...AllStyle.boldStyle,
                  cursor: "pointer",
                  lineHeight: "24px",
                  textDecoration: "none",
                }}
              >
                {config.labelTitleSignUp}
              </Link>
            </Typography>
          </SecondBox>
        </MainBox>
      </SecondGrid>
    </MainGrid>
  );
};

export const DiologStyle = styled(Dialog)({
  "& .MuiDialog-paperWidthSm": {
    maxWidth: "500px",
    minWidth: "500px",
    borderRadius: "8px 8px 32px 8px",
  },
  "@media (max-width:722px)": {
    "& .MuiDialog-paperWidthSm": {
      minWidth: "unset",
      borderRadius: "8px 8px 32px 8px",
    },
  },
});
export const MainGrid = styled(Grid)({
  minHeight: "calc(100vh - 180px)",
  maxHeight: "calc(100vh - 180px)",
  height: "100vh",
  "@media (max-width:899px)": {
    maxHeight: "unset",
    height: "100%",
  },
  "@media (max-width:722px)": {
    marginTop: "20px",
  },
});
export const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBlock: "auto",
  alignItems: "center",
  paddingBlock: "50px",

  "@media (max-width:959px)": {
    paddingTop: "25px",
    paddingBottom: "55px",
  },
  "@media (max-width:320px)": {
    alignItems: "center",
  },
});
export const SecondGrid = styled(Grid)({
  overflowY: "scroll",
  height: "calc(100vh - 180px)",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#848FAC80",
    borderRadius: "10px",
  },
  "@media (max-width:899px)": {
    height: "unset",
    overflowY: "unset",
  },
  "@media (max-width:450px)": {
    paddingInline: "20px",
  },
});
export const InputField = styled(TextField)(
  ({ disabled, textstyle, textColor }: any) => ({
    marginBottom: "16px",

    "& input::placeholder": {
      color: "#94A3B8",
      fontFamily: "Lato",
      fontSize: "16px",
      opacity: 1,
      fontWeight: 400,
      lineHeight: "19px",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#CBD5E1",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "1px",
        borderColor: "#CBD5E1",
      },
    },
    "& .MuiInputBase-root": {
      color: textColor ?? "#334155",
    },
    "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "#CBD5E1",
      borderWidth: "1px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CBD5E1",
      borderWidth: "1px",
      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 8px",
    },
    "& .MuiInputBase-input[type='date']": {
      lineHeight: "19.2px",
      textTransform: "uppercase",
      color: textstyle === true ? "#94A3B8" : "#334155",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: disabled ? "#F87171" : "#DC2626",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#DC2626",
      fontSize: "12px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "18px",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: "0px",
      marginRight: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #CBD5E1",
    },
  })
);
export default Login;
