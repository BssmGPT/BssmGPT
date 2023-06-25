import ChattingIcon from "@/assets/icons/ChattingIcon";
import * as S from "./style";
import TitleEditIcon from "@/assets/icons/TitleEditIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import { useState } from "react";
import CheckIcon from "@/assets/icons/CheckIcon";
import CancelIcon from "@/assets/icons/CancelIcon";

interface PropTypes {
  id: string;
  title: string;
  isCurrentPage: boolean;
}

export default function HistoryLink({ id, title, isCurrentPage }: PropTypes) {
  const [check, setCheck] = useState(false);

  const deleteThisHistory = () => {
    setCheck(false);

    console.log(`Delete ${id}: ${title}!`);
  };

  return (
    <S.StyledLink to={`/${id}`} $isCurrentPage={isCurrentPage}>
      {check ? <DeleteIcon /> : <ChattingIcon />}
      <S.Title>
        {title}
        <S.GradientBox />
      </S.Title>
      {isCurrentPage && (
        <S.ButtonContainer>
          {check ? (
            <>
              <S.Button onClick={deleteThisHistory}>
                <CheckIcon />
              </S.Button>
              <S.Button onClick={() => setCheck(false)}>
                <CancelIcon />
              </S.Button>
            </>
          ) : (
            <>
              <S.Button>
                <TitleEditIcon />
              </S.Button>
              <S.Button onClick={() => setCheck(true)}>
                <DeleteIcon />
              </S.Button>
            </>
          )}
        </S.ButtonContainer>
      )}
    </S.StyledLink>
  );
}
