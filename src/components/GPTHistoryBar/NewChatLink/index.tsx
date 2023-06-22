import AddIcon from "@/assets/icons/AddIcon";
import { StyledLink } from "./style";

export default function NewChatLink() {
  return (
    <StyledLink to="/">
      <AddIcon />
      New chat
    </StyledLink>
  );
}
