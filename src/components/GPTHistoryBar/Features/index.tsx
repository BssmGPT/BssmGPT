import UserProfileImage from "@/components/common/UserProfileImage";
import * as S from "./style";
import MenuIcon from "@/assets/icons/MenuIcon";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import LinkIcon from "@/assets/icons/LinkIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import LogOutIcon from "@/assets/icons/LogOutIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import { useSetRecoilState } from "recoil";
import HistoryItemState from "@/constants/History.constant";

export default function Features() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenuRef = useRef(({ target }: Event) => {
    if (!wrapperRef.current?.contains(target as Node)) {
      setIsOpen(false);
      document.removeEventListener("click", closeMenuRef.current);
    }
  });

  const serHistoryItem = useSetRecoilState(HistoryItemState);

  useEffect(() => {
    if (isOpen) {
      setIsCheck(false);
      menuRef.current?.classList.remove("hidden");
      document.addEventListener("click", closeMenuRef.current);
    } else {
      menuRef.current?.classList.add("hidden");
      document.removeEventListener("click", closeMenuRef.current);
    }
  }, [isOpen]);

  const deleteAllHistory = () => {
    setIsCheck(false);
    setIsOpen(false);
    serHistoryItem([]);
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.ToggleButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <UserProfileImage size="1.25rem" />
        <S.UserName>asdf</S.UserName>
        <MenuIcon />
      </S.ToggleButton>
      <S.Menu ref={menuRef} className="hidden">
        <S.Button
          onClick={() => (isCheck ? deleteAllHistory() : setIsCheck(true))}
        >
          {isCheck ? <CheckIcon /> : <DeleteIcon />}
          {isCheck ? "Confirm clear conversations" : "Clear conversations"}
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
