import ChattingContent from "../ChattingContent";
import ChattingForm from "../ChattingForm";
import * as S from "./style";

export default function Chatting() {
  return (
    <S.ChattingBox>
      <ChattingContent />
      <ChattingForm />
    </S.ChattingBox>
  );
}
