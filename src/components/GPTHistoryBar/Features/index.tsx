import UserProfileImage from "@/components/common/UserProfileImage";
import * as S from "./style";
import MenuIcon from "@/assets/icons/MenuIcon";

export default function Features() {
  return (
    <S.Wrapper>
      <S.ToggleButton>
        <UserProfileImage size="1.25rem" />
        <S.UserName>asdf</S.UserName>
        <MenuIcon />
      </S.ToggleButton>
    </S.Wrapper>
  );
}
