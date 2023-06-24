import { color } from "@/styles/theme.style";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  border: 0 solid rgba(255, 255, 255, 0.2);
  border-top-width: 1px;
  padding-top: 0.5rem;
`;

export const ToggleButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: white;
  background: transparent;

  transition-duration: 0.2s;

  &:hover {
    background: ${color.gray600};
  }
`;

export const UserName = styled.p`
  text-align: left;
  flex: 1;
`;
