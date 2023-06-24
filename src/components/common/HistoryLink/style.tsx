import styled, { css } from "styled-components";
import { color } from "@/styles/theme.style";
import { Link } from "react-router-dom";

export const Title = styled.div`
  flex: 1;
  position: relative;
`;

export const GradientBox = styled.div`
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

export const StyledLink = styled(Link)<{ $isCurrentPage: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: ${color.gray100};
  cursor: pointer;
  text-decoration: none;

  ${({ $isCurrentPage }) =>
    $isCurrentPage
      ? css`
          background: ${color.gray600};
          & ${GradientBox} {
            background-image: linear-gradient(
              to left,
              ${color.gray600},
              rgba(52, 53, 65, 0)
            );
          }
        `
      : css`
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
        `}
`;
