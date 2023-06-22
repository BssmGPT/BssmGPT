import styled from "styled-components";
import { color } from "../../../styles/theme.style";

interface PropTypes {
  type?: "button";
  children: React.ReactNode;
}

export default function ContentItem({ type, children }: PropTypes) {
  return type === "button" ? (
    <ItemButton>{children}</ItemButton>
  ) : (
    <Item>{children}</Item>
  );
}

const Item = styled.div`
  text-align: center;
  padding: 0.75rem;
  background-color: #ffffff0d;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-family: Söhne, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.25rem;
`;

const ItemButton = styled(Item)`
  cursor: pointer;
  &:hover {
    background-color: ${color.gray700};
  }
`;
