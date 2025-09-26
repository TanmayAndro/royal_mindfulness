import React from "react";
import { Box } from "@mui/material";
import { FirstBOx } from "../Pages/Login/login";
import { royal_logo } from "../assests";

const Login_register_firstPart = () => {
  return (
    <FirstBOx
      item
      xs={12}
      sm={12}
      md={5}
      lg={5}
      
    >
      <Box style={{ width: "100%" }}>
        <img
          src={royal_logo}
          alt="hello"
          style={{
            width: "100%",
            height: "100%",
             objectFit: "cover",
            
            
          }}
        />
      </Box>
    </FirstBOx>
  );
};

export default Login_register_firstPart;
