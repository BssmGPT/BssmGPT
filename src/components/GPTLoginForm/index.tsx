import GPTIcon from "@/assets/icons/GPTIcon";
import * as S from "./style";
import GoogleIcon from "@/assets/icons/GoogleIcon";

export default function GPTLoginForm() {
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
            <S.Button>
              <GoogleIcon />
              asdf
            </S.Button>
          </S.Form>
        </S.MainContent>
      </S.Main>
    </S.Container>
  );
}
