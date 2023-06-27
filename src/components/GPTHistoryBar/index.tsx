import { Column } from "@/components/common/Flex";
import HistoryLink from "@/components/common/HistoryLink";
import NewChatLink from "./NewChatLink";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import Features from "./Features";
import { useSetRecoilState } from "recoil";
import SideBarIcon from "@/assets/icons/SideBarIcon";
import { visibleSideBarState } from "@/recoil/sideBar.atom";
import getAllHistoryLinks from "@/utils/getAllHistoryLinks";
import { useEffect, useState } from "react";

export default function GPTHistory() {
  const location = useLocation();
  const setVisibleSideBar = useSetRecoilState(visibleSideBarState);
  const [histories, setHistories] = useState<any[]>([]);

  useEffect(() => {
    getAllHistoryLinks().then((data) => setHistories(data));
  }, []);

  return (
    <S.Container>
      <S.TopButtons>
        <NewChatLink />
        <S.HideSideBarButton onClick={() => setVisibleSideBar(false)}>
          <SideBarIcon />
        </S.HideSideBarButton>
      </S.TopButtons>
      <Column style={{ flex: 1 }}>
        {histories.map((doc: { id: string; title: string }) => (
          <HistoryLink
            key={doc.id}
            id={doc.id}
            title={doc.title}
            isCurrentPage={location.pathname.slice(1) === doc.id}
          />
        ))}
      </Column>
      <Features />
    </S.Container>
  );
}
