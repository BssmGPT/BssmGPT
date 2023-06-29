import GPTIcon from "@/assets/icons/GPTIcon";
import * as S from "./style";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/services/firebase";
import { useNavigate } from "react-router-dom";
export default function GPTLoginForm() {
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };
  return (
    <S.Container>
      <S.Header>
        <GPTIcon fill="black" size="32px" />
      </S.Header>
      <S.Main>
        <S.MainContent>
          <S.WelcomeHeader>
            <S.WelcomeText>Welcome</S.WelcomeText>
          </S.WelcomeHeader>
          <S.Form>
            <S.Button onClick={handleClick}>
              <GoogleIcon />
              asdf
            </S.Button>
          </S.Form>
        </S.MainContent>
      </S.Main>
    </S.Container>
  );
}
