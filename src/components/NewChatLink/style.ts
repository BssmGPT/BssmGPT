import styled from "styled-components";

export const NewChatLinkLayout = styled.a`
  border-color: hsla(0, 0%, 100%, 0.2);
  border-width: 1px;
  border-radius: 0.375rem;
  gap: 0.75rem;
  display: flex;
  padding: 0.75rem;
  font-size: 0.835rem;
  align-items: center;
  margin-bottom: 0.25rem;
  text-decoration: inherit;
  border: 1px solid #555659;
  color: white;
  cursor: pointer;
  display: flex;
  line-height: 1.25rem;
  &:hover {
    color: white;
    background-color: #2b2c2f;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
