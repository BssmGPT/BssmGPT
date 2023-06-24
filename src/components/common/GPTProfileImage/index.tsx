import Profile from "@/assets/bssm-gpt-profile.webp";
import { styled } from "styled-components";

export default function GPTProfileImage() {
  return <ProfileImage src={Profile} alt="gpt-profile-image" />;
}

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;
