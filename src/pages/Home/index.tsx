import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import HomeItem from "@/components/HomeItem";
import { Column, Row } from "@/components/Flex";
import InputField from "@/components/InputField";
import HomeContentsConstant from "@/constants/HomeContents.constant";
import { useSetRecoilState } from "recoil";
import { loadingState, valueState } from "@/recoil/gptField.atom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppTemplate from "@/templates/AppTemplate";
import { v4 as uuidv4 } from "uuid";
import postMessages from "@/utils/apis/postMessages";
import postHistory from "@/utils/apis/postHistory";
import { auth } from "@/services/firebase";

export default function Home() {
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
              {HomeContentsConstant.map((content, index) => (
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
                  <HomeItem
                    type={content.type}
                    onClick={() => setValue(content.descriptions[0])}
                  >
                    "{content.descriptions[0]}" →
                  </HomeItem>
                  <HomeItem
                    type={content.type}
                    onClick={() => setValue(content.descriptions[1])}
                  >
                    "{content.descriptions[1]}" →
                  </HomeItem>
                  <HomeItem
                    type={content.type}
                    onClick={() => setValue(content.descriptions[2])}
                  >
                    "{content.descriptions[2]}" →
                  </HomeItem>
                </Column>
              ))}
            </Row>
          </S.ContentsBox>
        </S.Container>
        <InputField handleSubmit={handleSubmit} />
      </S.Wrapper>
    </AppTemplate>
  );
}
