import UserProfileImage from "@/components/UserProfileImage";
import * as S from "./style";
import MenuIcon from "@/assets/icons/MenuIcon";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import LinkIcon from "@/assets/icons/LinkIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import LogOutIcon from "@/assets/icons/LogOutIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import deleteAllHistories from "@/utils/apis/deleteAllHistories";

interface PropTypes {
  historiesId: string[];
}

export default function Features({ historiesId }: PropTypes) {
  const navigate = useNavigate();

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

  const removeAllHistories = async () => {
    setIsCheck(false);
    setIsOpen(false);
    await deleteAllHistories(historiesId);
    navigate("/");
  };

  const handleLogoutClick = () => {
    console.log(auth.currentUser);
    signOut(auth).then(() => navigate("/auth/login"));
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.ToggleButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <UserProfileImage
          url={auth.currentUser?.photoURL || ""}
          size="1.25rem"
        />
        <S.UserName>{auth.currentUser?.displayName}</S.UserName>
        <MenuIcon />
      </S.ToggleButton>
      <S.Menu ref={menuRef} className="hidden">
        {historiesId.length > 0 && (
          <S.Button
            onClick={() => (isCheck ? removeAllHistories() : setIsCheck(true))}
          >
            {isCheck ? <CheckIcon /> : <DeleteIcon />}
            {isCheck ? "Confirm clear conversations" : "Clear conversations"}
          </S.Button>
        )}
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
        <S.Button onClick={handleLogoutClick}>
          <LogOutIcon />
          Log out
        </S.Button>
      </S.Menu>
    </S.Wrapper>
  );
}
