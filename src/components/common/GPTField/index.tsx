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
    <S.Container>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <S.Textarea
          ref={textareaRef}
          rows={1}
          onChange={onChange}
          placeholder="Send a message."
          value={value}
        />
        <S.SubmitButton disabled={!value}>
          <SendIcon />
        </S.SubmitButton>
      </S.Form>
      <GPTCopyright />
    </S.Container>
  );
}
