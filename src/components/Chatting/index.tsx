import * as S from "./style";
import SunIcon from "../../assets/icons/SunIcon";
import ThunderIcon from "../../assets/icons/ThunderIcon";
import CautionIcon from "../../assets/icons/CautionIcon";
import Flex from "../common/Flex";

export default function Chatting() {
  return (
    <S.ChattingBox>
      <S.Title>BSSMGPT</S.Title>
      <Flex direction="row" gap="0.875rem">
        <S.List>
          <Flex direction="column" gap="0.5rem" alignitems="center">
            <SunIcon />
            Examples
          </Flex>
          <S.ItemButton>
            "Explain quantum computing in simple terms" →
          </S.ItemButton>
          <S.ItemButton>
            "Got any creative ideas for a 10 year old’s birthday?" →
          </S.ItemButton>
          <S.ItemButton>
            "How do I make an HTTP request in Javascript?" →
          </S.ItemButton>
        </S.List>
        <S.List>
          <Flex direction="column" gap="0.5rem" alignitems="center">
            <ThunderIcon />
            Capabilities
          </Flex>
          <S.Item>Remembers what user said earlier in the conversation</S.Item>
          <S.Item>Allows user to provide follow-up corrections</S.Item>
          <S.Item>Trained to decline inappropriate requests</S.Item>
        </S.List>
        <S.List>
          <Flex direction="column" gap="0.5rem" alignitems="center">
            <CautionIcon />
            Limitations
          </Flex>
          <S.Item>May occasionally generate incorrect information</S.Item>
          <S.Item>
            May occasionally produce harmful instructions or biased content
          </S.Item>
          <S.Item>Limited knowledge of world and events after 2021</S.Item>
        </S.List>
      </Flex>
    </S.ChattingBox>
  );
}
