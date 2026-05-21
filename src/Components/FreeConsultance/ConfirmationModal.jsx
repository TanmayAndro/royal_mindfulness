import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import free_consulation_bg from "../../Assests/free_consulation_bg.jpg" // 🆕 BACKGROUND IMAGE IMPOR     T

const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        backgroundImage: `url(${free_consulation_bg})`, // Direct variable ko backticks `` ke andar call kiya
        backgroundSize: "cover",                       // Poori screen ko stretch-free cover karne ke liye
        backgroundPosition: "center",                  // Image ko center align rakhne ke liye
        backgroundRepeat: "no-repeat",                  // Repeat strictly block karne ke liye
        // bgcolor: "#f0f4f8",   
      }}
    >
      <DialogContent sx={{ py: 5, textAlign: "center", bgcolor: "#f0f4f8" }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color="#1470af"
          mb={2}
        >
          Are you sure?
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={4}
        >
          If you would like to reschedule, now is the best time to do it. Your mental fitness expert will be waiting to guide you through your session.
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          flexWrap="wrap"
        >
          <Button
            variant="outlined"
            onClick={onClose}
            disabled={loading}
            sx={{
              "&:hover": {
                bgcolor: "#0e5a8d",
                color: "#fff",
              },
            }}
          >
            No, I Want to Reschedule
          </Button>

          <Button
            variant="contained"
            onClick={onConfirm}
            disabled={loading}
            sx={{
              bgcolor: "#1470af",
              "&:hover": {
                bgcolor: "#0e5a8d",
                color: "#fff",
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