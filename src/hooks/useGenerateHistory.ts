import { auth } from "@/services/firebase";
import postHistory from "@/utils/apis/postHistory";

export default function useGenerateHistory() {
  const handleSubmit = async (id: string) => {
    await postHistory(id, auth.currentUser?.uid || "user");
  };
  return handleSubmit;
}
