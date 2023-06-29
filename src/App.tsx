import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { Navigate, Route, Routes } from "react-router-dom";
import GPTHome from "./components/GPTHome";
import GPTContent from "./components/GPTContent";
import GPTAuthLogin from "./components/GPTAuthLogin";
import GPTLoginForm from "./components/GPTLoginForm";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserObjTypes, userObjState } from "./recoil/userObj.atom";
import onAuth from "./utils/onAuth";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useRecoilState<UserObjTypes | null>(
    userObjState
  );

  console.log("userObj");
  console.log(userObj);

  useEffect(() => {
    onAuth((user) => {
      console.log("user");
      console.log(user);
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
              <Route path="/" element={<GPTHome />} />
              <Route path="/c/:id" element={<GPTContent />} />
            </>
          ) : (
            <>
              <Route path="/u/login" element={<GPTLoginForm />} />
              <Route path="/auth/login" element={<GPTAuthLogin />} />
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
