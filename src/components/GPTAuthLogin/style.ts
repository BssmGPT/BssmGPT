import { color } from "@/styles/theme.style";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  background: ${color.gray600};
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Logo = styled.div`
  width: 41px;
  height: 41px;
  margin-bottom: 1.25rem;
`;

export const Text = styled.p``;

export const Button = styled.button`
  background-color: #10a37e;
  color: white;
  padding: 8px 12px;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid transparent;
`;

export const BottomText = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 0;
  color: ${color.gray300};
  text-align: center;
`;

export const Link = styled.a`
  margin: 0 0.75rem;
`;

export const VerticalLink = styled.span`
  color: #565869;
`;
