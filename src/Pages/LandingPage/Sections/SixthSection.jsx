import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import sixthImg from "../../../Assests/price.png";

export const SixthSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <Box
        component="img"
        src={sixthImg}
        alt="Your Image"
        sx={{
          width: "100%",
          height: "auto",
          "@media (max-width: 600px)": {
            height: "200px",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          padding: "20px",
          "@media (max-width: 600px)": {
            left:'5%'
          },
        }}
      >
        <Typography
          variant="h4"
          color="black"
          fontSize={{ xs: "22px", sm: "30px", md: "50px" }}
          fontWeight="600"
          fontFamily="Philosopher"
        >
          Yes! <br />
          It's affordable.
        </Typography>
        <Typography
          variant="h4"
          color="black"
          fontSize={{ xs: "20px", sm: "30px", md: "66px" }}
          fontWeight="700"
          fontFamily="Instrument Sans"
          mt={2}
        >
          $7 Only
        </Typography>
        <Button
          sx={{
            marginTop: "2rem",
            backgroundColor: "#0F2E15",
            borderRadius: "34px",
            color: "white",
            width: "160px",
            "&:hover": {
              backgroundColor: "#0F2E15",
            },
            "@media (max-width: 600px)": {
              width: "100px",
            },
          }}
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};
