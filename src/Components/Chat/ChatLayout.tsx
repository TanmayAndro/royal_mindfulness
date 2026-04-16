import React, { useState, useEffect, useRef } from "react";
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
import { ChatUser, Message } from "../../types/chat";
import { toast } from "react-toastify";


import {
  getAssignedUsers,
  getAssignedTrainers,
  getMessages,
  sendMessage,
  updateMessage,
  markAsRead,
  getOrCreateChatRoom,
  deleteMessage, 
} from "../../API/chat";

import { cable } from "./../../API/cable";

const ChatLayout: React.FC = () => {
  const [users, setUsers] = useState<ChatUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeRoom, setActiveRoom] = useState<number | null>(null); 

  const isMobile = useMediaQuery("(max-width:768px)");
  const isChatActive = isMobile && selectedUser !== null;

  const isTeacher = localStorage.getItem("is_teacher") === "true";
  const currentUserId = Number(localStorage.getItem("user_id"));

  const chatLabel = isTeacher ? "Chat with User" : "Chat with Trainer";
  const subscriptionRef = useRef<any>(null);



  

useEffect(() => {
  if (!activeRoom) return;

  // ✅ HARD REMOVE old subscription
  if (subscriptionRef.current) {
    cable.subscriptions.remove(subscriptionRef.current);
    subscriptionRef.current = null;
  }

  console.log(" Subscribing to room:", activeRoom);

  const subscription = cable.subscriptions.create(
    {
      channel: "ChatChannel",
      room_id: activeRoom,
    },
    {
      connected() {
        console.log("✅ WebSocket Connected");
      },

 received(data: any) {
  // console.log("📩 SOCKET DATA:", data);

  setMessages((prev) => {

    // ============================
    // ✅ DELETE
    // ============================
    if (data.type === "delete") {
      return prev.filter((msg) => msg.id !== data.id);
    }

    // ============================
    // ✅ READ (🚫 DO NOT CALL API)
    // ============================
    if (data.type === "read") {
      return prev.map((msg) =>
        data.message_ids.includes(msg.id)
          ? { ...msg, read: true }
          : msg
      );
    }

    // ============================
    // ✅ NEW / UPDATE MESSAGE
    // ============================
    const exists = prev.find((msg) => msg.id === data.id);

    if (exists) {
      return prev.map((msg) =>
        msg.id === data.id ? { ...msg, text: data.text } : msg
      );
    }

    return [...prev, data];
  });

  // ============================
  // 🔥 CALL markAsRead ONLY FOR NEW MESSAGE
  // ============================
  const currentUserId = Number(localStorage.getItem("user_id"));

  if (
    data.type !== "read" && // ❌ avoid loop
    data.type !== "delete" && // safety
    data.sender_id !== currentUserId && // only other user
    activeRoom
  ) {
    markAsRead(activeRoom);
  }
},
    }
  );

  subscriptionRef.current = subscription;

  return () => {
    console.log("❌ Cleanup subscription");
    cable.subscriptions.remove(subscription);
  };
}, [activeRoom]);

  // ================================
  // ✅ LOAD USERS
  // ================================
  useEffect(() => {
    const loadUsers = async () => {
      try {
        let data;

        if (isTeacher) {
          data = await getAssignedUsers();
        } else {
          data = await getAssignedTrainers();
        }

        setUsers(
          Array.from(
            new Map(
              data.map((item: any) => [item.id, item])
            ).values()
          ).map((item: any) => ({
            id: item.id,
            name: item.name,
            email: item.email, 
            lastMessage: "Tap to chat",
          }))
        );
      } catch (err) {
        toast.error("Failed to load users");
      }
    };

    loadUsers();
  }, [isTeacher]);

  // ================================
  // ✅ SIDEBAR CLICK → CREATE ROOM
  // ================================
  const handleSelectUser = async (user: ChatUser) => {
    try {
      if (selectedUser?.id === user.id) return;

      setSelectedUser(user);

      let userId: number;
      let trainerId: number;

      if (isTeacher) {
        trainerId = currentUserId;
        userId = user.id;
      } else {
        userId = currentUserId;
        trainerId = user.id;
      }

      const room = await getOrCreateChatRoom(userId, trainerId);

      setActiveRoom(room.id);
    } catch (err) {
      console.error(err);
      toast.error("Failed to open chat");
    }
  };

  // ================================
  // ✅ LOAD MESSAGES
  // ================================
  useEffect(() => {
    if (!activeRoom) return;

    const loadMessages = async () => {
      try {
        const data = await getMessages(activeRoom);
        setMessages(data);
        await markAsRead(activeRoom);
      } catch {
        toast.error("Failed to load messages");
      }
    };

    loadMessages();
  }, [activeRoom]);

  // ================================
  // ✅ SEND MESSAGE
  // ================================
  const handleSend = async (text: string) => {
    if (!activeRoom || !text.trim()) return;

    try {
      const newMsg = await sendMessage(activeRoom, text);

      // setMessages((prev) => [...prev, newMsg]);
    } catch {
      toast.error("Send failed");
    }
  };

  // ================================
  // ✅ UPDATE MESSAGE
  // ================================
 const handleUpdate = async (id: number, newText: string) => {
  if (!activeRoom) return;

  try {
    const updated = await updateMessage(id, newText, activeRoom);
    

    // setMessages((prev) =>
    //   prev.map((msg) => (msg.id === id ? updated : msg))
    // );
  } catch (err) {
   
    toast.error("Update failed  🙁");
  }
};

// deleteMessage
const handleDelete = async (id: number) => {
  if (!activeRoom) return;

  try {
    await deleteMessage(id, activeRoom);
    //  setMessages
    //  WebSocket handle 
  } catch {
    toast.error("Delete failed");
  }
};

  return (
    <Box display="flex" height="100%" sx={{ bgcolor: "#f5f7fb" }}>
      <GlobalStyles
        styles={{
          ".MuiFab-root": { display: "none !important" },
        }}
      />

      {/* SIDEBAR */}
      <Box
        sx={{
          width: { xs: "100%", md: "320px" },
          display: { xs: isChatActive ? "none" : "block", md: "block" },
          borderRight: "1px solid #e0e0e0",
          bgcolor: "white",
        }}
      >
        <ChatSidebar
          users={users}
          selectedUser={selectedUser}
          onSelect={handleSelectUser} // ✅ FIX
          label={chatLabel}
        />
      </Box>

      {/* CHAT AREA */}
      <Box flex={1} display="flex" flexDirection="column">
        <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
          <Toolbar>
            {isMobile && (
              <IconButton onClick={() => setSelectedUser(null)}>
                <ArrowBackIcon />
              </IconButton>
            )}

            {selectedUser ? (
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar>{selectedUser.name[0]}</Avatar>
                <Typography>{selectedUser.name}</Typography>
              </Box>
            ) : (
              <Typography>{chatLabel}</Typography>
            )}
          </Toolbar>
        </AppBar>

        <Box flex={1} overflow="auto">
          {selectedUser ? (
            <ChatWindow
              messages={messages}
              onUpdate={handleUpdate}
              currentUserId={currentUserId}
              onDelete={handleDelete}
            />
          ) : (
            <Box textAlign="center" mt={5}>
              <Typography>Select a conversation</Typography>
            </Box>
          )}
        </Box>

        {selectedUser && (
          <Box sx={{ p: 2, bgcolor: "white" }}>
            <MessageInput onSend={handleSend} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatLayout;