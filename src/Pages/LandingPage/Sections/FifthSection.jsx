import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import fifthImg from '../../../Assests/fifthImg.png'

export const FifthSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#DAE2CB",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src={fifthImg} alt="Fifth Image" style={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              style={{
                fontSize: "46px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Online Traditional
              <br /> Yoga Meditation
            </Typography>
            <Typography
              variant="body1"
              style={{ display: "flex", justifyContent: "center" }}
            >
              No.1 Website to learn Meditation Online
            </Typography>
            <Button
              style={{
                marginTop: "3rem",
                borderRadius: "34px",
                backgroundColor: "#0F2E15",
                color: "white",
                width: "130px",
                marginBottom: "2rem",
              }}
            >
              Join Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
