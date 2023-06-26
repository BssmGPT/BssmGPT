import History from "@/constants/HistoryItems.constant";
import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChatItem";
import GPTField from "../common/GPTField";
import { useRecoilState } from "recoil";
import { useCallback } from "react";
import sendMessage from "@/utils/chat";

export default function GPTContent() {
  const { id } = useParams();
  const [historyItems, setHistoryItems] = useRecoilState(History);

  const messages = historyItems.find((item) => item.id === id)?.messages;

  const handleSubmit = useCallback(
    async (value: string) => {
      if (!messages) return;

      const response = await sendMessage([
        ...messages,
        { role: "user", content: value },
      ]);
      const messagesData = response["choices"][0]["message"];
      setHistoryItems(
        historyItems.map((item) =>
          item.id === id ? { ...item, messages: messagesData } : item
        )
      );
    },
    [id, messages, historyItems, setHistoryItems]
  );

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
