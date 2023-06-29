import Profile from "@/assets/profile.webp";
import styled from "styled-components";

interface PropTypes {
  size?: string;
  url: string;
}

export default function UserProfileImage({ size = "30px", url }: PropTypes) {
  return <ProfileImage size={size} src={url} alt="user-profile-image" />;
}

const ProfileImage = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
