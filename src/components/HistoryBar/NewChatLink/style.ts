import styled from "styled-components";
import { color } from "@/styles/theme.style";

export const NavigateBox = styled.div`
  height: 2.75rem;
  padding: 0.75rem;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 0.375rem;
  color: ${color.white};
  cursor: pointer;

  &:hover {
    color: ${color.white};
    background-color: ${color.gray400};
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
