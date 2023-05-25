import axios from "axios";

export function chating() {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const apiKey = "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";
  const modelId = "gpt-3.5-turbo";

  async function sendChatRequest(
    dialogue: {
      role: string;
      content: string;
    }[],
    role: string
  ) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const data = {
      model: modelId,
      messages: dialogue.map((d: { role: string; content: string }) => ({
        role: d.role,
        content: d.content,
      })),
    };

    if (role) {
      data.messages.push({ role, content: "" });
    }

    try {
      const response = await axios.post(endpoint, data, { headers });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error(error);
      return "Error: Something went wrong.";
    }
  }

  // 대화 데이터 예시
  const dialogue = [
    { role: "user", content: "Tell me a joke." },
    { role: "assistant", content: "Why did the chicken cross the road?" },
  ];

  // 역할 추가하여 API 요청 보내기
  sendChatRequest(dialogue, "assistant")
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}
