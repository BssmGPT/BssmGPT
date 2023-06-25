import ChattingIcon from "@/assets/icons/ChattingIcon";
import * as S from "./style";
import TitleEditIcon from "@/assets/icons/TitleEditIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import { useEffect, useRef, useState } from "react";
import CheckIcon from "@/assets/icons/CheckIcon";
import CancelIcon from "@/assets/icons/CancelIcon";
import { useRecoilState, useSetRecoilState } from "recoil";
import HistoryItemState from "@/constants/History.constant";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  id: string;
  title: string;
  isCurrentPage: boolean;
}

export default function HistoryLink({ id, title, isCurrentPage }: PropTypes) {
  const navigate = useNavigate();

  const titleInputRef = useRef<HTMLInputElement>(null);

  const [edit, setEdit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [historyItem, setHistoryItem] = useRecoilState(HistoryItemState);

  const deleteHistory = () => {
    setIsCheck(false);

    setHistoryItem([...historyItem.filter((item) => item.id !== id)]);

    navigate("/", { replace: true });
  };

  const cancelEdit = () => {
    setTitleValue(title);
    setEdit(false);
  };

  const changeTitle = () => {
    setEdit(false);

    const changedItem = historyItem.find((item) => item.id === id);

    if (changedItem) {
      setHistoryItem([
        { ...changedItem, title: titleValue },
        ...historyItem.filter((item) => item !== changedItem),
      ]);
    }
  };

  return (
    <S.NavigateBox
      onClick={() => isCheck || navigate(`/${id}`)}
      $isCurrentPage={isCurrentPage}
      $isEdit={edit}
    >
      {isCheck ? <DeleteIcon /> : <ChattingIcon />}
      {edit ? (
        <S.TitleInputWrapper
          onSubmit={(e) => {
            e.preventDefault();
            changeTitle();
          }}
        >
          <S.TitleInput
            autoFocus
            ref={titleInputRef}
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            onBlur={cancelEdit}
          />
        </S.TitleInputWrapper>
      ) : (
        <S.Title>
          {title}
          <S.GradientBox />
        </S.Title>
      )}

      {isCurrentPage && (
        <S.ButtonContainer>
          {isCheck && (
            <>
              <S.IconButton onClick={deleteHistory}>
                <CheckIcon />
              </S.IconButton>
              <S.IconButton onClick={() => setIsCheck(false)}>
                <CancelIcon />
              </S.IconButton>
            </>
          )}
          {edit && (
            <>
              <S.IconButton onMouseDown={changeTitle}>
                <CheckIcon />
              </S.IconButton>
              <S.IconButton onMouseDown={cancelEdit}>
                <CancelIcon />
              </S.IconButton>
            </>
          )}
          {isCheck || edit || (
            <>
              <S.IconButton onClick={() => setEdit(true)}>
                <TitleEditIcon />
              </S.IconButton>
              <S.IconButton onClick={() => setIsCheck(true)}>
                <DeleteIcon />
              </S.IconButton>
            </>
          )}
        </S.ButtonContainer>
      )}
    </S.NavigateBox>
  );
}
