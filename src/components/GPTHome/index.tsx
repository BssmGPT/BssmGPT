import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import { GPTHomeItem } from "@/components/common/GPTHomeItem";
import { Column, Row } from "@/components/common/Flex";
import GPTField from "../common/GPTField";
import GPTHomeContents from "@/constants/GPTHomeContents.constant";
import { useSetRecoilState } from "recoil";
import { loadingState, valueState } from "@/recoil/gptField.atom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "@/templates/AppTemplate";
import { v4 as uuidv4 } from "uuid";
import postMessages from "@/utils/apis/postMessages";
import postHistory from "@/utils/apis/postHistory";
import { auth } from "@/services/firebase";

export default function GPTHome() {
  const keyWordIcons = [<SunIcon />, <ThunderIcon />, <CautionIcon />];

  const navigate = useNavigate();

  const setValue = useSetRecoilState(valueState);
  const setLoading = useSetRecoilState(loadingState);

  const handleSubmit = useCallback(
    async (value: string) => {
      setLoading(true);

      const newLinkId = uuidv4();
      navigate(`/c/${newLinkId}`);
      await postHistory(newLinkId, auth.currentUser?.uid || "user");
      await postMessages(newLinkId, value, []);

      setLoading(false);
    },
    [navigate, setLoading]
  );

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
                    onClick={() => setValue(content.descriptions[0])}
                  >
                    "{content.descriptions[0]}" →
                  </GPTHomeItem>
                  <GPTHomeItem
                    type={content.type}
                    onClick={() => setValue(content.descriptions[1])}
                  >
                    "{content.descriptions[1]}" →
                  </GPTHomeItem>
                  <GPTHomeItem
                    type={content.type}
                    onClick={() => setValue(content.descriptions[2])}
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
