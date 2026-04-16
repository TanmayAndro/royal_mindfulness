import React from 'react';
import {
  List, 
  ListItemButton, 
  ListItemText, 
  Divider,
} from "@mui/material";

import {ChatUser} from "../../types/chat";

interface Props {
  users: ChatUser[];
  selectedUser: ChatUser | null;
  onSelect: (user: ChatUser) => void;
}

const ChatSidebar: React.FC<Props> = ({users, selectedUser, onSelect}) => {
  return (
    <List sx={{ width: 300 }}>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <ListItemButton
            selected={selectedUser?.id === user.id}
            onClick={() => onSelect(user)}
          >
            <ListItemText primary={user.name} secondary={user.lastMessage} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
};

export default ChatSidebar;