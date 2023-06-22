import { useParams } from "react-router-dom";
import GPTHome from "./GPTHome";
import GPTBottom from "./GPTBottom";
import * as S from "./style";

export default function GPTMain() {
  const { id } = useParams();
  console.log(id);

  return (
    <S.GPTMainBox>
      {id ? <>asd</> : <GPTHome />}
      <GPTBottom />
    </S.GPTMainBox>
  );
}
