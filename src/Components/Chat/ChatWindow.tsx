import React from 'react';
import {Box} from "@mui/material";
import { Message } from '../../types/chat';
import MessageBubble from "./MessageBubble";
import { Chat } from '@mui/icons-material';

const ChatWindow: React.FC<{messages: Message[]}> = ({messages}) => {
  return (
    <Box flex={1} p={2} bgcolor="#f5f5f5" overflow="auto">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </Box>
  )};

export default ChatWindow;