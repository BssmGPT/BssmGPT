import * as S from "./style";

interface PropTypes {
  children: React.ReactNode;
  type?: "button";
}

export function GPTHomeItem({ children, type }: PropTypes) {
  return type === "button" ? (
    <S.ItemButton>{children}</S.ItemButton>
  ) : (
    <S.Item>{children}</S.Item>
  );
}
