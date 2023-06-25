import History from "@/constants/History.constant";
import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChatItem";
import GPTField from "../common/GPTField";
import { useRecoilValue } from "recoil";

export default function GPTContent() {
  const { id } = useParams();
  const historyItem = useRecoilValue(History);

  const chat = historyItem.find((item) => item.id === id)?.chat;

  const handleSubmit = (event: React.FormEvent) => {
    console.log(event);
  };

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
