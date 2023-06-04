import { styled } from "styled-components";
import { color } from "../../styles/theme.style";

export const ChattingFormBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Form = styled.form`
  max-width: 42rem;
  margin: 0 auto;
  background-color: ${color.gray500};
  border-radius: 0.75rem;
`;

export const TextareaBox = styled.div`
  padding: 16px 0 16px 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  resize: none;
  font-family: Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  color: white;
  max-height: 200px;

  &:focus {
    outline: none;
  }
`;
