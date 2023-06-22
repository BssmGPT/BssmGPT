import styled from "styled-components";
import { color } from "../../../styles/theme.style";

export const NewChatLinkLayout = styled.a`
  border-radius: 0.375rem;
  gap: 0.75rem;
  display: flex;
  padding: 0.75rem;
  font-size: 0.835rem;
  align-items: center;
  margin-bottom: 0.25rem;
  text-decoration: inherit;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  color: ${color.white};
  cursor: pointer;
  display: flex;
  line-height: 1.25rem;
  &:hover {
    color: ${color.white};
    background-color: rgb(141, 141, 160, 0.1);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
