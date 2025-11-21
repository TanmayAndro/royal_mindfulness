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

export const ResetPassword = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isTeacher, setIsTeacher] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [count, setCount] = useState(5);
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

    if (isSuccessModalOpen) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      if (count === 0) {
        clearInterval(timer);
        window.location.href = "/login";
      }
      return () => clearInterval(timer);
    }
  }, [location.search, count, isSuccessModalOpen]);

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

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      setError("Password must be at least 8 characters long and contain at least one letter and one number");
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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}reset_password`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
            is_teacher: isTeacher,
            password: confirmPassword,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setConfirmPassword("");
          setPassword("");
          setIsSuccessModalOpen(true);
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
    <>
      <Grid container>
        <Login_register_firstPart />
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ display: "flex", justifyContent: "center" }} p={10}>
          <Box>
            <form onSubmit={handleSubmit} style={{ width: "80%" }}>
              <Typography style={AllStyle.heading}>Reset your password</Typography>

              <InputField
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

              <InputField
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

              {error && (
                <FormHelperText error sx={{ mb: 2 }}>
                  {error}
                </FormHelperText>
              )}

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
      <Dialog open={isSuccessModalOpen} disableEscapeKeyDown>
        <Box sx={{ padding: "3rem", textAlign: "center", boxShadow: 24, borderRadius: "10px" }}>
          <video src={"/resetGif.mp4"} autoPlay muted playsInline style={{ height: "130px", width: "130px" }} />
          <Typography variant="h4" sx={{ fontFamily: "Roboto", fontWeight: 600, fontSize: "19px", mb: 2 }}>
            Password Reset Successfully
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "16px" }}>
            You will be redirected to the login screen in {count}...
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

const AllStyle = {
  heading: {
    marginBottom: "2rem",
    color: "#0A2239",
    textAlign: "center" as "center",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "Lato",
    letterSpacing: "-0.12px",
  },
};

const InputField = styled(TextField)({
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
    color: "#334155",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CBD5E1",
    borderWidth: "1px",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 8px",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#DC2626",
    fontSize: "12px",
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: "18px",
  },
});