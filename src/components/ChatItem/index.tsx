import EditIcon from "@/assets/icons/EditIcon";
import * as S from "./style";
import CopyIcon from "@/assets/icons/CopyIcon";
import ThumbsUpIcon from "@/assets/icons/ThumbsUpIcon";
import THumbsDownIcon from "@/assets/icons/ThumbsDownIcon";
import { Row } from "../Flex";
import UserProfileImage from "../UserProfileImage";
import GPTIcon from "@/assets/icons/GPTIcon";
import { useState } from "react";
import Textarea from "../Textarea";
import { useSetRecoilState } from "recoil";
import { loadingState } from "@/recoil/gptField.atom";
import { auth } from "@/services/firebase";
import useGenerateChat from "@/hooks/useGenerateChat";

interface PropTypes {
  id?: string;
  item: { role: "user" | "assistant"; content: string };
  prevMessages: { role: "user" | "assistant"; content: string; mid: string }[];
}

export default function ChatItem({ id, item, prevMessages }: PropTypes) {
  const [value, setValue] = useState(item.content);
  const [isEdit, setIsEdit] = useState(false);
  const setLoading = useSetRecoilState(loadingState);

  const updateChat = useGenerateChat();

  const handleSubmit = async () => {
    setLoading(true);
    await updateChat(id as string, value, prevMessages);
    setLoading(false);
  };

  return (
    <S.Wrapper role={item.role}>
      <S.Container>
        {item.role === "user" ? (
          <UserProfileImage url={auth.currentUser?.photoURL || ""} />
        ) : (
          <GPTIcon />
        )}

        <S.Content role={item.role}>
          {isEdit ? (
            <Textarea
              value={value}
              setValue={setValue}
              submitValue={handleSubmit}
            />
          ) : (
            <S.Text>{item.content}</S.Text>
          )}
          {item.role === "user" ? (
            <>
              <S.ButtonWrapper>
                {isEdit ? (
                  <S.ButtonContainer>
                    <S.Button onClick={handleSubmit}>Save & Submit</S.Button>
                    <S.Button $type="cancel" onClick={() => setIsEdit(false)}>
                      Cancel
                    </S.Button>
                  </S.ButtonContainer>
                ) : (
                  <S.LogoButtonContainer>
                    <S.LogoButton onClick={() => setIsEdit(true)}>
                      <EditIcon />
                    </S.LogoButton>
                  </S.LogoButtonContainer>
                )}
              </S.ButtonWrapper>
            </>
          ) : (
            <>
              <S.ButtonWrapper>
                <S.LogoButtonContainer $alwaysShow>
                  <S.LogoButton>
                    <CopyIcon />
                  </S.LogoButton>
                  <Row gap="0.25rem">
                    <S.LogoButton>
                      <ThumbsUpIcon />
                    </S.LogoButton>
                    <S.LogoButton>
                      <THumbsDownIcon />
                    </S.LogoButton>
                  </Row>
                </S.LogoButtonContainer>
              </S.ButtonWrapper>
            </>
          )}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}
