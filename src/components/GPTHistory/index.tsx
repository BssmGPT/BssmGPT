import { Column } from "../common/Flex";
import HistoryLink from "../common/HistoryLink";
import NewChatLink from "./NewChatLink";
import { GPTHistoryBox } from "./style";
import HistoryInfos from "../../constants/History.json";

export default function GPTHistory() {
  return (
    <GPTHistoryBox>
      <NewChatLink></NewChatLink>
      <Column>
        {HistoryInfos.map((item) => (
          <HistoryLink key={item.id} id={item.id} title={item.title} />
        ))}
      </Column>
    </GPTHistoryBox>
  );
}
