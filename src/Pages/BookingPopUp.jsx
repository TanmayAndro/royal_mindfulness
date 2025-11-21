import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import JitsiComponent from "../Components/Jitsimeeting";

const BookingPopup = ({ open, onClose, bookingDetails, showMeeting, onJoinNow }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (!bookingDetails) {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Session Details
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>Loading session details...</Typography>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isFullscreen}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ pr: 6 }}>
        {/* Optional title */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 48,
            top: 8,
            color: "white",
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "darkred",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          aria-label="fullscreen"
          onClick={() => setIsFullscreen(!isFullscreen)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {!showMeeting ? (
          <Button
            onClick={onJoinNow}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Join Now
          </Button>
        ) : (
          <Box sx={{ height: isFullscreen ? "100vh" : "70vh", mt: 2 }}>
            <JitsiComponent roomTime={bookingDetails.sessionTime} />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingPopup;



