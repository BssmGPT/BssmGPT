import GPTHistoryBar from "./components/GPTHistoryBar";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { color } from "./styles/theme.style";
import { Route, Routes } from "react-router-dom";
import GPTHome from "./components/GPTHome";
import GPTContent from "./components/GPTContent";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <GPTHistoryBarWrapper>
          <GPTHistoryBar />
        </GPTHistoryBarWrapper>
        <GPTMainWrapper>
          <Routes>
            <Route path="/" element={<GPTHome />} />
            <Route path="/:id" element={<GPTContent />} />
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

export const GPTHistoryBarWrapper = styled.div`
  background-color: ${color.gray700};
  flex-shrink: 0;
  width: 260px;
`;

export const GPTMainWrapper = styled.div`
  flex-grow: 1;
`;
