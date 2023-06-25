import { color } from "@/styles/theme.style";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
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

export const Menu = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  padding: 4px 0 6px;
  border-radius: 0.375rem;
  background: ${color.gray800};
  transition-duration: 0.2s;
  transition-duration: color 0;

  &.hidden {
    transform: translateY(0.25rem);
    transition-duration: 0.15s;
    opacity: 0;
    visibility: hidden;
  }
`;

export const Button = styled.button`
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    background: ${color.gray500};
  }
`;

export const HorizontalLine = styled.div`
  margin: 0.375rem 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;
