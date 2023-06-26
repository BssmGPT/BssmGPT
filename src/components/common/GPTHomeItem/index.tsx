import * as S from "./style";

interface PropTypes {
  children: React.ReactNode;
  type?: "button";
  onClick?: () => void;
}

export function GPTHomeItem({ children, type, onClick }: PropTypes) {
  return type === "button" ? (
    <S.ItemButton onClick={onClick}>{children}</S.ItemButton>
  ) : (
    <S.Item>{children}</S.Item>
  );
}
