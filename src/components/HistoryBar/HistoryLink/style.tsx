import styled, { css } from "styled-components";
import { color } from "@/styles/theme.style";

export const Title = styled.div`
  flex: 1 1 0%;
  word-break: break-all;
  overflow: hidden;
  max-height: 1.25rem;
  position: relative;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const TitleInputWrapper = styled.form`
  overflow: hidden;
`;

export const TitleInput = styled.input`
  width: 100%;
  display: block;
  font-size: 0.875rem;
  background: transparent;
  color: ${color.gray100};
  border: 1px solid #3662e3;
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

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0.25rem;
`;

export const IconButton = styled.button`
  padding: 0.25rem;
  background: transparent;
  color: ${color.gray200};

  &:hover {
    color: white;
  }
`;

export const NavigateBox = styled.div<{
  $isCurrentPage: boolean;
  $isEdit: boolean;
  $isCheckDelete: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: ${color.gray100};
  background: transparent;
  text-align: left;
  cursor: pointer;
  text-decoration: none;

  ${({ $isCurrentPage, $isEdit, $isCheckDelete }) =>
    $isCurrentPage || $isEdit || $isCheckDelete
      ? css`
          padding-right: ${$isEdit || $isCheckDelete ? "3.5rem" : "4.5rem"};

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
