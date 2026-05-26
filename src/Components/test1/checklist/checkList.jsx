import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Checkbox,
} from "@mui/material";

import checklistbg from "../../../Assests/images/checklist_bg.jpg";

import ChecklistResultPanel from "./ChecklistResultPanel";

const statements = [
  "I can’t stop overthinking",
  "I feel anxious for no reason",
  "I can’t focus on anything",
  "I feel mentally exhausted",
  "My mood keeps changing",
];

const Checklist = () => {
  const [selected, setSelected] = useState([]);
  const [showPanel, setShowPanel] = useState(false);

  const handleToggle = (item) => {
    if (selected.includes(item)) {
      setSelected(
        selected.filter((value) => value !== item)
      );
    } else {
      setSelected([...selected, item]);
    }

    // Open result panel
    setShowPanel(true);
  };

  // SHOW RESULT PANEL
  if (showPanel) {
    return <ChecklistResultPanel />;
  }

  // SHOW CHECKLIST
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        width: "100%",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${checklistbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15, // 15% opacity
          zIndex: -1,
        },
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              color: "#1470af",
              fontWeight: 700,
              fontSize: {
                xs: "28px",
                sm: "40px",
              },
              lineHeight: 1.2,
              mb: 6,
            }}
          >
            What's Stressing You The Most Right Now?
          </Typography>

          {/* Checklist */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "450px",
              mx: "auto",
            }}
          >
            {statements.map((item, index) => (
              <Paper
                key={index}
                elevation={2}
                onClick={() => handleToggle(item)}
                sx={{
                  height: "62px",
                  borderRadius: "10px",
                  mb: 2,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  backgroundColor: "#f8f8f8",
                  boxShadow:
                    "0px 2px 6px rgba(0,0,0,0.15)",
                  transition: "0.2s ease",

                  "&:hover": {
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <Checkbox
                  checked={selected.includes(item)}
                  sx={{
                    color: "#a8a8a8",

                    "&.Mui-checked": {
                      color: "#1470af",
                    },
                  }}
                />

                <Typography
                  sx={{
                    color: "#1470af",
                    fontWeight: 700,
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                    },
                    ml: 1,
                    textAlign: "left",
                  }}
                >
                  {item}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Checklist;