// ================================
// ✅ SENDER TYPE
// ================================
export type SenderType = "User" | "Trainer";

// ================================
// ✅ MESSAGE TYPE
// ================================
export interface Message {
  id: number;
  text: string;
  sender_id: number;
  sender_type: string;
  timestamp: string;
  read?: boolean; 
}

// ================================
// ✅ CHAT USER (Sidebar users)
// ================================
export interface ChatUser {
  id: number;
  name: string;
  email: string;

  // optional fields (future use)
  lastMessage?: string;
  avatar?: string;
}