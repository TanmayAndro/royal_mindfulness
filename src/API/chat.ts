import { api } from "./client";

export interface ChatRoom {
  id: number;
  user_id: number;
  trainer_id: number;
}

//  NORMALIZER (CHAT ROOM)
// ================================
const normalizeChatRoom = (item: any): ChatRoom => {
  const attr = item.attributes;

  return {
    id: Number(item.id),
    user_id: attr.user_id,
    trainer_id: attr.trainer_id,
  };
};


const normalizeMessage = (item: any) => {
  // ✅ handle BOTH formats
  const msg = item.attributes || item;

  return {
    id: Number(item.id),
    text: msg.content,
    sender_type: msg.sender_type,
    sender_id: msg.sender_id,
    timestamp: msg.created_at || msg.timestamp,
    read: msg.read,
  };
};
//  GET messages
export const getMessages = async (chatRoomId: number) => {
  try {
    const res = await api.get("/messages", {
      params: {
        chat_room_id: chatRoomId,
      },
    });


    //  extract array safely
    const rawMessages = res.data?.data || [];

    //  flatten attributes
    return rawMessages.map((item: any) => {
      const msg = item.attributes;

      return {
        id: Number(item.id),
        text: msg.content,
        sender_type: msg.sender_type,
        sender_id: msg.sender_id,
        timestamp: msg.created_at,
        read: msg.read,
      };
    });

  } catch (error: any) {
    console.error("Error fetching messages:", error);

    throw new Error(
      error?.response?.data?.error ||
      "Failed to fetch messages"
    );
  }
};
//  SEND message
export const sendMessage = async (chatRoomId: number, content: string) => {
  try {
    const formData = new FormData();

    formData.append("message[content]", content);
    formData.append("chat_room_id", String(chatRoomId));

    const res = await api.post("/messages", formData);

    const item = res.data.data;
    return normalizeMessage(item);
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

//  UPDATE message (NEW ADD)
export const updateMessage = async (
  messageId: number,
  content: string,
  chatRoomId: number
) => {
  try {
    const formData = new FormData();

    formData.append("message[content]", content);
    formData.append("chat_room_id", String(chatRoomId));

    const res = await api.patch(`/messages/${messageId}`, formData);

    const item = res.data.data;
    return normalizeMessage(item); 
  } catch (error) {
    console.error("Error updating message:", error);
    throw error;
  }
};

//Delete message (delete message)
export const deleteMessage = async (
  messageId: number,
  chatRoomId: number
) => {
  try {
    const formData = new FormData();
    formData.append("chat_room_id", String(chatRoomId));

    const res = await api.delete(`/messages/${messageId}`, {
      data: formData, // DELETE requests with body need this special config
    });

    return res.data; // optional
  } catch (error: any) {
    console.error("Error deleting message:", error);

    throw new Error(
      error?.response?.data?.error ||
      "Failed to delete message"
    );
  }
};


//  MARK AS READ
export const markAsRead = async (chatRoomId: number) => {
  try {
    await api.patch("/messages/mark_as_read", null, {
      params: {
        chat_room_id: chatRoomId,
      },
    });
  } catch (error) {
    console.error("Error mark as read:", error);
  }
};


//  CREATE / GET chat room  
export const getOrCreateChatRoom = async (
  userId: number,
  trainerId: number
): Promise<ChatRoom> => {
  try {
    // 1. TRY GET (existing room)
    const getRes = await api.get("/chat_rooms", {
      params: {
        user_id: userId,
        trainer_id: trainerId,
      },
    });

    if (getRes.data?.data) {
      return normalizeChatRoom(getRes.data.data);
    }

    

  } catch (error: any) {
  
    console.log("No existing room, creating new...");
  }

  try {
    //  2. CREATE NEW ROOM
    const createRes = await api.post("/chat_rooms", {
      user_id: userId,
      trainer_id: trainerId,
    });

    return normalizeChatRoom(createRes.data.data);

  } catch (error) {
    console.error("ChatRoom create error:", error);
    throw error;
  }
};



// GET: Trainer → Assigned Users
export const getAssignedUsers = async () => {
  try {
    const res = await api.get("/trainer_user");

    return res.data.data.map((item: any) => ({
      id: Number(item.id),
      name: `${item.attributes.first_name} ${item.attributes.last_name}`,
      email: item.attributes.email,
      
    }));
  } catch (error) {
    console.error("Error fetching assigned users:", error);
    throw error;
  }
}


export const getAssignedTrainers = async () => {
  try {
    const token = localStorage.getItem("user_token");

    const res = await api.get("/user_trainer", {
      headers: {
        Authorization: token, // 🔥 FORCE ADD
      },
    });

    return res.data.data.map((item: any) => ({
      id: Number(item.id),
      name: `${item.attributes.first_name} ${item.attributes.last_name}`,
      email: item.attributes.email,
    }));
  } catch (error) {
    console.error("Error fetching assigned trainers:", error);
    throw error;
  }
};


// export const 