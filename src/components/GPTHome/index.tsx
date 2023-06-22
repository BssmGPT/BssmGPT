import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import {
  GPTHomeItem,
  GPTHomeItemButton,
} from "@/components/common/GPTHomeItem";
import { Column, Row } from "@/components/common/Flex";
import GPTField from "../common/GPTField";

export default function GPTHome() {
  return (
    <S.GPTHomeWrapper>
      <S.GPTHomeContentBox>
        <S.Title>BSSMGPT</S.Title>
        <Row gap="0.875rem">
          <Column gap="0.875rem" alignitems="center" style={{ flex: 1 }}>
            <Column gap="0.5rem" alignitems="center">
              <SunIcon />
              <S.Overview>Examples</S.Overview>
            </Column>
            <GPTHomeItemButton>
              "Explain quantum computing in simple terms" →
            </GPTHomeItemButton>
            <GPTHomeItemButton>
              "Got any creative ideas for a 10 year old’s birthday?" →
            </GPTHomeItemButton>
            <GPTHomeItemButton>
              "How do I make an HTTP request in Javascript?" →
            </GPTHomeItemButton>
          </Column>

          <Column gap="0.875rem" alignitems="center" style={{ flex: 1 }}>
            <Column gap="0.5rem" alignitems="center">
              <ThunderIcon />
              <S.Overview>Capabilities</S.Overview>
            </Column>
            <GPTHomeItem>
              Remembers what user said earlier in the conversation
            </GPTHomeItem>
            <GPTHomeItem>
              Allows user to provide follow-up corrections
            </GPTHomeItem>
            <GPTHomeItem>Trained to decline inappropriate requests</GPTHomeItem>
          </Column>

          <Column gap="0.875rem" alignitems="center" style={{ flex: 1 }}>
            <Column gap="0.5rem" alignitems="center">
              <CautionIcon />
              <S.Overview>Limitations</S.Overview>
            </Column>
            <GPTHomeItem>
              May occasionally generate incorrect information
            </GPTHomeItem>
            <GPTHomeItem>
              May occasionally produce harmful instructions or biased content
            </GPTHomeItem>
            <GPTHomeItem>
              Limited knowledge of world and events after 2021
            </GPTHomeItem>
          </Column>
        </Row>
      </S.GPTHomeContentBox>
      <GPTField />
    </S.GPTHomeWrapper>
  );
}
