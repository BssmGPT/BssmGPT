import { useRef } from "react";
import GPTCopyright from "./GPTCopyright";
import * as S from "./style";
import SendIcon from "@/assets/icons/SendIcon";
import { useRecoilState } from "recoil";
import { valueState } from "@/recoil/gptField/atom";
import { handleTextareaHeight } from "@/utils/handleTextareaHeight";

interface PropTypes {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function GPTField({ handleSubmit }: PropTypes) {
  const [value, setValue] = useRecoilState(valueState);

  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    handleTextareaHeight(textareaRef.current);
  };

  return (
    <S.GPTBottomBox>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <S.Textarea
          ref={textareaRef}
          rows={1}
          onChange={onChange}
          placeholder="Send a message."
          value={value}
        />
        <S.SendButton disabled={!value}>
          <SendIcon />
        </S.SendButton>
      </S.Form>
      <GPTCopyright />
    </S.GPTBottomBox>
  );
}
