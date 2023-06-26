const apiUrl = "https://api.openai.com/v1/chat/completions";

interface MessageTypes {
  role: "system" | "user";
  content: string;
}

export default async function sendMessage(messages: MessageTypes[]) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: messages,
    }),
  });

  const data = await response.json();
  return data;
}
