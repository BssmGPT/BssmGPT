import GPTHistory from "./components/GPTHistory";
import GPTMain from "./components/GPTMain";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { color } from "./styles/theme.style";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <GPTHistoryWrapper>
          <GPTHistory />
        </GPTHistoryWrapper>
        <GPTMainWrapper>
          <Routes>
            <Route path="/:id?" element={<GPTMain />} />
          </Routes>
        </GPTMainWrapper>
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

export const GPTHistoryWrapper = styled.div`
  background-color: ${color.gray700};
  flex-shrink: 0;
  width: 260px;
  padding: 0.5rem;
`;

export const GPTMainWrapper = styled.div`
  flex-grow: 1;
`;
