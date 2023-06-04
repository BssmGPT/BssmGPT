import { styled } from "styled-components";

interface FlexPropTypes {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  alignitems?:
    | "stretch"
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  justifycontent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}
const Flex = styled.div<FlexPropTypes>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
`;

export default Flex;
