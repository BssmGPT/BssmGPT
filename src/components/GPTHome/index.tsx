import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import { GPTHomeItem } from "@/components/common/GPTHomeItem";
import { Column, Row } from "@/components/common/Flex";
import GPTField from "../common/GPTField";
import GPTHomeContents from "@/constants/GPTHomeContents.constant";
import { useRecoilState, useSetRecoilState } from "recoil";
import { valueState } from "@/recoil/gptField.atom";
import { useCallback } from "react";
import HistoryItemsState from "@/constants/HistoryItems.constant";
import sendMessage from "@/utils/chat";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function GPTHome() {
  const keyWordIcons = [<SunIcon />, <ThunderIcon />, <CautionIcon />];

  const navigate = useNavigate();

  const setValue = useSetRecoilState(valueState);
  const [historyItems, setHistoryItems] = useRecoilState(HistoryItemsState);

  const handleSubmit = useCallback(
    async (value: string) => {
      const newLinkId = uuidv4();

      const userMessage: {
        id: string;
        role: "user" | "assistant";
        content: string;
      } = { id: uuidv4(), role: "user", content: value };

      setHistoryItems(
        historyItems.concat({
          id: newLinkId,
          title: "New Chat",
          messages: [userMessage],
        })
      );

      navigate(`/${newLinkId}`);

      const response = await sendMessage([{ role: "user", content: value }]);
      const message = response["choices"][0]["message"];

      setHistoryItems(
        historyItems.concat({
          id: newLinkId,
          title: `${new Date()}`,
          messages: [userMessage, { id: uuidv4(), ...message }],
        })
      );
    },
    [historyItems, setHistoryItems, navigate]
  );

  const inputDesciption = (description: string) => {
    setValue(description);
  };

  return (
    <S.Container>
      <S.ContentsBox>
        <S.Title>BSSMGPT</S.Title>
        <Row gap="0.875rem">
          {GPTHomeContents.map((content, index) => (
            <Column
              gap="0.875rem"
              alignitems="center"
              style={{ flex: 1 }}
              key={content.keyWord}
            >
              <Column gap="0.5rem" alignitems="center">
                {keyWordIcons[index]}
                <S.KeyWord>{content.keyWord}</S.KeyWord>
              </Column>
              <GPTHomeItem
                type={content.type}
                onClick={() => inputDesciption(content.descriptions[0])}
              >
                "{content.descriptions[0]}" →
              </GPTHomeItem>
              <GPTHomeItem
                type={content.type}
                onClick={() => inputDesciption(content.descriptions[1])}
              >
                "{content.descriptions[1]}" →
              </GPTHomeItem>
              <GPTHomeItem
                type={content.type}
                onClick={() => inputDesciption(content.descriptions[2])}
              >
                "{content.descriptions[2]}" →
              </GPTHomeItem>
            </Column>
          ))}
        </Row>
      </S.ContentsBox>
      <GPTField handleSubmit={handleSubmit} />
    </S.Container>
  );
}
