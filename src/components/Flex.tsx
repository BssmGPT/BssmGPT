import { styled } from "styled-components";

interface FlexPropTypes {
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
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface DirectionalFlexPropTypes extends FlexPropTypes {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
}

function FlexBox({
  gap,
  alignitems,
  justifycontent,
  children,
  style,
  direction,
}: DirectionalFlexPropTypes) {
  return (
    <StyledFlexBox
      style={style}
      direction={direction}
      gap={gap}
      alignitems={alignitems}
      justifycontent={justifycontent}
    >
      {children}
    </StyledFlexBox>
  );
}

const StyledFlexBox = styled.div<DirectionalFlexPropTypes>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  align-items: ${({ alignitems }) => alignitems};
  justify-content: ${({ justifycontent }) => justifycontent};
`;

export function Row({
  gap,
  alignitems,
  justifycontent,
  children,
  style,
}: FlexPropTypes) {
  return (
    <FlexBox
      direction="row"
      gap={gap}
      alignitems={alignitems}
      justifycontent={justifycontent}
      style={style}
    >
      {children}
    </FlexBox>
  );
}

export function Column({
  gap,
  alignitems,
  justifycontent,
  children,
  style,
}: FlexPropTypes) {
  return (
    <FlexBox
      direction="column"
      gap={gap}
      alignitems={alignitems}
      justifycontent={justifycontent}
      style={style}
    >
      {children}
    </FlexBox>
  );
}
