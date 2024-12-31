import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import signUp from "../../../Assests/signUpImg.png";
import React, { useState } from "react";

export const SignupCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    interest: "Yoga Nidra",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: { xs: "1rem", md: "2rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                fontWeight: "700",
                color: "#0F2E15",
                fontFamily: "Instrument sans",
              }}
            >
              Sign up
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "600",
                color: "#0F2E15",
                fontFamily: "Instrument sans",
                textAlign: "center",
              }}
            >
              for free Yoga Nidra / Antar mouna session now
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Full Name and Phone Number */}
                <Grid item xs={12} sm={6}>
                  <Typography>Full Name</Typography>
                  <TextField
                    required
                    id="fullName"
                    name="fullName"
                    autoComplete="family-name"
                    variant="outlined"
                    value={formData.fullName}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#DAE2CB",
                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>Phone Number</Typography>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="tel"
                    variant="outlined"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#DAE2CB",
                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>

                {/* Email and Interest */}
                <Grid item xs={12} sm={6}>
                  <Typography>Email</Typography>
                  <TextField
                    required
                    id="email"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#DAE2CB",
                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>What are you interested in?</Typography>
                  <Select
                    fullWidth
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      backgroundColor: "#DAE2CB",
                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  >
                    <MenuItem value="Yoga Nidra">Yoga Nidra</MenuItem>
                    <MenuItem value="Antar Mouna">Antar Mouna</MenuItem>
                  </Select>
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <Typography>Anything to say!</Typography>
                  <TextField
                    fullWidth
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#DAE2CB",
                      "& .MuiInputLabel-root": {
                        position: "static",
                        transform: "none",
                        color: "#000",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: "5rem",
                      borderRadius: "8px",
                      width: "100%",
                      backgroundColor: "#0F2E15",
                      "&:hover": {
                        backgroundColor: "#0F2E15",
                        "& .MuiInputLabel-root": {
                          position: "static",
                          transform: "none",
                          color: "#000",
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "transparent",
                          },
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
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
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
    </Box>
  );
};
