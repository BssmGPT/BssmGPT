import ChattingIcon from "@/assets/icons/ChattingIcon";
import * as S from "./style";

interface PropTypes {
  id: string;
  title: string;
}

export default function HistoryLink({ id, title }: PropTypes) {
  return (
    <S.StyledLink to={`/${id}`}>
      <ChattingIcon />
      <S.Title>
        {title}
        <S.GradientBox />
      </S.Title>
    </S.StyledLink>
  );
}
