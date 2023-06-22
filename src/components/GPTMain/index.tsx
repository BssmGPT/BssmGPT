import { useParams } from "react-router-dom";
import GPTHome from "./GPTHome";
import GPTBottom from "./GPTBottom";
import * as S from "./style";
import GPTContent from "./GPTContent";

export default function GPTMain() {
  const { id } = useParams();
  console.log(id);

  return (
    <S.GPTMainBox>
      {id ? <GPTContent id={id} /> : <GPTHome />}
      <GPTBottom />
    </S.GPTMainBox>
  );
}
