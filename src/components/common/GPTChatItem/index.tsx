import EditIcon from "@/assets/icons/EditIcon";
import * as S from "./style";
import CopyIcon from "@/assets/icons/CopyIcon";
import ThumbsUpIcon from "@/assets/icons/ThumbsUpIcon";
import THumbsDownIcon from "@/assets/icons/ThumbsDownIcon";
import { Row } from "../Flex";
import UserProfileImage from "../UserProfileImage";
import GPTProfileImage from "../GPTProfileImage";

interface PropTypes {
  chatItem: { role: "user" | "gpt"; content: string };
}

export default function GPTChatItem({ chatItem }: PropTypes) {
  return (
    <S.Wrapper role={chatItem.role}>
      <S.Container>
        {chatItem.role === "user" ? <UserProfileImage /> : <GPTProfileImage />}

        <S.Content role={chatItem.role}>
          <S.Text>{chatItem.content}</S.Text>
          {chatItem.role === "user" ? (
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
