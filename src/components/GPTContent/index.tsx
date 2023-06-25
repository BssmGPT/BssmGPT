import History from "@/constants/History.constant";
import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChatItem";
import GPTField from "../common/GPTField";
import { useRecoilValue } from "recoil";
import { useCallback } from "react";

export default function GPTContent() {
  const { id } = useParams();
  const historyItems = useRecoilValue(History);

  const chat = historyItems.find((item) => item.id === id)?.chat;

  const handleSubmit = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <S.Wrapper style={{ color: "white" }}>
      <S.List>
        {chat?.map((chatItem) => (
          <GPTChatItem key={chatItem.id} chatItem={chatItem} />
        ))}
      </S.List>
      <GPTField handleSubmit={handleSubmit} />
    </S.Wrapper>
  );
}
