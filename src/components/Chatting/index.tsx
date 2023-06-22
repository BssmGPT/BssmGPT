import { useParams } from "react-router-dom";
import ChattingContent from "./ChattingContent";
import ChattingForm from "./ChattingForm";
import * as S from "./style";

export default function Chatting() {
  const { id } = useParams();
  console.log(id);

  return (
    <S.ChattingBox>
      {id ? <>asd</> : <ChattingContent />}
      <ChattingForm />
    </S.ChattingBox>
  );
}
