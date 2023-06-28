import { atom } from "recoil";

export const valueState = atom({
  key: "gptFieldValueState",
  default: "",
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});
