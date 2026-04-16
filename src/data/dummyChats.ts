
import { ChatUser, Message } from "../types/chat";

// ================================
// ✅ USERS
// ================================
export const users: ChatUser[] = [
  { id: 1, name: "Alice", lastMessage: "See you tomorrow!" , email: "sdkjfhksdf@gmail.com"},
  { id: 2, name: "Bob", lastMessage: "Thanks for the update." , email: "bob@gmail.com"},
  { id: 3, name: "Charlie", lastMessage: "Can we reschedule?" , email: "charlie@gmail.com"},
  { id: 4, name: "David", lastMessage: "Let's meet up soon." , email: "david@gmail.com"},
];

// ================================
// ✅ MESSAGES (UPDATED STRUCTURE)
// ================================
export const messages: Message[] = [
  {
    id: 1,
    text: "Hi Alice!",
    sender_id: 21,
    sender_type: "Trainer",
    timestamp: "2024-06-01T10:00:00Z",
  },
  {
    id: 2,
    text: "Hello! How are you?",
    sender_id: 128,
    sender_type: "User",
    timestamp: "2024-06-01T10:01:00Z",
  },
  {
    id: 3,
    text: "I'm good, thanks! Looking forward to our session.",
    sender_id: 21,
    sender_type: "Trainer",
    timestamp: "2024-06-01T10:02:00Z",
  },
];