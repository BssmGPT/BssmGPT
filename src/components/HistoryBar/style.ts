import styled from "styled-components";
import StyledHideSideBarButton from "../ToggleSideBarButton";

export const Container = styled.nav`
  height: 100vh;
  width: 260px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const TopButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const HideSideBarButton = styled(StyledHideSideBarButton)``;
