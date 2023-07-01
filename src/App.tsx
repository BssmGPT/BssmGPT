import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Content from "@/pages/Content";
import Login from "./pages/Login";
import LoginForm from "@/pages/AuthForm";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserObjTypes, userObjState } from "./recoil/userObj.atom";
import onAuth from "./utils/onAuth";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useRecoilState<UserObjTypes | null>(
    userObjState
  );

  useEffect(() => {
    onAuth((user) => {
      if (user) {
        const { displayName, photoURL } = user;
        setUserObj({
          displayName: displayName || "",
          photoURL: photoURL || "",
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, [setUserObj]);

  return (
    <Container>
      <GlobalStyle />
      {init && (
        <Routes>
          {userObj ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/c/:id" element={<Content />} />
            </>
          ) : (
            <>
              <Route path="/u/login" element={<LoginForm />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/auth/login" />} />
            </>
          )}
        </Routes>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
