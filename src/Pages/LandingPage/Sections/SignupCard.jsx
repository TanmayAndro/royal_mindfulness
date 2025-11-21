import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Modal,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import signUp from "../../../Assests/signUpImg.png";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputStyle = {
  borderRadius: "8px",
  backgroundColor: "#EAEAEE",
  "& .MuiInputLabel-root": {
    position: "static",
    transform: "none",
    color: "#000",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
};

export const SignupCard = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    interested_in: "Antra Mouna",
    anything_to_say: "",
    address_line1: "",
    address_line2: "",
    nationality: "",
    pin_code: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://deedee-unchainable-optionally.ngrok-free.dev/customer_supports",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        setOpenModal(true);
        setFormData({
          full_name: "",
          phone_number: "",
          email: "",
          interested_in: "",
          anything_to_say: "",
          address_line1: "",
          address_line2: "",
          nationality: "",
          pin_code: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to submit the form. Try again!"
      );
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
    <Box sx={{ width: "100%", height: "100%" }}>
      <ToastContainer />
      <Grid container alignItems="center" sx={{ minHeight: { md: "80vh" } }}>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: { xs: "1rem", md: "2rem" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: "1.5rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                fontWeight: "700",
                color: "#1470AF",
                fontFamily: "Instrument sans",
              }}
            >
              Subscribe to Our Email List
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* form inputs here, unchanged */}
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <Typography>Full Name</Typography>
                      <TextField
                        required
                        id="full_name"
                        name="full_name"
                        variant="outlined"
                        value={formData.full_name}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>Email</Typography>
                      <TextField
                        required
                        id="email"
                        name="email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>Phone Number</Typography>
                      <TextField
                        required
                        id="phone_number"
                        name="phone_number"
                        variant="outlined"
                        value={formData.phone_number}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <Typography>Anything to say!</Typography>
                      <TextField
                        name="anything_to_say"
                        multiline
                        rows={9.3}
                        variant="outlined"
                        value={formData.anything_to_say}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                {/* Checkbox */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                        color="primary"
                      />
                    }
                    label="Yes,I want my free journal"
                  />
                </Grid>

                {/* Conditional Fields */}
                {checked && (
                  <>
                    <Grid item xs={12} md={6}>
                      <Typography>Address Line 1</Typography>
                      <TextField
                        name="address_line1"
                        value={formData.address_line1}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography>Address Line 2</Typography>
                      <TextField
                        name="address_line2"
                        value={formData.address_line2}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography>Nationality</Typography>
                      <TextField
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography>Pin Code</Typography>
                      <TextField
                        name="pin_code"
                        value={formData.pin_code}
                        onChange={handleChange}
                        fullWidth
                        sx={inputStyle}
                      />
                    </Grid>
                  </>
                )}

                {/* Submit Button */}
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: "2rem",
                      borderRadius: "8px",
                      minWidth: "200px",
                      height: "45px",
                      backgroundColor: "#1470AF",
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "#1470AF",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "1rem", md: "0" },
            }}
          >
            <img
              src={signUp}
              alt="Sign Up"
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Success Modal unchanged */}
      {/* ... */}
    </Box>
      {/* <Box sx={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100vw",
          height: "100px",
        }}
      >
        <defs>
          <linearGradient id="darkGreenGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#145A32" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#196F3D" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="darkGreenGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#117A65" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0E6251" stopOpacity="0.9" />
          </linearGradient>
        </defs>
    
      
        <path
          fill="url(#darkGreenGrad1)"
          d="M0,50 C400,90 1040,0 1440,40 L1440,150 L0,150 Z"
        />
    
       
        <path
          fill="#5B9DE8"
          d="M0,30 C360,60 1080,20 1440,50 L1440,150 L0,150 Z"
        />
      </svg>
    </Box> */}
    </>
  );
};
