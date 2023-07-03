import ChattingIcon from "@/assets/icons/ChattingIcon";
import * as S from "./style";
import TitleEditIcon from "@/assets/icons/TitleEditIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import { useRef, useState } from "react";
import CheckIcon from "@/assets/icons/CheckIcon";
import CancelIcon from "@/assets/icons/CancelIcon";
import { useNavigate } from "react-router-dom";
import updateHistory from "@/utils/apis/updateHistory";
import deleteHistory from "@/utils/apis/deleteHistory";

interface PropTypes {
  id: string;
  title: string;
  isCurrentPage: boolean;
}

export default function HistoryLink({ id, title, isCurrentPage }: PropTypes) {
  const navigate = useNavigate();

  const titleInputRef = useRef<HTMLInputElement>(null);

  const [isEdit, setIsEdit] = useState(false);
  const [isCheckDelete, setIsCheck] = useState(false);
  const [titleValue, setTitleValue] = useState(title);

  const removeHistory = () => {
    setIsCheck(false);
    deleteHistory(id).then(() => navigate("/", { replace: true }));
  };

  const cancelEdit = () => {
    setTitleValue(title);
    setIsEdit(false);
  };

  const changeTitle = () => {
    setIsEdit(false);

    updateHistory(id, titleValue);
  };

  return (
    <S.NavigateBox
      onClick={() => !isCurrentPage && navigate(`/c/${id}`)}
      $isCurrentPage={isCurrentPage}
      $isEdit={isEdit}
      $isCheckDelete={isCheckDelete}
    >
      {isCheckDelete ? <DeleteIcon /> : <ChattingIcon />}
      {isEdit ? (
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

      <S.ButtonContainer>
        {isEdit && (
          <>
            <S.IconButton onMouseDown={changeTitle}>
              <CheckIcon />
            </S.IconButton>
            <S.IconButton onMouseDown={cancelEdit}>
              <CancelIcon />
            </S.IconButton>
          </>
        )}
        {isCheckDelete && (
          <>
            <S.IconButton onClick={removeHistory}>
              <CheckIcon />
            </S.IconButton>
            <S.IconButton onClick={() => setIsCheck(false)}>
              <CancelIcon />
            </S.IconButton>
          </>
        )}
        {isCurrentPage && !isCheckDelete && !isEdit && (
          <>
            <S.IconButton onClick={() => setIsEdit(true)}>
              <TitleEditIcon />
            </S.IconButton>
            <S.IconButton onClick={() => setIsCheck(true)}>
              <DeleteIcon />
            </S.IconButton>
          </>
        )}
      </S.ButtonContainer>
    </S.NavigateBox>
  );
}
