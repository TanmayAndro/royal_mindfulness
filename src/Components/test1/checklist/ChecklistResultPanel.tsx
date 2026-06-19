import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import checklistbg from "../../../Assests/images/checklist_bg.webp";
import { useNavigate } from "react-router-dom";

interface ChecklistResultPanelProps {
  open: boolean;
}



const ChecklistResultPanel: React.FC<ChecklistResultPanelProps> = ({
  open,
}) => {

  const navigate = useNavigate();
  return (
    <>
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
            opacity: 0.15,
            zIndex: -1,
          },
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              maxWidth: "850px",
              mx: "auto",
              py: { xs: 5, md: 10 },
            }}
          >
            <Typography
              sx={{
                color: "#1470af",
                fontWeight: 700, // bold text
                fontSize: {
                  xs: "28px",
                  sm: "40px",
                  md: "40px",
                },
                lineHeight: 1.2,
                mb: 6,
              }}
            >
              No matter what you’re facing, you don’t have to face it alone. Our
              Fitness experts are here to support you.
            </Typography>

            {/* Buttons Container*/}
            <Box>
              <Button
                variant="contained"
                onClick={()=>{
                  navigate("/free_consultation")
                }}
                
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  padding: "12px 50px",
                  borderRadius: "8px",
                  textTransform: "none",
                  bgcolor: "#1470AF",
                  color: "#FFFFFF",
                }}
              >
               Connect with Our Experts
              </Button> 

            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default ChecklistResultPanel;
