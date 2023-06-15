import { styled } from "styled-components";
import { color } from "../../styles/theme.style";

export const ChattingFormBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem 0 1rem 1rem;
  box-sizing: content-box;
  background-color: ${color.gray500};
  border: 1px solid rgba(32, 33, 35, 0.5);
  border-radius: 0.75rem;
`;

export const SendButton = styled.button`
  border-radius: 0.375rem;
  position: absolute;
  right: 0;
  padding: 8px;
  border: none;
  display: flex;
  background: transparent;
  opacity: 0.4;
  color: rgb(172, 172, 190);

  &:not(:disabled) {
    background-color: rgb(25, 195, 125);
    opacity: 1;
    color: white;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  max-height: 200px;
  padding-right: 48px;
  background: transparent;
  border: none;
  line-height: 1.5rem;
  font-size: 16px;
  font-family: Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: white;

  &:focus {
    outline: none;
  }
`;
