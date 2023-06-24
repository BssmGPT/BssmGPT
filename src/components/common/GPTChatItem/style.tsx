import { color } from "@/styles/theme.style";
import { styled } from "styled-components";

export const Wrapper = styled.div<{ role: "user" | "gpt" }>`
  background-color: ${({ role }) => role === "gpt" && color.gray450};

  border: 0 solid rgba(32, 33, 35, 0.5);
  border-bottom-width: 1px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: auto;
  display: flex;
  gap: 1.5rem;

  @media (min-width: 768px) {
    max-width: 42rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    max-width: 38rem;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1280px) {
    max-width: 48rem;
  }
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const Content = styled.div<{ role: "user" | "gpt" }>`
  position: relative;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: ${({ role }) => (role === "user" ? "1.5rem" : "1.75rem")};

  @media (min-width: 1024px) {
    width: calc(100% - 115px);
  }
`;

export const Text = styled.p``;

export const ButtonWrapper = styled.div``;

export const ButtonContainer = styled.div<{ $alwaysshow?: boolean }>`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (min-width: 1024px) {
    ${Wrapper}:not(:hover) & {
      display: ${({ $alwaysshow }) => ($alwaysshow ? "flex" : "none")};
    }

    position: absolute;
    right: 0;
    top: 0;
    padding-left: 0.5rem;
    margin: 0;
    transform: translateX(100%);
    gap: 0.25rem;
  }
`;

export const BottomButtonGroup = styled.div`
  padding-top: 0.5rem;
  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 0.375rem;
  background-color: transparent;
  padding: 0.25rem;
  color: ${color.gray250};

  &:hover {
    color: ${color.gray150};
    background-color: ${color.gray500};
  }
`;
