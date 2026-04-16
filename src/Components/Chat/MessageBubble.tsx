import REact from "react"; 
import { Message } from  "../../types/chat";
import { Box, Paper, Typography } from "@mui/material";

interface Props{
  message: Message;
}


const MessageBubble: React.FC<Props> = ({message}) => {
  const isTrainer = message.sender === "trainer";
  return ( 
    <Box display = "flex" justifyContent= {isTrainer ? "flex-end" : "flex-start"} mb= {1}>
      <Paper sx= {{
        p:1.5, 
        maxWidth: "65%",
        bgcolor: isTrainer ? "primary.main" : "grey.300",
        color: isTrainer ? "#fff" : "#000", 
        borderRadius: 2,
      }}>
        <Typography variant="body2">{message.text}</Typography>
        <Typography variant="caption">{message.timestamp}</Typography>
      </Paper>
    </Box>
  )
};

export default MessageBubble;