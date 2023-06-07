import ChattingFooter from "../ChattingFooter";
import * as S from "./style";

export default function ChattingForm() {
  return (
    <S.ChattingFormBox>
      <S.Form>
        <S.TextareaBox>
          <S.Textarea rows={1} />
        </S.TextareaBox>
      </S.Form>
      <ChattingFooter />
    </S.ChattingFormBox>
  );
}
