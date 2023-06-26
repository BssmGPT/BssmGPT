import GPTHistoryBar from "./components/GPTHistoryBar";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { color } from "./styles/theme.style";
import { Route, Routes } from "react-router-dom";
import GPTHome from "./components/GPTHome";
import GPTContent from "./components/GPTContent";
import StyledHideSideBarButton from "./components/common/StyledHideSideBarButton";
import SideBarIcon from "./assets/icons/SideBarIcon";
import { useRecoilState } from "recoil";
import { visibleSideBarState } from "./recoil/sideBar.atom";

function App() {
  const [visibleSideBar, setVisibleSideBar] =
    useRecoilState(visibleSideBarState);
  return (
    <>
      <GlobalStyle />

      <Container>
        <GPTHistoryBarWrapper $visibleSideBar={visibleSideBar}>
          <GPTHistoryBar />
        </GPTHistoryBarWrapper>
        <GPTMainWrapper>
          <HideSideBar
            $visibleSideBar={visibleSideBar}
            onClick={() => setVisibleSideBar(true)}
          >
            <SideBarIcon />
          </HideSideBar>
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

const Container = styled.div`
  background-color: ${color.gray600};
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const GPTHistoryBarWrapper = styled.div<{ $visibleSideBar: boolean }>`
  background-color: ${color.gray700};
  flex-shrink: 0;
  transition: width 0.15s;
  width: ${({ $visibleSideBar }) => ($visibleSideBar ? "260px" : "0px")};
  overflow: hidden;
`;

const GPTMainWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

const HideSideBar = styled(StyledHideSideBarButton)<{
  $visibleSideBar: boolean;
}>`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1;
  visibility: ${({ $visibleSideBar }) =>
    $visibleSideBar ? "hidden" : "visible"};
  transition: opacity
    ${({ $visibleSideBar }) => ($visibleSideBar ? "0s" : "0.15s")};
  opacity: ${({ $visibleSideBar }) => ($visibleSideBar ? 0 : 1)};
`;
