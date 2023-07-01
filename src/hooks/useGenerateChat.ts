import { loadingState, valueState } from "@/recoil/gptField.atom";
import postMessages from "@/utils/apis/postMessages";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function useGenerateChat(
  id?: string,
  messages: { role: "user" | "assistant"; content: string; mid: string }[] = []
) {
  const value = useRecoilValue(valueState);
  const setLoading = useSetRecoilState(loadingState);

  const handleSubmit = async () => {
    if (!id) return;
    setLoading(true);
    await postMessages(id, value, messages);
    setLoading(false);
  };

  return handleSubmit;
}
