import * as S from "./style";
import SunIcon from "@/assets/icons/SunIcon";
import ThunderIcon from "@/assets/icons/ThunderIcon";
import CautionIcon from "@/assets/icons/CautionIcon";
import { GPTHomeItem } from "@/components/common/GPTHomeItem";
import { Column, Row } from "@/components/common/Flex";
import GPTField from "../common/GPTField";
import GPTHomeContents from "@/constants/GPTHomeContents.constant";

export default function GPTHome() {
  const keyWordIcons = [<SunIcon />, <ThunderIcon />, <CautionIcon />];

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <S.GPTHomeWrapper>
      <S.GPTHomeContentBox>
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
              <GPTHomeItem type="button">{content.descriptions[0]}</GPTHomeItem>
              <GPTHomeItem type="button">{content.descriptions[1]}</GPTHomeItem>
              <GPTHomeItem type="button">{content.descriptions[2]}</GPTHomeItem>
            </Column>
          ))}
        </Row>
      </S.GPTHomeContentBox>
      <GPTField handleSubmit={handleSubmit} />
    </S.GPTHomeWrapper>
  );
}
