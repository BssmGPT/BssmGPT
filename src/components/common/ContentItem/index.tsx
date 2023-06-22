import * as S from "./style";

interface PropTypes {
  type?: "button";
  children: React.ReactNode;
}

export default function ContentItem({ type, children }: PropTypes) {
  return type === "button" ? (
    <S.ItemButton>{children}</S.ItemButton>
  ) : (
    <S.Item>{children}</S.Item>
  );
}
