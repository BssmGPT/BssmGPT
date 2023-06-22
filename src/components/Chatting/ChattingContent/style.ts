import styled from "styled-components";
import { color } from "../../../styles/theme.style";

export const ChattingContentBox = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  color: ${color.gray100};
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${color.white};
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  flex: 1;
`;

export const Overview = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
