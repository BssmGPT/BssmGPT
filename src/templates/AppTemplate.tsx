import SideBarIcon from "@/assets/icons/SideBarIcon";
import GPTHistoryBar from "@/components/common/GPTHistoryBar";
import StyledHideSideBarButton from "@/components/common/StyledHideSideBarButton";
import { visibleSideBarState } from "@/recoil/sideBar.atom";
import { color } from "@/styles/theme.style";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function AppTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visibleSideBar, setVisibleSideBar] =
    useRecoilState(visibleSideBarState);

  return (
    <>
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
        {children}
      </GPTMainWrapper>
    </>
  );
}

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
  background: ${color.gray600};
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
