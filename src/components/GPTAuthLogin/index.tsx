import GPTIcon from "@/assets/icons/GPTIcon";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function GPTAuthLogin() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <GPTIcon size="41px" />
        </S.Logo>
        <S.Text style={{ marginBottom: "0.5rem" }}>Welcome to ChatGPT</S.Text>
        <S.Text style={{ marginBottom: "1rem" }}>
          Log in with your OpenAI account to continue
        </S.Text>
        <S.Button onClick={() => navigate("/u/login")}>Log in</S.Button>
      </S.Container>
      <S.BottomText>
        <S.Link target="_blank">Terms of use</S.Link>
        <S.VerticalLink>|</S.VerticalLink>
        <S.Link target="_blank">Privacy policy</S.Link>
      </S.BottomText>
    </S.Wrapper>
  );
}
