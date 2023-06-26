import History from "@/constants/HistoryItems.constant";
import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChatItem";
import GPTField from "../common/GPTField";
import { useRecoilState } from "recoil";
import { useCallback } from "react";
import sendMessage from "@/utils/chat";
import { v4 as uuidv4 } from "uuid";

export default function GPTContent() {
  const { id } = useParams();
  const [historyItems, setHistoryItems] = useRecoilState(History);

  const messages = historyItems.find((item) => item.id === id)?.messages;

  const handleSubmit = useCallback(
    async (value: string) => {
      if (!messages) return;

      const userMessage: {
        id: string;
        role: "user" | "assistant";
        content: string;
      } = { id: uuidv4(), role: "user", content: value };

      // 유저 입력 삽입
      setHistoryItems(
        historyItems.map((item) =>
          item.id === id
            ? {
                ...item,
                messages: [...item.messages, userMessage],
              }
            : item
        )
      );

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

      // 받은 데이터 삽입
      setHistoryItems(
        historyItems.map((item) =>
          item.id === id
            ? {
                ...item,
                messages: [
                  ...item.messages,
                  userMessage,
                  { id: uuidv4(), ...message },
                ],
              }
            : item
        )
      );
    },
    [id, messages, historyItems, setHistoryItems]
  );

  console.log(messages);

  return (
    <S.Wrapper style={{ color: "white" }}>
      <S.List>
        {messages?.map((item) => (
          <GPTChatItem key={item.id} item={item} />
        ))}
      </S.List>
      <GPTField handleSubmit={handleSubmit} />
    </S.Wrapper>
  );
}
