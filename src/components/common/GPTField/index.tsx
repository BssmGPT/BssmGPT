import { useRef, useState } from "react";
import GPTCopyright from "./GPTCopyright";
import * as S from "./style";
import SendIcon from "@/assets/icons/SendIcon";

export default function GPTField() {
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaHeight = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.scrollTop = textarea.scrollHeight;
    }
  };

  return (
    <S.GPTBottomBox>
      <S.Form>
        <S.Textarea
          ref={textareaRef}
          rows={1}
          onChange={handleTextareaHeight}
          placeholder="Send a message."
        />
        <S.SendButton disabled={!message}>
          <SendIcon />
        </S.SendButton>
      </S.Form>
      <GPTCopyright />
    </S.GPTBottomBox>
  );
}
