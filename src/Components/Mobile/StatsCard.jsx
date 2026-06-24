// src/Components/mobile/StatsSection.tsx

import React from "react";
import { Box, Typography } from "@mui/material";

const StatsSection = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "calc(100% - 48px)",
          md: "900px",
        },

        mt: 6,

        background: "#0B67B2",

        borderRadius: "40px",

        // px: 3,
        py: 4,

        px: {
          xs: 0,
          sm: 3,
          md: 3,
        },

        mx: {
          xs: 3,
          md: "auto",
        },

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        boxShadow: "0px 8px 20px rgba(0,0,0,0.18)",

        position: "relative",

        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",

          right: "0px",

          top: "50%",

          transform: "translateY(-50%)",

          width: "100%",

          height: "4px",

          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)",

          filter: "blur(1px)",
        }}
      />
      {/* ITEM 1 */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "24px",
              sm: "32px",
            },
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          15,000+
        </Typography>

        <Typography
          sx={{
            mt: 2,

            color: "#fff",

            fontSize: {
              xs: "18px",
              sm: "22px",
            },

            fontWeight: 700,
          }}
        >
          Sessions
        </Typography>

        {/* DIVIDER */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",

            width: "2px",
            height: "80px",

            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)",
            filter: "blur(1px)",
          }}
        />
      </Box>

      {/* ITEM 2 */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "24px",
              sm: "32px",
            },
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          65+
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#fff",
            fontSize: {
              xs: "18px",
              sm: "22px",
            },
            fontWeight: 700,
          }}
        >
          Countries
        </Typography>

        {/* DIVIDER */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "2px",
            height: "80px",
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)",

            filter: "blur(1px)",
          }}
        />
      </Box>

      {/* ITEM 3 */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",

            fontSize: {
              xs: "24px",
              sm: "32px",
            },

            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          $19.83/
        </Typography>

        <Typography
          sx={{
            mt: 2,

            color: "#fff",

            fontSize: {
              xs: "18px",
              sm: "22px",
            },

            fontWeight: 700,
          }}
        >
          Session
        </Typography>
      </Box>
    </Box>
  );
};

// export default StatsSection;
export default React.memo(StatsSection);