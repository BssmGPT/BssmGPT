import { styled } from "styled-components";
import ChattingIcon from "../../../assets/icons/ChattingIcon";
import { color } from "../../../styles/theme.style";
import { Link } from "react-router-dom";

interface PropTypes {
  id: string;
  title: string;
}

export default function HistoryItem({ id, title }: PropTypes) {
  return (
    <Item to={`/${id}`}>
      <ChattingIcon />
      <Title>
        {title}
        <GradientBox />
      </Title>
    </Item>
  );
}

const Title = styled.div`
  flex: 1;
  position: relative;
`;

const GradientBox = styled.div`
  width: 32px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    to left,
    ${color.gray700},
    rgba(32, 33, 35, 0)
  );
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: ${color.gray100};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${color.gray750};

    & ${GradientBox} {
      background-image: linear-gradient(
        to left,
        ${color.gray750},
        rgba(42, 43, 50, 0)
      );
    }
  }
`;
