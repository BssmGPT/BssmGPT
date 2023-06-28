import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import { GPTHomeItem } from "@/components/common/GPTHomeItem";
import { Column, Row } from "@/components/common/Flex";
import GPTField from "../common/GPTField";
import GPTHomeContents from "@/constants/GPTHomeContents.constant";
import { useSetRecoilState } from "recoil";
import { valueState } from "@/recoil/gptField.atom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "@/templates/AppTemplate";
import { v4 as uuidv4 } from "uuid";
import postMessages from "@/utils/apis/postMessages";
import postHistory from "@/utils/apis/postHistory";

export default function GPTHome() {
  const keyWordIcons = [<SunIcon />, <ThunderIcon />, <CautionIcon />];

  const navigate = useNavigate();

  const setValue = useSetRecoilState(valueState);

  const handleSubmit = useCallback(
    (value: string) => {
      const newLinkId = uuidv4();
      postMessages(newLinkId, value, []);
      navigate(`/c/${newLinkId}`);
      postHistory(newLinkId);
    },
    [navigate]
  );

  const inputDesciption = (description: string) => {
    setValue(description);
  };

  return (
    <AppTemplate>
      <S.Wrapper>
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
        </S.Container>
        <GPTField handleSubmit={handleSubmit} />
      </S.Wrapper>
    </AppTemplate>
  );
}
