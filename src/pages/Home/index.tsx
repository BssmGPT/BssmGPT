import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import HomeItem from "@/components/HomeItem";
import { Column, Row } from "@/components/Flex";
import InputField from "@/components/InputField";
import HomeContentsConstant from "@/constants/HomeContents.constant";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingState, valueState } from "@/recoil/gptField.atom";
import AppTemplate from "@/templates/AppTemplate";
import useGenerateChat from "@/hooks/useGenerateChat";
import { v4 as uuidv4 } from "uuid";
import useGenerateHistory from "@/hooks/useGenerateHistory";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const keyWordIcons = [<SunIcon />, <ThunderIcon />, <CautionIcon />];

  const [value, setValue] = useRecoilState(valueState);
  const setLoading = useSetRecoilState(loadingState);

  const generateNewChat = useGenerateChat();
  const generateHistory = useGenerateHistory();

  const handleSubmit = async () => {
    setLoading(true);
    const id = uuidv4();
    await generateNewChat(id, value);
    await generateHistory(id);
    navigate(`/c/${id}`);
    setLoading(false);
  };

  return (
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
  );
}
