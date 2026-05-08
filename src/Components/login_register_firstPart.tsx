import React from "react";
import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { FirstBOx } from "../Pages/Login/login";

const Login_register_firstPart = () => {
  return (
    <FirstBOx
      item
      xs={12}
      sm={12}
      md={5}
      lg={5}
      sx={{
        
      }}
    >
      <Box
        sx={{
         width: { md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", 
          bgcolor: "#1470AF",
          p: 4,
          color: "#fff",
          minHeight: "700px"
        }}
      >
        {/* TOP CONTENT */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.5rem", md: "4rem" },
            }}
          >
            <Typewriter
              words={[
                "Daily guided sessions",
                "Personal mental fitness trainer",
                "Real emotional strength",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </Typography>
        </Box>

        {/* ✅ FIXED BOTTOM TEXT */}
        <Typography
          variant="h6"
          sx={{
            lineHeight: 1.2,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Log in to continue your training.
        </Typography>
      </Box>
    </FirstBOx>
  );
};

export default Login_register_firstPart;