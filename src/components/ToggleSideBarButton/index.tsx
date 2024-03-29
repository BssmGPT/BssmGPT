import { styled } from "styled-components";
import { color } from "@/styles/theme.style";

const StyledToggleSideBarButton = styled.button`
  height: 2.75rem;
  width: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.375rem;
  padding: 0.75rem;
  color: white;

  background: transparent;

  &:hover {
    background: ${color.gray400};
  }
`;

export default StyledToggleSideBarButton;
