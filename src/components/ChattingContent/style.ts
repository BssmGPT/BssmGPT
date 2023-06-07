import styled from "styled-components";
import { color } from "../../styles/theme.style";

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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  flex: 1;
`;

export const Item = styled.div`
  text-align: center;
  padding: 0.75rem;
  background-color: #ffffff0d;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const ItemButton = styled(Item)`
  cursor: pointer;
  &:hover {
    background-color: ${color.gray700};
  }
`;

export const Overview = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
