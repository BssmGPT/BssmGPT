import ChattingIcon from "@/assets/icons/ChattingIcon";
import * as S from "./style";
import TitleEditIcon from "@/assets/icons/TitleEditIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";

interface PropTypes {
  id: string;
  title: string;
  isCurrentPage: boolean;
}

export default function HistoryLink({ id, title, isCurrentPage }: PropTypes) {
  return (
    <S.StyledLink to={`/${id}`} $isCurrentPage={isCurrentPage}>
      <ChattingIcon />
      <S.Title>
        {title}
        <S.GradientBox />
      </S.Title>
      {isCurrentPage && (
        <S.ButtonContainer>
          <S.Button>
            <TitleEditIcon />
          </S.Button>
          <S.Button>
            <DeleteIcon />
          </S.Button>
        </S.ButtonContainer>
      )}
    </S.StyledLink>
  );
}
