import styled from "styled-components";
import { color } from "@/styles/theme.style";

export const GPTHomeWrapper = styled.div`
  height: 100vh;
  padding-top: 20vh;
  position: relative;
`;

export const GPTHomeContentBox = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  color: ${color.gray100};

  @media (min-width: 768px) {
    max-width: 42rem;
  }

  @media (min-width: 1024px) {
    max-width: 48rem;
  }
`;

export const Title = styled.div`
  font-size: 2.25rem;
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

export const KeyWord = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
