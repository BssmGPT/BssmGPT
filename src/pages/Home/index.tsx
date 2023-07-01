import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import HomeItem from "@/components/HomeItem";
import { Column, Row } from "@/components/Flex";
import InputField from "@/components/InputField";
import HomeContentsConstant from "@/constants/HomeContents.constant";
import { useSetRecoilState } from "recoil";
import { valueState } from "@/recoil/gptField.atom";
import AppTemplate from "@/templates/AppTemplate";
import useGenerateNewChat from "@/hooks/useGenerateNewChat";

export default function Home() {
  const keyWordIcons = [<SunIcon />, <ThunderIcon />, <CautionIcon />];

  const setValue = useSetRecoilState(valueState);

  const generateNewChat = useGenerateNewChat();

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
        <InputField handleSubmit={generateNewChat} />
      </S.Wrapper>
    </AppTemplate>
  );
}
