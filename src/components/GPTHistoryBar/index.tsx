import { Column } from "@/components/common/Flex";
import HistoryLink from "@/components/common/HistoryLink";
import NewChatLink from "./NewChatLink";
import * as S from "./style";
import History from "@/constants/History.constant";
import { useLocation } from "react-router-dom";
import Features from "./Features";
import { useRecoilValue } from "recoil";
import HideSideBarButton from "../common/HideSideBarButton";

export default function GPTHistory() {
  const location = useLocation();
  const historyItems = useRecoilValue(History);

  return (
    <S.Container>
      <S.TopButtons>
        <NewChatLink />
        <HideSideBarButton />
      </S.TopButtons>
      <Column style={{ flex: 1 }}>
        {historyItems.map((item) => (
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
