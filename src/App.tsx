import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { Route, Routes } from "react-router-dom";
import GPTHome from "./components/GPTHome";
import GPTContent from "./components/GPTContent";
import GPTAuthLogin from "./components/GPTAuthLogin";
import GPTLoginForm from "./components/GPTLoginForm";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/u/login" element={<GPTLoginForm />} />
        <Route path="/auth/login" element={<GPTAuthLogin />} />
        <Route path="/" element={<GPTHome />} />
        <Route path="/c/:id" element={<GPTContent />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
