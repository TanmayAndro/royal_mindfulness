import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login_register_firstPart from "../../Components/login_register_firstPart";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  Box,
  Dialog,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import axios from "axios";
const config = require("../../config");

export const ResetPassword = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isTeacher, setIsTeacher] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenValue = params.get("token");
    const isTeacherValue = params.get("is_teacher");

    if (!tokenValue || !isTeacherValue) {
      alert("Invalid or missing reset link!");
      window.location.href = "*";
      return;
    }

    setToken(tokenValue);
    setIsTeacher(isTeacherValue);

    console.log("token:", tokenValue, "is_teacher:", isTeacherValue); // ✅ Logs correct values
  }, [location.search]);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token || !isTeacher) {
      alert("Invalid request! Missing token or user type.");
      return;
    }

    if (password === confirmPassword && !error) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/reset_password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: token,
              is_teacher: isTeacher,
              password: confirmPassword,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert("Password reset successful!");
          console.log("API Response:", data);
        } else {
          alert(data.message || "Failed to reset password.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong! Please try again.");
      }
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <Grid container>
      {/* Left Grid */}
      <Login_register_firstPart />

      {/* Right Grid */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        style={{ display: "flex", justifyContent: "center" }}
        p={10}
      >
        <Box>
          <form onSubmit={handleSubmit} style={{ width: "80%" }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              Reset your password
            </Typography>

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Error Message */}
            {error && (
              <FormHelperText error sx={{ mb: 2 }}>
                {error}
              </FormHelperText>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#1470AF",
                "&:hover": { backgroundColor: "#115f8c" },
              }}
            >
              Reset Password
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

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
    color: "#1470AF",
    fontSize: "16px",
    fontFamily: "Lato",
    fontWeight: 700,
  },
  btnStyle: {
    borderRadius: "8px",
    height: "56px",
    lineHeight: "24px",
    background: "#1470AF",
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
