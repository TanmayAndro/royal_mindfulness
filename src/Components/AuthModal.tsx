import React, { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultView?: "login" | "register";
}

const AuthModal: React.FC<Props> = ({ open, onClose, defaultView = "login" }) => {
  const [view, setView] = useState<"login" | "register">(defaultView);

  const switchToRegister = () => setView("register");
  const switchToLogin = () => setView("login");

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      // Fix: Removed trapFocus, and kept these to handle interaction
      disableEnforceFocus={false} 
      disableRestoreFocus={false}
      sx={{ 
        zIndex: 9999, // Modal level
        "& .MuiBackdrop-root": {
           zIndex: 9998, // Backdrop level (one step below modal content)
        },
        "& .MuiPaper-root": {
          zIndex: 9999,
          borderRadius: "12px",
          overflow: "hidden",
          // Ensure the box itself doesn't block its own children
          pointerEvents: "auto" ,
          
        }
      }}
    >
      <DialogContent
        sx={{
          position: "relative",
          p: 0, // Set to 0 to remove gaps between your Login component and the Modal edge
          display: "flex",
          flexDirection: "column",
          
          overflow: "hidden"
        }}
      >
        {/* Close Button - Increased z-index to be at the very top */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 10000, 
            color: "rgba(0,0,0,0.5)",
            "&:hover": { color: "black" }
          }}
        >
          <CloseIcon />
        </IconButton>

        {view === "login" ? (
          <Login closeModal={onClose} switchToRegister={switchToRegister} />
        ) : (
          <Register closeModal={onClose} switchToLogin={switchToLogin} />
        )}
      </DialogContent>
    </Dialog>
  );
};
export default AuthModal;