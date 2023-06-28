import { css, keyframes, styled } from "styled-components";
import { color } from "@/styles/theme.style";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 0.5rem;
  background-image: linear-gradient(
    180deg,
    rgba(53, 55, 64, 0),
    #353740 58.85%
  );
`;

export const Field = styled.div`
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

export const Loading = styled.div`
  display: flex;
`;

const loading = (order: 1 | 2 | 3) => keyframes`
  0% {
    opacity: ${order > 1 ? 0 : 1};
  }
  33% {
    opacity: ${order > 2 ? 0 : 1};
  }
  66% {
    opacity: 1;
  }
`;

export const LoadingDot = styled.div<{ order: 1 | 2 | 3 }>`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${color.gray250};
  animation: ${({ order }) => loading(order)} 1s infinite steps(1);
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
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

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: auto;
    `}

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
