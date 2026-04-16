import { api } from "./client";

// ✅ GET messages
export const getMessages = async (chatRoomId: number) => {
  try {
    const res = await api.get("/messages", {
      params: {
        chat_room_id: chatRoomId,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

// ✅ SEND message
export const sendMessage = async (chatRoomId: number, content: string) => {
  try {
    const formData = new FormData();

    formData.append("message[content]", content);
    formData.append("chat_room_id", String(chatRoomId));

    const res = await api.post("/messages", formData);

    return res.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

// ✅ UPDATE message (NEW ADD)
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

    return res.data;
  } catch (error) {
    console.error("Error updating message:", error);
    throw error;
  }
};

// ✅ MARK AS READ
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