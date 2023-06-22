import { styled } from "styled-components";
import { color } from "../../../styles/theme.style";

export const ChattingFormBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 0.5rem;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 1rem;
  background-color: ${color.gray500};
  border: 1px solid rgba(32, 33, 35, 0.5);
  border-radius: 0.75rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 42rem;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    max-width: 48rem;
    margin: 0 auto;
  }
`;

export const SendButton = styled.button`
  border-radius: 0.375rem;
  position: absolute;
  right: 0.75em;
  bottom: 0.75rem;
  padding: 0.5rem;
  border: none;
  display: flex;
  background: transparent;
  opacity: 0.4;
  color: rgb(172, 172, 190);

  transition-duration: 0.15s;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

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
