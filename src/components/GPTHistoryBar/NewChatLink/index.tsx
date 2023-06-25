import AddIcon from "@/assets/icons/AddIcon";
import { NavigateBox } from "./style";
import { useNavigate } from "react-router-dom";

export default function NewChatLink() {
  const navigate = useNavigate();

  return (
    <NavigateBox onClick={() => navigate("/")}>
      <AddIcon />
      New chat
    </NavigateBox>
  );
}
