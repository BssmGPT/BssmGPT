import { useRef } from "react";
import Copyright from "./Copyright";
import * as S from "./style";
import SendIcon from "@/assets/icons/SendIcon";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingState, valueState } from "@/recoil/gptField.atom";
import Textarea from "../Textarea";

interface PropTypes {
  id?: string;
  handleSubmit: (value: string) => void;
}

export default function InputField({ id, handleSubmit }: PropTypes) {
  const [value, setValue] = useRecoilState(valueState);

  const formRef = useRef<HTMLDivElement>(null);

  const loading = useRecoilValue(loadingState);

  const submitValue = () => {
    handleSubmit(value);
  };

  return (
    <S.Container>
      <S.Field ref={formRef}>
        <Textarea
          value={value}
          setValue={setValue}
          submitValue={submitValue}
          placeholder="Send a message."
          renderableState={id}
        />
        <S.SubmitButton
          disabled={!value || loading}
          $loading={loading}
          onClick={submitValue}
        >
          {loading ? (
            <>
              <S.LoadingDot order={1}>.</S.LoadingDot>
              <S.LoadingDot order={2}>.</S.LoadingDot>
              <S.LoadingDot order={3}>.</S.LoadingDot>
            </>
          ) : (
            <SendIcon />
          )}
        </S.SubmitButton>
      </S.Field>
      <Copyright />
    </S.Container>
  );
}
