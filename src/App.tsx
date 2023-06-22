import ChatHistory from "./components/ChatHistory";
import Chatting from "./components/Chatting";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { color } from "./styles/theme.style";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <ChatHistoryWrapper>
          <ChatHistory />
        </ChatHistoryWrapper>
        <ChattingWrapper>
          <Routes>
            <Route path="/:id?" element={<Chatting />} />
          </Routes>
        </ChattingWrapper>
      </Container>
    </>
  );
}

export default App;

export const Container = styled.div`
  background-color: ${color.gray600};
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ChatHistoryWrapper = styled.div`
  background-color: ${color.gray700};
  flex-shrink: 0;
  width: 260px;
  padding: 0.5rem;
`;

export const ChattingWrapper = styled.div`
  flex-grow: 1;
`;
