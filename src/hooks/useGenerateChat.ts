import postMessages from "@/utils/apis/postMessages";

export default function useGenerateChat() {
  const handleSubmit = async (
    id: string,
    value: string,
    messages: {
      role: "user" | "assistant";
      content: string;
      mid: string;
    }[] = []
  ) => {
    await postMessages(id, value, messages);
  };

  return handleSubmit;
}
