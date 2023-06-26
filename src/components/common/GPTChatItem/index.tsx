import EditIcon from "@/assets/icons/EditIcon";
import * as S from "./style";
import CopyIcon from "@/assets/icons/CopyIcon";
import ThumbsUpIcon from "@/assets/icons/ThumbsUpIcon";
import THumbsDownIcon from "@/assets/icons/ThumbsDownIcon";
import { Row } from "../Flex";
import UserProfileImage from "../UserProfileImage";
import GPTProfileImage from "../GPTProfileImage";

interface PropTypes {
  item: { role: "user" | "system"; content: string };
}

export default function GPTChatItem({ item }: PropTypes) {
  return (
    <S.Wrapper role={item.role}>
      <S.Container>
        {item.role === "user" ? <UserProfileImage /> : <GPTProfileImage />}

        <S.Content role={item.role}>
          <S.Text>{item.content}</S.Text>
          {item.role === "user" ? (
            <>
              <S.ButtonWrapper>
                <S.ButtonContainer>
                  <S.Button>
                    <EditIcon />
                  </S.Button>
                </S.ButtonContainer>
              </S.ButtonWrapper>
            </>
          ) : (
            <>
              <S.ButtonWrapper>
                <S.ButtonContainer $alwaysShow>
                  <S.Button>
                    <CopyIcon />
                  </S.Button>
                  <Row gap="0.25rem">
                    <S.Button>
                      <ThumbsUpIcon />
                    </S.Button>
                    <S.Button>
                      <THumbsDownIcon />
                    </S.Button>
                  </Row>
                </S.ButtonContainer>
              </S.ButtonWrapper>
            </>
          )}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}
