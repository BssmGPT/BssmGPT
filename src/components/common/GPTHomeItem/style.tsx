import styled from "styled-components";
import { color } from "@/styles/theme.style";

export const Item = styled.div`
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

export const ItemButton = styled(Item)`
  cursor: pointer;

  &:hover {
    background-color: ${color.gray700};
  }
`;
