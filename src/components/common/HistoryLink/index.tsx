import ChattingIcon from "@/assets/icons/ChattingIcon";
import * as S from "./style";

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
    </S.StyledLink>
  );
}
