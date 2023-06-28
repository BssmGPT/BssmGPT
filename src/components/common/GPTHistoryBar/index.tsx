import { Column } from "@/components/common/Flex";
import HistoryLink from "@/components/common/HistoryLink";
import NewChatLink from "./NewChatLink";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import Features from "./Features";
import { useSetRecoilState } from "recoil";
import SideBarIcon from "@/assets/icons/SideBarIcon";
import { visibleSideBarState } from "@/recoil/sideBar.atom";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function GPTHistoryBar() {
  const location = useLocation();
  // const historyItems = useRecoilValue(History);
  const [histories, setHistories] = useState<any[]>([]);
  const setVisibleSideBar = useSetRecoilState(visibleSideBarState);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "history"), (snapshot) => {
      setHistories(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsub();
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
        {histories.map((item) => (
          <HistoryLink
            key={item.id}
            id={item.id}
            title={item.title}
            isCurrentPage={location.pathname.slice(1) === item.id}
          />
        ))}
      </Column>
      <Features />
    </S.Container>
  );
}
