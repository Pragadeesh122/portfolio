"use server";

export async function resetChat() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RAG_API_URL}/reset`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to reset chat");
    }

    return {success: true};
  } catch (error) {
    console.error("Error resetting chat:", error);
    return {success: false, error: "Failed to reset chat"};
  }
}

export async function sendMessage(message: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RAG_API_URL}/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({query: message}),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const data = await response.json();
    return {success: true, response: data.response};
  } catch (error) {
    console.error("Error sending message:", error);
    return {success: false, error: "Failed to send message"};
  }
}
