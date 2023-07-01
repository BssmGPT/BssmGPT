import { loadingState, valueState } from "@/recoil/gptField.atom";
import { auth } from "@/services/firebase";
import postHistory from "@/utils/apis/postHistory";
import postMessages from "@/utils/apis/postMessages";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export default function useGenerateNewChat() {
  const navigate = useNavigate();
  const value = useRecoilValue(valueState);
  const setLoading = useSetRecoilState(loadingState);

  const handleSubmit = async () => {
    console.log("teest");
    setLoading(true);

    const newLinkId = uuidv4();
    navigate(`/c/${newLinkId}`);
    await postHistory(newLinkId, auth.currentUser?.uid || "user");
    await postMessages(newLinkId, value, []);

    setLoading(false);
  };

  return handleSubmit;
}
