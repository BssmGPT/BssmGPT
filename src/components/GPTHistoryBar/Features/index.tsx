import UserProfileImage from "@/components/common/UserProfileImage";
import * as S from "./style";
import MenuIcon from "@/assets/icons/MenuIcon";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import LinkIcon from "@/assets/icons/LinkIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import LogOutIcon from "@/assets/icons/LogOutIcon";

export default function Features() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.classList.remove("hidden");
    } else {
      menuRef.current?.classList.add("hidden");
    }
  }, [isOpen]);

  return (
    <S.Wrapper>
      <S.ToggleButton onClick={() => setIsOpen(!isOpen)}>
        <UserProfileImage size="1.25rem" />
        <S.UserName>asdf</S.UserName>
        <MenuIcon />
      </S.ToggleButton>
      <S.Menu ref={menuRef}>
        <S.Button>
          <DeleteIcon />
          Clear conversations
        </S.Button>
        <S.Button
          onClick={() =>
            window.open(
              "https://help.openai.com/en/collections/3742473-chatgpt"
            )
          }
        >
          <LinkIcon />
          Help & FAQ
        </S.Button>
        <S.Button>
          <SettingsIcon />
          Settings
        </S.Button>
        <S.HorizontalLine />
        <S.Button>
          <LogOutIcon />
          Log out
        </S.Button>
      </S.Menu>
    </S.Wrapper>
  );
}
