import React from "react";
import { Box } from "@mui/material";
import { Message } from "../../types/chat";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: Message[];
  currentUserId: number;
  onUpdate: (id: number, text: string) => void;
   onDelete: (id: number) => void;
}

const ChatWindow: React.FC<Props> = ({
  messages,
  currentUserId,
  onUpdate,
  onDelete,
}) => {
  return (
    <Box flex={1} p={2} bgcolor="#f5f5f5" overflow="auto">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          currentUserId={currentUserId}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
};

export default ChatWindow;