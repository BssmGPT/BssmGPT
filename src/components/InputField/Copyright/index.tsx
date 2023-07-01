import { color } from "@/styles/theme.style";
import styled from "styled-components";

export default function Copyright() {
  return (
    <Paragraph>
      Free Research Preview. ChatGPT may produce inaccurate information about
      people, places, or facts. ChatGPT May 24 Version
    </Paragraph>
  );
}

export const Paragraph = styled.footer`
  padding: 0.75rem 1rem 1.5rem;
  color: ${color.gray200};
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  text-align: center;
`;
