import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChatItem";
import GPTField from "../common/GPTField";
import { useCallback, useEffect, useState } from "react";
import sendMessage from "@/apis/chat";
import { v4 as uuidv4 } from "uuid";
import getChatById from "@/utils/getChatById";
import postMessage from "@/utils/postMessage";

export default function GPTContent() {
  const { id } = useParams();
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string; id: string }[]
  >([]);

  useEffect(() => {
    id &&
      getChatById(id).then((data) => {
        if (Array.isArray(data)) {
          setMessages(data);
        }
      });
  }, []);

  const handleSubmit = useCallback(
    async (value: string) => {
      if (!messages) return;

      const userMessage: {
        id: string;
        role: "user" | "assistant";
        content: string;
      } = { id: uuidv4(), role: "user", content: value };

      // 유저 입력 삽입
      id && (await postMessage(id, [...messages, userMessage]));
      setMessages([...messages, userMessage]);

      const filteredMessages = messages.map((message) => ({
        role: message.role,
        content: message.content,
      }));

      // 기존 데이터 + 유저 입력을 기반한 데이터 받아옴
      const response = await sendMessage([
        ...filteredMessages,
        { role: "user", content: value },
      ]);

      const message: { role: "user" | "assistant"; content: string } =
        response["choices"][0]["message"];
      const gptMessage = { ...message, id: uuidv4() };

      // 받은 데이터 삽입
      id && (await postMessage(id, [...messages, userMessage, gptMessage]));
      setMessages([...messages, userMessage, gptMessage]);
    },
    [id, messages]
  );

  console.log(messages);

  return (
    <S.Wrapper style={{ color: "white" }}>
      <S.List>
        {messages?.map((item: any) => (
          <GPTChatItem key={item.id} item={item} />
        ))}
      </S.List>
      <GPTField handleSubmit={handleSubmit} />
    </S.Wrapper>
  );
}
