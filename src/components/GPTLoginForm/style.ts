import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  padding-top: 32px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  width: 400px;
`;

export const WelcomeHeader = styled.header`
  padding: 40px 40px 24px;
`;

export const WelcomeText = styled.p`
  color: #2d333a;
  font-size: 32px;
  font-weight: bold;
  font-family: ColfaxAI, -apple-system, "system-ui", Helvetica, sans-serif;
  line-height: 1.5;
  letter-spacing: 0;
  margin-top: 24px;
  text-align: center;
`;

export const Form = styled.div`
  padding: 0 40px 40px;
`;

export const Button = styled.button`
  width: 100%;
  height: 52px;
  padding: 0 8px 0 52px;
  position: relative;
  text-align: start;
  background: white;
  border: 1px solid #c2c8d0;
  border-radius: 3px;
`;
