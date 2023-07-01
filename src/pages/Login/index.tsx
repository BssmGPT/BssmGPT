import GPTIcon from "@/assets/icons/GPTIcon";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
        <S.NewTabLink
          href="https://openai.com/policies/terms-of-use"
          target="_blank"
        >
          Terms of use
        </S.NewTabLink>
        <S.VerticalLink>|</S.VerticalLink>
        <S.NewTabLink
          href="https://openai.com/policies/privsacy-policy"
          target="_blank"
        >
          Privacy policy
        </S.NewTabLink>
      </S.BottomText>
    </S.Wrapper>
  );
}
