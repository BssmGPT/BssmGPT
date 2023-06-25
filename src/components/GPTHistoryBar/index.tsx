import { Column } from "@/components/common/Flex";
import HistoryLink from "@/components/common/HistoryLink";
import NewChatLink from "./NewChatLink";
import { Container } from "./style";
import History from "@/constants/History.constant";
import { useLocation } from "react-router-dom";
import Features from "./Features";
import { useRecoilValue } from "recoil";

export default function GPTHistory() {
  const location = useLocation();
  const historyItem = useRecoilValue(History);
  console.log("ASDFASDF");

  return (
    <Container>
      <NewChatLink />
      <Column style={{ flex: 1 }}>
        {historyItem.map((item) => (
          <HistoryLink
            key={item.id}
            id={item.id}
            title={item.title}
            isCurrentPage={location.pathname.slice(1) === item.id}
          />
        ))}
      </Column>
      <Features />
    </Container>
  );
}
