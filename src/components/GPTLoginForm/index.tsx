import GPTIcon from "@/assets/icons/GPTIcon";
import * as S from "./style";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/services/firebase";
import postUser from "@/utils/apis/postUser";
export default function GPTLoginForm() {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data.user.displayName && data.user.email && data.user.photoURL) {
        postUser(data.user.displayName, data.user.email, data.user.photoURL);
        window.location.href = "/";
      }
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
