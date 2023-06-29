import { loadingState } from "@/recoil/gptField.atom";
import { handleTextareaHeight } from "@/utils/handleTextareaHeight";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface PropTypes {
  submitValue: () => void;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<string>;
  renderableState?: string;
}

export default function GPTTextarea({
  value,
  setValue,
  submitValue,
  placeholder,
  renderableState,
}: PropTypes) {
  const loading = useRecoilValue(loadingState);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    handleTextareaHeight(textareaRef.current);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.nativeEvent.isComposing) return;
    if ((event.shiftKey && event.key === "Enter") || loading) return;
    if (event.key === "Enter") {
      event.preventDefault();
      submitValue();
      setValue("");
    }
  };

  useEffect(() => {
    if (renderableState) {
      textareaRef.current?.focus();
      setValue("");
    }
  }, [renderableState, setValue]);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.value = value;
  }, [value]);

  return (
    <Textarea
      ref={textareaRef}
      rows={1}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
}

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  max-height: 200px;
  padding-right: 3rem;
  background: transparent;
  border: none;
  line-height: 1.5rem;
  font-size: 1rem;
  font-family: Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: white;

  &:focus {
    outline: none;
  }
`;
