// src/Components/Mobile/TriangleDivider.tsx

import React from "react";

import { Box } from "@mui/material";

import herobg from "../../Assests/images/mobile/Rectangle16.png";

const TriangleDivider = () => {
  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",

        height: "120px",

        overflow: "hidden",

      }}
    >
      {/* TOP TRIANGLE IMAGE */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: 0,

          width: "100%",

          height: "100%",

          zIndex: 2,

          clipPath:
            "polygon(0 0, 100% 0, 50% 78%)",

          "&::before": {
            content: '""',

            position: "absolute",

            inset: 0,

            // backgroundImage: `url(${herobg})`,

            backgroundSize: "cover",

            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",

            opacity: 0.25,

            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

export default TriangleDivider;
