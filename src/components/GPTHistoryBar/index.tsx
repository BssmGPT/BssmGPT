import { Column } from "@/components/common/Flex";
import HistoryLink from "@/components/common/HistoryLink";
import NewChatLink from "./NewChatLink";
import { GPTHistoryBox } from "./style";
import History from "@/constants/History.constant";

export default function GPTHistory() {
  return (
    <GPTHistoryBox>
      <NewChatLink></NewChatLink>
      <Column>
        {History.map((item) => (
          <HistoryLink key={item.id} id={item.id} title={item.title} />
        ))}
      </Column>
    </GPTHistoryBox>
  );
}
