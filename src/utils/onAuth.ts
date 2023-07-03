import { auth } from "@/services/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function onAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
