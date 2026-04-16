import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Avatar,
  GlobalStyles,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import { users, messages as initialMessages } from "../../data/dummyChats";
import { ChatUser, Message } from "../../types/chat";
import { updateMessage } from "../../API/chat";
import { toast } from "react-toastify";

const ChatLayout: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const isMobile = useMediaQuery("(max-width:768px)");
  const isChatActive = isMobile && selectedUser !== null;

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: messages.length + 1,
      text,
      sender: "trainer",
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMsg]);
  };

  // Message Update Logic
  const handleUpdate = async (id: number, newText: string) => {
    try {
      // API Call (activeRoom aapke data structure ke according replace karein)
      // const updated = await updateMessage(id, newText, selectedUser?.id); 
      
      // UI Update (Optimistic update)
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, text: newText } : msg))
      );
      toast.success("Message updated");
    } catch (err) {
      console.error("Failed to update message:", err);
      toast.error("Update failed.");
    }
  };

  return (
    <Box display="flex" height="100%" sx={{ overflow: "hidden", bgcolor: "#f5f7fb", position: "relative" }}>
      {/* GLOBAL CSS FIX: Global Button Overlap Hatane ke liye */}
      <GlobalStyles
        styles={{
          ".MuiFab-root, [class*='assistance'], #assistance-button, .floating-btn": {
            display: "none !important",
          },
        }}
      />

      {/* 1. SIDEBAR */}
      <Box
        sx={{
          width: { xs: "100%", md: "320px" },
          display: { xs: isChatActive ? "none" : "block", md: "block" },
          borderRight: "1px solid #e0e0e0",
          height: "100%",
          bgcolor: "white",
        }}
      >
        <ChatSidebar
          users={users}
          selectedUser={selectedUser}
          onSelect={(user) => setSelectedUser(user)}
        />
      </Box>

      {/* 2. CHAT AREA */}
      <Box flex={1} display={{ xs: isChatActive ? "flex" : "none", md: "flex" }} flexDirection="column" height="100%">
        <AppBar position="static" elevation={0} sx={{ bgcolor: "white", color: "black", borderBottom: "1px solid #eee" }}>
          <Toolbar sx={{ px: 2, gap: 1.5 }}>
            {isMobile && (
              <IconButton edge="start" onClick={() => setSelectedUser(null)}>
                <ArrowBackIcon />
              </IconButton>
            )}

            {selectedUser ? (
              <Box display="flex" alignItems="center" gap={1.5}>
                <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>{selectedUser.name[0]}</Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                    {selectedUser.name}
                  </Typography>
                  <Typography variant="caption" color="success.main" display="flex" alignItems="center" gap={0.5}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "success.main", borderRadius: "50%" }} />
                    Online
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Typography variant="h6">Trainer Chat</Typography>
            )}
          </Toolbar>
        </AppBar>

        {/* MESSAGES AREA */}
        <Box flex={1} overflow="auto" sx={{ bgcolor: "#f5f7fb" }}>
          {selectedUser ? (
            <ChatWindow 
              messages={messages} 
              // onUpdateMessage={handleUpdate} // Prop pass kiya
            />
          ) : (
            <Box m="auto" textAlign="center" color="text.secondary">
              <Typography>Select a conversation to start</Typography>
            </Box>
          )}
        </Box>

        {/* INPUT AREA */}
        {selectedUser && (
          <Box sx={{ p: 2, bgcolor: "white", borderTop: "1px solid #eee", zIndex: 2, position: "relative" }}>
            <MessageInput onSend={handleSend} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatLayout;