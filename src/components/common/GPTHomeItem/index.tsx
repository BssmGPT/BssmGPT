import * as S from "./style";

interface PropTypes {
  children: React.ReactNode;
}

export function GPTHomeItem({ children }: PropTypes) {
  return <S.Item>{children}</S.Item>;
}

export function GPTHomeItemButton({ children }: PropTypes) {
  return <S.ItemButton>{children}</S.ItemButton>;
}
