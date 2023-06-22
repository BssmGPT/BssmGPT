import * as S from "./style";
import SunIcon from "../../../assets/icons/SunIcon";
import ThunderIcon from "../../../assets/icons/ThunderIcon";
import CautionIcon from "../../../assets/icons/CautionIcon";
import ContentItem from "../../common/ContentItem";
import { Column, Row } from "../../common/Flex";

export default function ChattingContent() {
  return (
    <S.ChattingContentBox>
      <S.Title>BSSMGPT</S.Title>
      <Row gap="0.875rem">
        <Column gap="0.875rem" alignitems="center" style={{ flex: 1 }}>
          <Column gap="0.5rem" alignitems="center">
            <SunIcon />
            <S.Overview>Examples</S.Overview>
          </Column>
          <ContentItem type="button">
            "Explain quantum computing in simple terms" →
          </ContentItem>
          <ContentItem type="button">
            "Got any creative ideas for a 10 year old’s birthday?" →
          </ContentItem>
          <ContentItem type="button">
            "How do I make an HTTP request in Javascript?" →
          </ContentItem>
        </Column>

        <Column gap="0.875rem" alignitems="center" style={{ flex: 1 }}>
          <Column gap="0.5rem" alignitems="center">
            <ThunderIcon />
            <S.Overview>Capabilities</S.Overview>
          </Column>
          <ContentItem>
            Remembers what user said earlier in the conversation
          </ContentItem>
          <ContentItem>
            Allows user to provide follow-up corrections
          </ContentItem>
          <ContentItem>Trained to decline inappropriate requests</ContentItem>
        </Column>

        <Column gap="0.875rem" alignitems="center" style={{ flex: 1 }}>
          <Column gap="0.5rem" alignitems="center">
            <CautionIcon />
            <S.Overview>Limitations</S.Overview>
          </Column>
          <ContentItem>
            May occasionally generate incorrect information
          </ContentItem>
          <ContentItem>
            May occasionally produce harmful instructions or biased content
          </ContentItem>
          <ContentItem>
            Limited knowledge of world and events after 2021
          </ContentItem>
        </Column>
      </Row>
    </S.ChattingContentBox>
  );
}
