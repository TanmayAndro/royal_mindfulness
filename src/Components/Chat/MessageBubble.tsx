import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete"; // ✅ ADD
import { Message } from "../../types/chat";

interface Props {
  message: Message;
  currentUserId: number;
  onUpdate: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

const MessageBubble: React.FC<Props> = ({
  message,
  currentUserId,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(message.text);

  const isTeacher = localStorage.getItem("is_teacher") === "true";
  const currentUserType = isTeacher ? "Trainer" : "User";

  // ✅ SAFE GUARD
  if (!message || !message.id) return null;
  if (!message.text || message.text.trim() === "") return null;

  // ✅ OWN MESSAGE CHECK
  const isOwn =
    Number(message.sender_id) === Number(currentUserId) &&
    message.sender_type === currentUserType;

  // ✅ SAFE TIME FORMAT
  const formatTime = (timestamp?: string) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "";

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSave = () => {
    if (!tempText.trim()) return;

    onUpdate(message.id, tempText);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isOwn ? "flex-end" : "flex-start",
        mb: 1.5,
        px: 1,
      }}
    >
      <Paper
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: isOwn ? "#DCF8C6" : "#FFFFFF",
          borderRadius: isOwn
            ? "15px 15px 0px 15px"
            : "15px 15px 15px 0px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        {isEditing ? (
          <Stack direction="row" spacing={1}>
            <TextField
              fullWidth
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              size="small"
            />
            <IconButton onClick={handleSave}>
              <DoneIcon />
            </IconButton>
          </Stack>
        ) : (
          <>
            {/* MESSAGE TEXT */}
            <Typography sx={{ wordBreak: "break-word" }}>
              {message.text}
            </Typography>

            {/* TIME + STATUS + ACTIONS */}
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              mt={0.5}
              gap={0.5}
            >
              {/* TIME */}
              <Typography
                variant="caption"
                sx={{ color: "gray", fontSize: "0.7rem" }}
              >
                {formatTime(message.timestamp)}
              </Typography>

              {/* ACTIONS */}
              {isOwn && (
                <>
                  {/* ✔ / ✔✔ */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: message.read ? "#4fc3f7" : "#9e9e9e",
                      fontSize: "0.75rem",
                    }}
                  >
                    {message.read ? "✔✔" : "✔"}
                  </Typography>

                  {/* EDIT only if NOT read */}
                  {!message.read && (
                    <>
                      <IconButton
                        size="small"
                        onClick={() => setIsEditing(true)}
                        sx={{ p: 0.3 }}
                      >
                        <EditIcon sx={{ fontSize: 14 }} />
                      </IconButton>

                      {/* ✅ DELETE ICON (NEW) */}
                      <IconButton
                        size="small"
                        onClick={() => onDelete(message.id)}
                        sx={{ p: 0.3 }}
                      >
                        <DeleteIcon sx={{ fontSize: 14 }} />
                      </IconButton>
                    </>
                  )}
                </>
              )}
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

// export default MessageBubble;

export default React.memo(MessageBubble);