import { atom } from "recoil";

export interface UserObjTypes {
  displayName: string;
  photoURL: string;
}

export const userObjState = atom<UserObjTypes | null>({
  key: "userDataState",
  default: {
    displayName: "",
    photoURL: "",
  },
});
