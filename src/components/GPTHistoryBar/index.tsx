import { Column } from "@/components/common/Flex";
import HistoryLink from "@/components/common/HistoryLink";
import NewChatLink from "./NewChatLink";
import { Container } from "./style";
import History from "@/constants/History.constant";
import { useLocation } from "react-router-dom";

export default function GPTHistory() {
  const location = useLocation();

  return (
    <Container>
      <NewChatLink></NewChatLink>
      <Column>
        {History.map((item) => (
          <HistoryLink
            key={item.id}
            id={item.id}
            title={item.title}
            isCurrentPage={location.pathname.slice(1) === item.id}
          />
        ))}
      </Column>
    </Container>
  );
}
