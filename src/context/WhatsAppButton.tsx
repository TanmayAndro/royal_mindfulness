import React, { useState, useCallback, memo } from "react";
import {
  Fab,
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Zoom,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

type HelpWidgetProps = {
  phoneNumber?: string;
};

const WhatsAppButton: React.FC<HelpWidgetProps> = ({
  phoneNumber = "919425645147",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");

    setIsOpen(false);
    setMessage("");
  }, [message, phoneNumber]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {/* Message Box */}{" "}
      <Zoom in={isOpen}>
        <Paper
          elevation={6}
          sx={{
            mb: 2,
            width: { xs: 280, sm: 320 },
            borderRadius: 3,
            overflow: "hidden",
            display: isOpen ? "block" : "none",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "#3498db",
              color: "white",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography variant="subtitle1" fontWeight="bold">
              Support Chat{" "}
            </Typography>
            <IconButton
              size="small"
              onClick={handleToggle}
              sx={{ color: "white" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Body */}
          <Box sx={{ p: 2, bgcolor: "#e5ddd5" }}>
            <Typography
              variant="body2"
              sx={{
                bgcolor: "white",
                p: 1.5,
                borderRadius: 2,
                mb: 2,
                display: "inline-block",
                maxWidth: "90%",
              }}
            >
              Hi there! 👋 How can we help you today?
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Type your message..."
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            />

            <Fab
              variant="extended"
              size="medium"
              color="primary"
              onClick={handleSendMessage}
              sx={{
                mt: 2,
                width: "100%",
                bgcolor: "#3498db",
                "&:hover": {
                  bgcolor: "#1c6494",
                },
              }}
            >
              <SendIcon sx={{ mr: 1, fontSize: 18 }} />
              Send to WhatsApp
            </Fab>
          </Box>
        </Paper>
      </Zoom>
      {/* Trigger Button */}
      {/*
  <Fab
    variant="extended"
    color="success"
    onClick={handleToggle}
    sx={{
      textTransform: "none",
      fontWeight: "bold",
      px: 3,
      bgcolor: "#3498db",
      "&:hover": { bgcolor: "#1c6494" },
      boxShadow: 3,
    }}
  >
    Need Assistance?
  </Fab>
  */}
    </Box>
  );
};

export default memo(WhatsAppButton);
