import ChatHistory from "./components/ChatHistory";
import Chatting from "./components/Chatting";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { color } from "./styles/theme.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <TemplateBox>
        <ChatHistoryFrame>
          <ChatHistory />
        </ChatHistoryFrame>
        <ChattingFrame>
          <Chatting />
        </ChattingFrame>
      </TemplateBox>
    </>
  );
}

export default App;

export const TemplateBox = styled.div`
  background-color: ${color.gray600};
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ChatHistoryFrame = styled.div`
  background-color: ${color.gray700};
  width: 260px;
  padding: 0.5rem;
`;

export const ChattingFrame = styled.div`
  flex-grow: 1;
`;
