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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent
        sx={{
          position: "relative",
          paddingTop: "40px", // space for the close button
        }}
      >
        {/* Close (X) Button */}
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "rgba(0,0,0,0.6)",
            "&:hover": {
              color: "rgba(0,0,0,0.8)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Conditional rendering of Login / Register */}
        {view === "login" ? (
          <Login
            closeModal={onClose}
            switchToRegister={switchToRegister}
          />
        ) : (
          <Register
            closeModal={onClose}
            switchToLogin={switchToLogin}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;