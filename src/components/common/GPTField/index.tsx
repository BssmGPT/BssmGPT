import { useEffect, useRef } from "react";
import GPTCopyright from "./GPTCopyright";
import * as S from "./style";
import SendIcon from "@/assets/icons/SendIcon";
import { useRecoilState } from "recoil";
import { valueState } from "@/recoil/gptField.atom";
import { handleTextareaHeight } from "@/utils/handleTextareaHeight";

interface PropTypes {
  handleSubmit: (value: string) => void;
}

export default function GPTField({ handleSubmit }: PropTypes) {
  const [value, setValue] = useRecoilState(valueState);

  const formRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    handleTextareaHeight(textareaRef.current);
  };

  const submitValue = () => {
    handleSubmit(value);
    setValue("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.shiftKey && event.key === "Enter") return;
    if (event.key === "Enter") {
      event.preventDefault();
      submitValue();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.value = "";
    }
  }, [handleSubmit]);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.value = value;
  }, [value]);

  return (
    <S.Container>
      <S.Field ref={formRef}>
        <S.Textarea
          ref={textareaRef}
          rows={1}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Send a message."
          value={value}
        />
        <S.SubmitButton disabled={!value} onClick={submitValue}>
          <SendIcon />
        </S.SubmitButton>
      </S.Field>
      <GPTCopyright />
    </S.Container>
  );
}
