import { atom } from "recoil";

export const chattingsState = atom<
  {
    id: string;
    messages: { id: string; role: "user" | "assistant"; content: string }[];
  }[]
>({
  key: "gptFieldValueState",
  default: [],
});
