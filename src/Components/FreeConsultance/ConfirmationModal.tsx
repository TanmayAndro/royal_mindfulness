import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import consulation_bg from "../../Assests/images/consulation_bg.jpg";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
  loading = false,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md" // Breakpoint scope ko bada rakha taaki custom width limit stretch ho sake
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "28px", 
          boxShadow: "0px 24px 60px rgba(0, 0, 0, 0.08)", 
          overflow: "hidden",
          mx: { xs: 2, sm: "auto" },
          
          /* FIX: Desktop view (900px+) par exact 850px width render karne ke liye */
          width: "100%",
          maxWidth: { 
            xs: "100%",       // Mobile view
            sm: "550px",      // Tablet view
            md: "850px"       // Laptop/Desktop view (900px and above) par exact 850px
          }, 
        }
      }}
    >
      <DialogContent 
        sx={{ 
          py: { xs: 5, md: 7 }, 
          px: { xs: 3, md: 8 }, 
          textAlign: "center", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",

          /* Exactly 25% Opacity Background Layer */
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${consulation_bg})`, 
            backgroundSize: "cover",                       
            backgroundPosition: "center",                  
            backgroundRepeat: "no-repeat",
            opacity: 0.25, // Placed exactly at 25%
            zIndex: 1,                 
          },

          /* Pushes text elements context forward */
          "& > *": {
            position: "relative",
            zIndex: 2,                 
          }
        }}
      >
        {/* Main Heading Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "#1470af",
            mb: 2.5,
            fontSize: { xs: "1.65rem", md: "2.4rem" }, 
            letterSpacing: "-0.5px",
          }}
        >
          Are you sure?
        </Typography>

        {/* Subtext Description (Content boundary matches 850px wide container beautifully) */}
        <Typography
          sx={{
            color: "#556987", 
            mb: 5,
            lineHeight: 1.65,
            maxWidth: "600px", // Card size bada hone ke sath text content bound bhi responsive stretch kiya
            fontSize: { xs: "0.95rem", md: "1.1rem" }, 
          }}
        >
          If you would like to reschedule, now is the best time to do it. Your mental fitness expert will be waiting to guide you through your session.
        </Typography>

        {/* Buttons Action Wrapper */}
       <Box
  sx={{
    display: "flex",
    // Mobile (xs) aur Tablet/Desktop (sm) dono par "row" rakha hai taaki buttons ek hi line me aayein
    flexDirection: "row", 
    justifyContent: "center",
    gap: 2.5,
    width: "100%",
    maxWidth: "540px", 
    // Touch optimization for mobile screen buttons width control
    "& > button, & > a": {
      flex: 1, // Dono buttons barabar width (50% - 50%) le lenge
      minWidth: "0px" // Text overflow hone par layout break nahi karega
    }
  }}
>
          {/* Action: Secondary Reschedule */}
          <Button
            variant="outlined"
            onClick={onClose}
            disabled={loading}
            fullWidth
            sx={{
              py: 1.8, 
              px: 3,
              borderRadius: "14px",
              borderColor: "#1470af",
              color: "#1470af",
              fontWeight: 700,
              textTransform: "none", 
              fontSize: "1rem",
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "#0e5a8d",
                bgcolor: "rgba(20, 112, 175, 0.04)",
              },
            }}
          >
            No, I Want to Reschedule
          </Button>

          {/* Action: Primary Confirm */}
          <Button
            variant="contained"
            onClick={onConfirm}
            disabled={loading}
            fullWidth
            sx={{
              py: 1.8,
              px: 3,
              borderRadius: "14px",
              bgcolor: "#1470af",
              color: "#fff",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0px 6px 18px rgba(20, 112, 175, 0.2)",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "#0e5a8d",
                boxShadow: "0px 8px 22px rgba(14, 90, 141, 0.3)",
              },
            }}
          >
            Yes, I’ll Be Available
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;